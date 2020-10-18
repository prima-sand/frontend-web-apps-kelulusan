<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {
	public function index()
	{
		$data = array(
				'namepage' => "Login"
		);
		$this->load->view('login',$data);
	}

	protected function _verify_credentials($user_email,$user_password){
		$condition = [
		                'user_email' => $user_email,
		            ];

	    $result = $this->db->from('users')
	                        ->where($condition)->get();
	    if($result->num_rows() === 1){
	        $user = $result->row_array();
	        if(password_verify($user_password, $user['user_password'])){
	            unset($user['user_password']);
				return $user;
	        } else {
				return false;
	        }
	    } else {
			return false;
	    }
	}

	public function login()
	{
		if ($this->session->userdata('user_nama')!="") {
			redirect('dashboard');
		}
		$user_email = $this->input->post('user_nama');
		$user_password = $this->input->post('user_password');
	    if ($this->_verify_credentials($user_email,$user_password) == true ){
	    	$condition = [
		                'user_email' => $user_email,
		            ];

	    	$result = $this->db->from('users')
	                        ->where($condition)->get();
	        $user = $result->row_array();
	    	$dt = array(
		        'user_nama'  => $user['user_nama'],
		        'user_email'  => $user['user_email'],
		        'user_id'  => $user['user_id'],
		        'logged_in' => TRUE
			);

			$this->session->set_userdata($dt);
	    	redirect('dashboard');
	    } else {
		    $data = array(
					'namepage' => "Login"
			);
	    	$this->session->set_flashdata('login_gagal', 'Login Gagal! Email atau Password Salah');
	    	$this->load->view('auth',$data);
	    }
	}

	public function daftar()
	{
		if(isset($_SESSION['daftar_gagal'])){
		    unset($_SESSION['daftar_gagal']);
		}
		if(isset($_SESSION['daftar_sukses'])){
		    unset($_SESSION['daftar_sukses']);
		}
		$this->load->model('user_model');
		if ($this->session->userdata('user_nama')!="") {
			redirect('dashboard');
		}
		$user_nama = $this->input->post('user_nama');
		$user_email = $this->input->post('user_email');
		$user_password = $this->input->post('user_password');
		$confirm_password = $this->input->post('confirm_password');

		if ($this->user_model->cekemail($user_email) == true){
			$data = array(
					'namepage' => "Login"
			);
			$this->session->set_flashdata('daftar_gagal', 'Daftar Akun Gagal! Email Sudah Digunakan');
	    	$this->load->view('login',$data);
		} else {
			if ( $user_password != $confirm_password ){
				$data = array(
						'namepage' => "Login"
				);
		    	$this->session->set_flashdata('daftar_gagal', 'Daftar Akun Gagal! Password Harus Sama');
		    	$this->load->view('login',$data);
			} else {
				if ($this->_tambahuser($user_nama,$user_email,$user_password) == true ){
				    $data = array(
							'namepage' => "Login"
					);
			    	$this->session->set_flashdata('daftar_sukses', 'Daftar Akun Berhasil! Silahkan Login untuk melengkapi data!');
			    	$this->load->view('login',$data);
			    } else {
				    $data = array(
							'namepage' => "Login"
					);
			    	$this->session->set_flashdata('daftar_gagal', 'Daftar Akun Gagal! Silahkan coba lagi');
			    	$this->load->view('login',$data);
			    }
			}
		}

	}

	public function _tambahuser($user_nama,$user_email,$user_password)
	{
		$passw= password_hash($user_password, PASSWORD_DEFAULT);
		$data = array(
		        'user_nama' => $user_nama,
		        'user_email' => $user_email,
		        'user_password' => $passw
		);

		if($this->db->insert('users', $data)){
			$insert_id = $this->db->insert_id();
			$datagroup = array(
			        'group_id' => 2,
			        'user_id' => $insert_id
			);
			$this->db->insert('ms_user_group', $datagroup);
			return true;
		} else {
			return false;
		}
	}

	public function updatepassword()
	{
		if ($this->session->userdata('user_nama')== "") {
			redirect('dashboard');
		}
		$user_email = $this->session->userdata('user_email');
		$user_password = $this->input->post('pw_lama');
		$pw_baru = $this->input->post('pw_baru');
		$pw_konfirm = $this->input->post('pw_konfirm');
	    if ($this->_verify_credentials($user_email,$user_password) == true ){
	    	if ($pw_baru == $pw_konfirm) {
				$passw= password_hash($pw_baru, PASSWORD_DEFAULT);
				$dt = array(
				        'user_password' => $passw
				);

				$this->db->where('user_id',$this->session->userdata('user_id'));
				$this->db->update('users',$dt);

				$data = array(
						'namepage' => 'Data Sekolah'
				);
		    	$this->session->set_flashdata('update_sukses', 'Upadate Password Berhasil!');
				$this->template->render('data_sekolah',$data);
	    	} else {
		    	$data = array(
					'namepage' => 'Data Sekolah'
				);
		    	$this->session->set_flashdata('update_gagal', 'Upadate Password Gagal! Password Baru dan Konfirmasi Password Tidak Sama');
				$this->template->render('data_sekolah',$data);
	    	}
	    } else {
			$data = array(
					'namepage' => 'Data Sekolah'
			);
	    	$this->session->set_flashdata('update_gagal', 'Upadate Password Gagal! Password Lama Salah');
			$this->template->render('data_sekolah',$data);
	    }
	}
	public function logout()
	{
		session_destroy();
		redirect ('auth');
	}
}
