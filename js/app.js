

$(document).ready(function() {
    emailjs.init("user_zbhb7nXYLm2s7HiAUFdOX");
    $('input[name=submit]').click(function(){
        let templateParams = {
            name: $('input[name=name]').val(),
            email: $('input[name=email]').val(),
            message: $('textarea[name=message]').val()
        };
        emailjs.send('service_ghscycf', 'template_j33huix', templateParams).then(function(response){
            alert('Succes! You send a message to INAE.');
        }, function(error){
            alert('Failed. Try again Please.');
        });
    });
});


// setInterval(function(){
//     $(".title").toggle();
//   }, 250);


$(function(){
    $(window).scroll(function(){ 
      let num = $(this).scrollTop();
      if( num > 100 ){  
        $("#body-line").css("position","fixed");
        $("#body-line").css("top","0rem");

      }else{
        $("#body-line").css("position","absolute");
        $("#body-line").css("top","3rem");

      }
    });
});