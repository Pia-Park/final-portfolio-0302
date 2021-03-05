// var adminManager = new ActiveXObject('Microsoft.ApplicationHost.WritableAdminManager');
// adminManager.CommitPath = "MACHINE/WEBROOT/APPHOST/Default Web Site";

// var httpProtocolSection = adminManager.GetAdminSection("system.webServer/httpProtocol", "MACHINE/WEBROOT/APPHOST/Default Web Site");
// httpProtocolSection.Properties.Item("allowKeepAlive").Value = true;

// adminManager.CommitChanges();
new KudosPlease({ 
    el : '.kudos',
    duration : 1500,
    persistent : true,
    status : {
      alpha: '',
      beta: '',
      gamma: 'fontelico-emo-beer'
    }
});

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



function likeCount(e){

    if(e.target.classList.contains('like-btn')){
        
        alert('You Like it!');
        count++;
        if(count === 1){
            $likeForm.html('1 like');
            $likeForm.show();
        } else{
            $likeForm.html(count + ' likes');
            $likeForm.show();


        }
        
    }
};

// function likeCount(e){

//     if(e.target.classList.contains('like-btn')){

//         const works = document.querySelector('.work');
//         const target = e.target.parentElement.parentElement;
//         const a = target.classList.contains('work-img');

//         for(let i = 0; i < works.length; i++){
//             if( a = works[i].querySelector('.work-img')){
//                 alert('You Like it!');
//                 count++;
//                 const like = document.createElement('form');
//                 like.classList.add('like-text');
//                 like.innerHTML = `<p>${count} Likes`;
//                 works.appendChild(like);
                
//             }
//         }
        
        
//     }
// };

// function likeCount(e){
//     if(e.target.classList.contains('like-btn')){
        
//         alert('You Like it!');
//         count++;
//         let likeP = e.target.parentElement;
//         let workLike = document.querySelector('work-like');
//         if(count === 1){
//             let likeF = document.createElement('form');
//             likeF.classList.add('like-text');
//             likeF.innerText = '0 Like';

//         } else{
//             likeF.html(count + ' likes');
//             likeF.show();


//         }
        
//     }
// };


// function likeCount(e){
//     if(e.target.classList.contains('like-btn')){        
//         alert('You Like it!');
//         count++;
//         let likeP = e.target.parentElement;
//         likeAdd(likeP, count);
        
//     }
// };

// function likeAdd(likeP, count){
//     const works = document.querySelector('.work-like');
//     if(likeP = works){
//         if(count === 1){
//             alert('you are ' + count);
//         } else {
//             alert('you are ' + count);
//         }

//     }
// }


// $(".like-btn").click(function(){
//     count++
//     alert("you like it! you are "+ count);
// })


// $likeBtn.on('click', likeCount);