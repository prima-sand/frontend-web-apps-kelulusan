$(document).ready(function(){
  $("#file_1").change(function(e){
      $('#btnfile_1').prop('disabled', false);
      $('#infofile_1').hide();
      var fileName = e.target.files[0].name;
      var fileSize = e.target.files[0].size;
      if (fileSize > "1024000"){
        $('#btnfile_1').prop('disabled', true);
        $('#infofile_1').show();
      } else {
        $("#labelfile_1").empty();
        $("#labelfile_1").append(fileName);
      }
  });

  $("#file_2").change(function(e){
      $('#btnfile_2').prop('disabled', false);
      $('#infofile_2').hide();
      var fileName = e.target.files[0].name;
      var fileSize = e.target.files[0].size;
      if (fileSize > "1024000"){
        $('#btnfile_2').prop('disabled', true);
        $('#infofile_2').show();
      } else {
        $("#labelfile_2").empty();
        $("#labelfile_2").append(fileName);
      }
  });

  $("#file_3").change(function(e){
      $('#btnfile_3').prop('disabled', false);
      $('#infofile_3').hide();
      var fileName = e.target.files[0].name;
      var fileSize = e.target.files[0].size;
      if (fileSize > "1024000"){
        $('#btnfile_3').prop('disabled', true);
        $('#infofile_3').show();
      } else {
        $("#labelfile_3").empty();
        $("#labelfile_3").append(fileName);
      }
  });

  $("#file_4").change(function(e){
      $('#btnfile_4').prop('disabled', false);
      $('#infofile_4').hide();
      var fileName = e.target.files[0].name;
      var fileSize = e.target.files[0].size;
      if (fileSize > "1024000"){
        $('#btnfile_4').prop('disabled', true);
        $('#infofile_4').show();
      } else {
        $("#labelfile_4").empty();
        $("#labelfile_4").append(fileName);
      }
  });

  $("#file_5").change(function(e){
      $('#btnfile_5').prop('disabled', false);
      $('#infofile_5').hide();
      var fileName = e.target.files[0].name;
      var fileSize = e.target.files[0].size;
      if (fileSize > "1024000"){
        $('#btnfile_5').prop('disabled', true);
        $('#infofile_5').show();
      } else {
        $("#labelfile_5").empty();
        $("#labelfile_5").append(fileName);
      }
  });

  $("#file_6").change(function(e){
      $('#btnfile_6').prop('disabled', false);
      $('#infofile_6').hide();
      var fileName = e.target.files[0].name;
      var fileSize = e.target.files[0].size;
      if (fileSize > "1024000"){
        $('#btnfile_6').prop('disabled', true);
        $('#infofile_6').show();
      } else {
        $("#labelfile_6").empty();
        $("#labelfile_6").append(fileName);
      }
  });

  $("#file_7").change(function(e){
      $('#btnfile_7').prop('disabled', false);
      $('#infofile_7').hide();
      var fileName = e.target.files[0].name;
      var fileSize = e.target.files[0].size;
      if (fileSize > "1024000"){
        $('#btnfile_7').prop('disabled', true);
        $('#infofile_7').show();
      } else {
        $("#labelfile_7").empty();
        $("#labelfile_7").append(fileName);
      }
  });

  $("#file_8").change(function(e){
      $('#btnfile_8').prop('disabled', false);
      $('#infofile_8').hide();
      var fileName = e.target.files[0].name;
      var fileSize = e.target.files[0].size;
      if (fileSize > "1024000"){
        $('#btnfile_8').prop('disabled', true);
        $('#infofile_8').show();
      } else {
        $("#labelfile_8").empty();
        $("#labelfile_8").append(fileName);
      }
  });

  $("#file_9").change(function(e){
      $('#btnfile_9').prop('disabled', false);
      $('#infofile_9').hide();
      var fileName = e.target.files[0].name;
      var fileSize = e.target.files[0].size;
      if (fileSize > "1024000"){
        $('#btnfile_9').prop('disabled', true);
        $('#infofile_9').show();
      } else {
        $("#labelfile_9").empty();
        $("#labelfile_9").append(fileName);
      }
  });

  $("#file_10").change(function(e){
      $('#btnfile_10').prop('disabled', false);
      $('#infofile_10').hide();
      var fileName = e.target.files[0].name;
      var fileSize = e.target.files[0].size;
      if (fileSize > "1024000"){
        $('#btnfile_10').prop('disabled', true);
        $('#infofile_10').show();
      } else {
        $("#labelfile_10").empty();
        $("#labelfile_10").append(fileName);
      }
  });

  $('#submit1').submit(function(e){
    if ($('#file_1').val() != '') {
      e.preventDefault(); 
         $.ajax({
             url:'./datasekolah/do_upload', //URL submit
             type:"post", //method Submit
             data:new FormData(this), //penggunaan FormData
             processData:false,
             contentType:false,
             cache:false,
             async:false,
              success: function(data){
                $("#btncol1").empty();
                $("#btncol1").append('<a href="./assets/berkas/'+data+'" class="btn btn-success" id="btnview_1" target="_blank"><i class="ft ft-eye"></i> Lihat</a> <button type="submit" class="btn btn-info" id="btnfile_1"> <i class="ft ft-upload"></i> Upload</button>');
                location.reload();
           }
         });
    };
  });

  $('#submit2').submit(function(e){
    if ($('#file_2').val() != '') {
      e.preventDefault(); 
      var message = $('.multiple-msgs');
      var block_ele = $('.block-element').closest('.card');
      $(block_ele).block({
          message: message,
          overlayCSS: {
              backgroundColor: '#fff',
              opacity: 0.8,
              cursor: 'wait'
          },
          css: {
      // width: 200,
              border: 0,
              padding: 0,
              backgroundColor: 'transparent'
          },
          onBlock: function(){
            clearTimeout();
          }
      });

      window.setTimeout(function () {
        message.html('<div class="semibold"><span class="ft-refresh-cw icon-spin text-left"></span>&nbsp; Loading ...</div>');
      }, 0);

         $.ajax({
             url:'./uploadberkas/do_upload', //URL submit
             type:"post", //method Submit
             data:new FormData(this), //penggunaan FormData
             processData:false,
             contentType:false,
             cache:false,
             async:false,
              success: function(data){
                $("#btncol2").empty();
                $("#btncol2").append('<a href="./assets/berkas/'+data+'" class="btn btn-success" id="btnview_2" target="_blank"><i class="ft ft-eye"></i> Lihat</a> <button type="submit" class="btn btn-info" id="btnfile_2"> <i class="ft ft-upload"></i> Upload</button>');
                window.setTimeout(function () {
                  message.addClass('bg-success').html('<div class="semibold"><span class="icon-thumbs-o-up text-left"></span>&nbsp; Upload Berhasil</div>');
                }, 2000);

                window.setTimeout(function () {
                   $(block_ele).unblock(function () {
                    console.log('unblock');
                   });
                }, 4000);
           }
         });
    };
  });

  $('#submit_3').submit(function(e){
    if ($('#file_3').val() != '') {
      e.preventDefault(); 
      var message = $('.multiple-msgs');
      var block_ele = $('.block-element').closest('.card');
      $(block_ele).block({
          message: message,
          overlayCSS: {
              backgroundColor: '#fff',
              opacity: 0.8,
              cursor: 'wait'
          },
          css: {
      // width: 200,
              border: 0,
              padding: 0,
              backgroundColor: 'transparent'
          },
          onBlock: function(){
            clearTimeout();
          }
      });

      window.setTimeout(function () {
        message.html('<div class="semibold"><span class="ft-refresh-cw icon-spin text-left"></span>&nbsp; Loading ...</div>');
      }, 0);

         $.ajax({
             url:'./uploadberkas/do_upload', //URL submit
             type:"post", //method Submit
             data:new FormData(this), //penggunaan FormData
             processData:false,
             contentType:false,
             cache:false,
             async:false,
              success: function(data){
                $("#btncol_3").empty();
                $("#btncol_3").append('<a href="./assets/berkas/'+data+'" class="btn btn-success" id="btnview_3" target="_blank"><i class="ft ft-eye"></i> Lihat</a> <button type="submit" class="btn btn-info" id="btnfile_3"> <i class="ft ft-upload"></i> Upload</button>');
                window.setTimeout(function () {
                  message.addClass('bg-success').html('<div class="semibold"><span class="icon-thumbs-o-up text-left"></span>&nbsp; Upload Berhasil</div>');
                }, 2000);

                window.setTimeout(function () {
                   $(block_ele).unblock(function () {
                    console.log('unblock');
                   });
                }, 4000);
           }
         });
    };
  });

  $('#submit_4').submit(function(e){
    if ($('#file_4').val() != '') {
      e.preventDefault(); 
      var message = $('.multiple-msgs');
      var block_ele = $('.block-element').closest('.card');
      $(block_ele).block({
          message: message,
          overlayCSS: {
              backgroundColor: '#fff',
              opacity: 0.8,
              cursor: 'wait'
          },
          css: {
      // width: 200,
              border: 0,
              padding: 0,
              backgroundColor: 'transparent'
          },
          onBlock: function(){
            clearTimeout();
          }
      });

      window.setTimeout(function () {
        message.html('<div class="semibold"><span class="ft-refresh-cw icon-spin text-left"></span>&nbsp; Loading ...</div>');
      }, 0);

         $.ajax({
             url:'./uploadberkas/do_upload', //URL submit
             type:"post", //method Submit
             data:new FormData(this), //penggunaan FormData
             processData:false,
             contentType:false,
             cache:false,
             async:false,
              success: function(data){
                $("#btncol_4").empty();
                $("#btncol_4").append('<a href="./assets/berkas/'+data+'" class="btn btn-success" id="btnview_4" target="_blank"><i class="ft ft-eye"></i> Lihat</a> <button type="submit" class="btn btn-info" id="btnfile_4"> <i class="ft ft-upload"></i> Upload</button>');
                window.setTimeout(function () {
                  message.addClass('bg-success').html('<div class="semibold"><span class="icon-thumbs-o-up text-left"></span>&nbsp; Upload Berhasil</div>');
                }, 2000);

                window.setTimeout(function () {
                   $(block_ele).unblock(function () {
                    console.log('unblock');
                   });
                }, 4000);
           }
         });
    };
  });

  $('#submit_5').submit(function(e){
    if ($('#file_5').val() != '') {
      e.preventDefault(); 
      var message = $('.multiple-msgs');
      var block_ele = $('.block-element').closest('.card');
      $(block_ele).block({
          message: message,
          overlayCSS: {
              backgroundColor: '#fff',
              opacity: 0.8,
              cursor: 'wait'
          },
          css: {
      // width: 200,
              border: 0,
              padding: 0,
              backgroundColor: 'transparent'
          },
          onBlock: function(){
            clearTimeout();
          }
      });

      window.setTimeout(function () {
        message.html('<div class="semibold"><span class="ft-refresh-cw icon-spin text-left"></span>&nbsp; Loading ...</div>');
      }, 0);

         $.ajax({
             url:'./uploadberkas/do_upload', //URL submit
             type:"post", //method Submit
             data:new FormData(this), //penggunaan FormData
             processData:false,
             contentType:false,
             cache:false,
             async:false,
              success: function(data){
                $("#btncol_5").empty();
                $("#btncol_5").append('<a href="./assets/berkas/'+data+'" class="btn btn-success" id="btnview_5" target="_blank"><i class="ft ft-eye"></i> Lihat</a> <button type="submit" class="btn btn-info" id="btnfile_5"> <i class="ft ft-upload"></i> Upload</button>');
                window.setTimeout(function () {
                  message.addClass('bg-success').html('<div class="semibold"><span class="icon-thumbs-o-up text-left"></span>&nbsp; Upload Berhasil</div>');
                }, 2000);

                window.setTimeout(function () {
                   $(block_ele).unblock(function () {
                    console.log('unblock');
                   });
                }, 4000);
           }
         });
    };
  });

  $('#submit_6').submit(function(e){
    if ($('#file_6').val() != '') {
      e.preventDefault(); 
      var message = $('.multiple-msgs');
      var block_ele = $('.block-element').closest('.card');
      $(block_ele).block({
          message: message,
          overlayCSS: {
              backgroundColor: '#fff',
              opacity: 0.8,
              cursor: 'wait'
          },
          css: {
      // width: 200,
              border: 0,
              padding: 0,
              backgroundColor: 'transparent'
          },
          onBlock: function(){
            clearTimeout();
          }
      });

      window.setTimeout(function () {
        message.html('<div class="semibold"><span class="ft-refresh-cw icon-spin text-left"></span>&nbsp; Loading ...</div>');
      }, 0);

         $.ajax({
             url:'./uploadberkas/do_upload', //URL submit
             type:"post", //method Submit
             data:new FormData(this), //penggunaan FormData
             processData:false,
             contentType:false,
             cache:false,
             async:false,
              success: function(data){
                $("#btncol_6").empty();
                $("#btncol_6").append('<a href="./assets/berkas/'+data+'" class="btn btn-success" id="btnview_6" target="_blank"><i class="ft ft-eye"></i> Lihat</a> <button type="submit" class="btn btn-info" id="btnfile_6"> <i class="ft ft-upload"></i> Upload</button>');
                window.setTimeout(function () {
                  message.addClass('bg-success').html('<div class="semibold"><span class="icon-thumbs-o-up text-left"></span>&nbsp; Upload Berhasil</div>');
                }, 2000);

                window.setTimeout(function () {
                   $(block_ele).unblock(function () {
                    console.log('unblock');
                   });
                }, 4000);
           }
         });
    };
  });

  $('#submit_7').submit(function(e){
    if ($('#file_7').val() != '') {
      e.preventDefault(); 
      var message = $('.multiple-msgs');
      var block_ele = $('.block-element').closest('.card');
      $(block_ele).block({
          message: message,
          overlayCSS: {
              backgroundColor: '#fff',
              opacity: 0.8,
              cursor: 'wait'
          },
          css: {
      // width: 200,
              border: 0,
              padding: 0,
              backgroundColor: 'transparent'
          },
          onBlock: function(){
            clearTimeout();
          }
      });

      window.setTimeout(function () {
        message.html('<div class="semibold"><span class="ft-refresh-cw icon-spin text-left"></span>&nbsp; Loading ...</div>');
      }, 0);

         $.ajax({
             url:'./uploadberkas/do_upload', //URL submit
             type:"post", //method Submit
             data:new FormData(this), //penggunaan FormData
             processData:false,
             contentType:false,
             cache:false,
             async:false,
              success: function(data){
                $("#btncol_7").empty();
                $("#btncol_7").append('<a href="./assets/berkas/'+data+'" class="btn btn-success" id="btnview_7" target="_blank"><i class="ft ft-eye"></i> Lihat</a> <button type="submit" class="btn btn-info" id="btnfile_7"> <i class="ft ft-upload"></i> Upload</button>');
                window.setTimeout(function () {
                  message.addClass('bg-success').html('<div class="semibold"><span class="icon-thumbs-o-up text-left"></span>&nbsp; Upload Berhasil</div>');
                }, 2000);

                window.setTimeout(function () {
                   $(block_ele).unblock(function () {
                    console.log('unblock');
                   });
                }, 4000);
           }
         });
    };
  });

  $('#submit_8').submit(function(e){
    if ($('#file_8').val() != '') {
      e.preventDefault(); 
      var message = $('.multiple-msgs');
      var block_ele = $('.block-element').closest('.card');
      $(block_ele).block({
          message: message,
          overlayCSS: {
              backgroundColor: '#fff',
              opacity: 0.8,
              cursor: 'wait'
          },
          css: {
      // width: 200,
              border: 0,
              padding: 0,
              backgroundColor: 'transparent'
          },
          onBlock: function(){
            clearTimeout();
          }
      });

      window.setTimeout(function () {
        message.html('<div class="semibold"><span class="ft-refresh-cw icon-spin text-left"></span>&nbsp; Loading ...</div>');
      }, 0);

         $.ajax({
             url:'./uploadberkas/do_upload', //URL submit
             type:"post", //method Submit
             data:new FormData(this), //penggunaan FormData
             processData:false,
             contentType:false,
             cache:false,
             async:false,
              success: function(data){
                $("#btncol_8").empty();
                $("#btncol_8").append('<a href="./assets/berkas/'+data+'" class="btn btn-success" id="btnview_8" target="_blank"><i class="ft ft-eye"></i> Lihat</a> <button type="submit" class="btn btn-info" id="btnfile_8"> <i class="ft ft-upload"></i> Upload</button>');
                window.setTimeout(function () {
                  message.addClass('bg-success').html('<div class="semibold"><span class="icon-thumbs-o-up text-left"></span>&nbsp; Upload Berhasil</div>');
                }, 2000);

                window.setTimeout(function () {
                   $(block_ele).unblock(function () {
                    console.log('unblock');
                   });
                }, 4000);
           }
         });
    };
  });

  $('#submit_9').submit(function(e){
    if ($('#file_9').val() != '') {
      e.preventDefault(); 
      var message = $('.multiple-msgs');
      var block_ele = $('.block-element').closest('.card');
      $(block_ele).block({
          message: message,
          overlayCSS: {
              backgroundColor: '#fff',
              opacity: 0.8,
              cursor: 'wait'
          },
          css: {
      // width: 200,
              border: 0,
              padding: 0,
              backgroundColor: 'transparent'
          },
          onBlock: function(){
            clearTimeout();
          }
      });

      window.setTimeout(function () {
        message.html('<div class="semibold"><span class="ft-refresh-cw icon-spin text-left"></span>&nbsp; Loading ...</div>');
      }, 0);

         $.ajax({
             url:'./uploadberkas/do_upload', //URL submit
             type:"post", //method Submit
             data:new FormData(this), //penggunaan FormData
             processData:false,
             contentType:false,
             cache:false,
             async:false,
              success: function(data){
                $("#btncol_9").empty();
                $("#btncol_9").append('<a href="./assets/berkas/'+data+'" class="btn btn-success" id="btnview_9" target="_blank"><i class="ft ft-eye"></i> Lihat</a> <button type="submit" class="btn btn-info" id="btnfile_9"> <i class="ft ft-upload"></i> Upload</button>');
                window.setTimeout(function () {
                  message.addClass('bg-success').html('<div class="semibold"><span class="icon-thumbs-o-up text-left"></span>&nbsp; Upload Berhasil</div>');
                }, 2000);

                window.setTimeout(function () {
                   $(block_ele).unblock(function () {
                    console.log('unblock');
                   });
                }, 4000);
           }
         });
    };
  });

  $('#submit_10').submit(function(e){
    if ($('#file_10').val() != '') {
      e.preventDefault(); 
      var message = $('.multiple-msgs');
      var block_ele = $('.block-element').closest('.card');
      $(block_ele).block({
          message: message,
          overlayCSS: {
              backgroundColor: '#fff',
              opacity: 0.8,
              cursor: 'wait'
          },
          css: {
      // width: 200,
              border: 0,
              padding: 0,
              backgroundColor: 'transparent'
          },
          onBlock: function(){
            clearTimeout();
          }
      });

      window.setTimeout(function () {
        message.html('<div class="semibold"><span class="ft-refresh-cw icon-spin text-left"></span>&nbsp; Loading ...</div>');
      }, 0);

         $.ajax({
             url:'./uploadberkas/do_upload', //URL submit
             type:"post", //method Submit
             data:new FormData(this), //penggunaan FormData
             processData:false,
             contentType:false,
             cache:false,
             async:false,
              success: function(data){
                $("#btncol_10").empty();
                $("#btncol_10").append('<a href="./assets/berkas/'+data+'" class="btn btn-success" id="btnview_10" target="_blank"><i class="ft ft-eye"></i> Lihat</a> <button type="submit" class="btn btn-info" id="btnfile_10"> <i class="ft ft-upload"></i> Upload</button>');
                window.setTimeout(function () {
                  message.addClass('bg-success').html('<div class="semibold"><span class="icon-thumbs-o-up text-left"></span>&nbsp; Upload Berhasil</div>');
                }, 2000);

                window.setTimeout(function () {
                   $(block_ele).unblock(function () {
                    console.log('unblock');
                   });
                }, 4000);
           }
         });
    };
  });
});

