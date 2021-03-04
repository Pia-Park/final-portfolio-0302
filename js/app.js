

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


let count = 0;
let $likeBtn = $('.like-btn');
let $likeForm = $('.like-text');

$likeForm.hide();



// function likeCount(e){
//     if(e.target.classList.contains('like-btn')){
        
//         alert('You Like it!');
//         count++;
//         if(count === 1){
//             $likeForm.html('1 like');
//             $likeForm.show();
//         } else{
//             $likeForm.html(count + ' likes');
//             $likeForm.show();


//         }
        
//     }
// };

function likeCount(e){
    if(e.target.classList.contains('like-btn')){
        
        alert('You Like it!');
        count++;
        let likeP = e.target.parentElement;
        let likeF = likeP.classList.contains('like-text');
        if(count === 1){
            likeF.innerHTML = `${count} + like`;
            likeP.appendChild(likeF);
            likeF.show();

        } else{
            $likeF.html(count + ' likes');
            $likeF.show();


        }
        
    }
};






$likeBtn.on('click', likeCount);