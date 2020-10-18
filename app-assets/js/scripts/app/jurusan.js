$(document).ready(function() {
  var datajurusan;
  var datajurusan2;
  var datajurusan3;
  id = $('#siswa_id').val();
  $.ajax({
    url: "./jurusan/get_all",
    type: "GET",
    dataType: "JSON",
    success: function(data) {
      $.each(data, function (key, value) {
          $('#jurusan_ke1').append('<option value=' + value.jurusan_id + '>' + value.jurusan_nama + '</option>');
      });
      window.datajurusan = data;
      //get data
      $.ajax({
        url: "./jurusan/get/"+id,
        type: "GET",
        dataType: "JSON",
        success: function(data) {
          if(data.length != 0){
            set1(data);
          }
        }
      });
    }
  });

})

function getlist2() {
  $('#jurusan_ke2').empty();
  pil1 = $('#jurusan_ke1').val();
  var data = window.datajurusan;
  var data_filter = data.filter( element => element.jurusan_id != pil1);
  console.log(data_filter);
  $('#jurusan_ke2').append('<option value="0">Pilih Jurusan</option>');
  $.each(data_filter, function (key, value) {
      $('#jurusan_ke2').append('<option value=' + value.jurusan_id + '>' + value.jurusan_nama + '</option>');
  });
  window.datajurusan2 = data_filter;
}

function getlist3() {
  $('#jurusan_ke3').empty();
  pil2 = $('#jurusan_ke2').val();
  var data = window.datajurusan2;
  var data_filter = data.filter( element => element.jurusan_id != pil2);
  console.log(data_filter);
  $('#jurusan_ke3').append('<option value="0">Pilih Jurusan</option>');
  $.each(data_filter, function (key, value) {
      $('#jurusan_ke3').append('<option value=' + value.jurusan_id + '>' + value.jurusan_nama + '</option>');
  });
}

function set1(data) {
  console.log("Set data");
  $.each(data, function (key, value) {
      $('#jurusan_ke'+value.jurusan_ke).val(value.jurusan_id);
      $('#jurusan_ke'+value.jurusan_ke).change();
  });
}