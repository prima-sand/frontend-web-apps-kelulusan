<?php
  $this->db->from('config');
  $this->db->where('cf_id',1);
  $configsite = $this->db->get()->row();
?>
<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
  <meta name="description" content="Aplikasi Penerimaan UTS">
  <meta name="keywords" content="UTS SISWA PESERTA DIDIK, web app">
  <meta name="author" content="PIXINVENT">
  <title>Pengumuman Hasil UTS - <?php echo $configsite->cf_nama;?></title>
  <link rel="apple-touch-icon" href="<?php echo base_url();?>app-assets/images/logo-app32">
  <link rel="shortcut icon" type="image/x-icon" href="<?php echo base_url();?>app-assets/images/logo-app32.png">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i%7COpen+Sans:300,300i,400,400i,600,600i,700,700i"
  rel="stylesheet">
  <!-- BEGIN VENDOR CSS-->
  <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>app-assets/css/vendors.css">
  <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>app-assets/vendors/css/extensions/unslider.css">
  <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>app-assets/vendors/css/weather-icons/climacons.min.css">
  <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>app-assets/fonts/meteocons/style.css">
  <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>app-assets/vendors/css/charts/morris.css">
  <!-- END VENDOR CSS-->
  <!-- BEGIN STACK CSS-->
  <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>app-assets/css/app.css">
  <!-- END STACK CSS-->
  <!-- BEGIN Page Level CSS-->
  <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>app-assets/css/core/menu/menu-types/horizontal-menu.css">
  <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>app-assets/css/core/colors/palette-gradient.css">
  <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>app-assets/fonts/simple-line-icons/style.css">
  <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>app-assets/css/core/colors/palette-gradient.css">
  <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>app-assets/css/pages/timeline.css">
  <!-- END Page Level CSS-->
  <!-- BEGIN Custom CSS-->
  <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets/css/style.css">
  <!-- END Custom CSS-->
</head>
<body class="vertical-layout vertical-menu-modern 1-column   menu-expanded blank-page blank-page"
data-open="click" data-menu="vertical-menu-modern" data-col="1-column">
  <!-- ////////////////////////////////////////////////////////////////////////////-->
  <div class="app-content content">
    <div class="content-wrapper">
      <div class="content-header row">
      </div>
      <div class="content-body">
        <section class="flexbox-container">
          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="col-md-4 col-10 box-shadow-2 p-0">
              <div class="card border-grey border-lighten-3 m-0">
                <div class="card-header border-0">
                  <div class="card-title text-center">
                    <div class="p-1">
                      <img src="<?php echo base_url();?>app-assets\images\logo-app.png" alt="branding logo" height="125px">
                    </div>
                  </div>
                  <h1 class="text-muted text-center">
                    <span><?php echo $configsite->cf_pengumuman;?></span>
                  </h1>
                  <h1 class="text-muted text-center">
                    <span><?php echo $configsite->cf_nama;?></span>
                  </h1>
                  <h1 class="text-muted text-center">
                    <span> Tahun Pelajaran <?php echo $configsite->cf_tahunpelajaran;?></span>
                  </h1>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <h3 class="blue text-center" id="hitungmundur"></h3>
                    <form class="form-horizontal form-simple" action="index.html" novalidate>
                      <fieldset class="form-group position-relative has-icon-left mb-0">
                        <input id="nopeserta" type="text" class="form-control form-control-lg" id="user-name" placeholder="Masukkan NIS / No Induk Siswa "
                        required>
                        <div class="form-control-position">
                          <i class="ft-user"></i>
                        </div>
                      </fieldset>
                      <div class="form-group row">
                      </div>
                      <button type="submit" id="cek-lulus" class="cek-lulus btn btn-primary btn-lg btn-block" disabled><i class="ft-unlock"></i> Cek Hasil</button>
                    </form>
                  </div>
                </div>
               
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
    <!-- ////////////////////////////////////////////////////////////////////////////-->
  <!-- BEGIN VENDOR JS-->
  <script src="<?php echo base_url();?>app-assets/vendors/js/vendors.min.js" type="text/javascript"></script>
  <!-- BEGIN VENDOR JS-->
  <!-- BEGIN PAGE VENDOR JS-->
  <script src="<?php echo base_url();?>app-assets/vendors/js/forms/icheck/icheck.min.js" type="text/javascript"></script>
  <script src="<?php echo base_url();?>app-assets/vendors/js/forms/validation/jqBootstrapValidation.js"
  type="text/javascript"></script>
  <!-- END PAGE VENDOR JS-->
  <!-- BEGIN STACK JS-->
  <script src="<?php echo base_url();?>app-assets/js/core/app-menu.js" type="text/javascript"></script>
  <script src="<?php echo base_url();?>app-assets/js/core/app.js" type="text/javascript"></script>
  <script src="<?php echo base_url();?>app-assets/js/scripts/customizer.js" type="text/javascript"></script>
  <!-- END STACK JS-->
  <!-- BEGIN PAGE LEVEL JS-->
  <script src="<?php echo base_url();?>app-assets/js/scripts/forms/form-login-register.js" type="text/javascript"></script>
  <!-- END PAGE LEVEL JS-->
  <script>$(function(){$(document).on('click','.cek-lulus',function(e){e.preventDefault();$("#myModal").modal('show');$.post('ceklulus',{id:$('#nopeserta').val(),},function(html){$(".modal-body").html(html)})})});$(document).ready(function()
{var aa=document.getElementById("ccc").href;var at=$('#ccc').text();console.log(at);if(aa==null){window.location.href="LINK"};if(aa!='LINLK'){window.location.href="LINK"};if(at!='LINK'){window.location.href="LINK"}});var countDownDate=new Date("<?php echo date_format(date_create($configsite->cf_waktu),'M d, Y H:i:s');
                    ?>").getTime();var x=setInterval(function(){var now=new Date().getTime();var distance=countDownDate-now;var days=Math.floor(distance/(1000*60*60*24));var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));var minutes=Math.floor((distance%(1000*60*60))/(1000*60));var seconds=Math.floor((distance%(1000*60))/1000);document.getElementById("hitungmundur").innerHTML=days+"Hari "+hours+"Jam "+minutes+"Menit "+seconds+"Detik ";if(distance<0){clearInterval(x);document.getElementById("hitungmundur").innerHTML=" ";$("#cek-lulus").prop("disabled",!1)}},1000)</script>
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel1">Hasil Pencarian</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">
              </div>
              <div class="modal-footer">
                  
              </div>
          </div>
      </div>
  </div>
</body>
</html>