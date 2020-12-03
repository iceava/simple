$(document).ready(function(){
	$('.header-nav__btn').click(function(){
		$(this).toggleClass('header-nav__btn--active');
		$('.nav-menu').toggleClass('active');
	});
});





(function(){

let checkBox = document.querySelectorAll('.check__input');
let poppup = document.querySelector('.order-info__form-poppup');
let subscribe = document.querySelector('.order-info__form-subscribe');
let btn  = document.querySelector('.order-info__form-price-btn');
let data = btn.innerHTML;
btn.innerHTML = 'Subscribe';


function pop(){
       
        if (checkBox[1].checked) {
          
        poppup.style = 'display: block';
        subscribe.style = 'color: #36c1ba';
        btn.innerHTML = 'Subscribe';
                   
        } else {
        poppup.style = 'display: none';
        subscribe.style = 'color: black';
        btn.innerHTML = data;

        }         
       
}
        checkBox[1].addEventListener('click', pop);

})();






(function(){

let iframe = document.querySelectorAll('.test-container__item-movie');

let pic = document.querySelectorAll('.test-container__item-img');
iframe[0].hasAttribute('src')
if (iframe[0].hasAttribute('src')){
        pic[0].style = 'z-index: -1;'
}


iframe[1].hasAttribute('src' ) ? pic[1].style = 'z-index: -1;' : pic[1].style = 'z-index: 1;'
iframe[2].hasAttribute('src' ) ? pic[2].style = 'z-index: -1;' : pic[2].style = 'z-index: 1;'
iframe[3].hasAttribute('src' ) ? pic[3].style = 'z-index: -1;' : pic[3].style = 'z-index: 1;'


})();









(function(){



let container = document.querySelector('.tabs-container');

let controls = container.querySelector('.tabs-container__list');
let listTitle = container.querySelector('.tabs-container__list-title');
let itms = container.querySelectorAll('.tabs-container__item');
let currentitms = 0;
let itmscount = itms.length;
let pointer = null;
let list = container.querySelector('.list__title')


   
function indicate(event){
        let target = event.target;
        console.log(target)
      
        if(target.classList.contains('list__title')){
                itms[0].classList.add('activ')
                
               
         } else {
                 
                itms[0].classList.remove('activ')
                  
         }

        if(target.classList.contains('list__title1')){
                itms[1].classList.add('activ')
                
                
         }else{ 
                 itms[1].classList.remove('activ')
        }

         if(target.classList.contains('list__title2')){
                 itms[2].classList.add('activ')
         } else {
                 itms[2].classList.remove('activ')
         }
     }
    

     
     controls.addEventListener('click', indicate)

     list.setAttribute( 'style','color: #36c1ba; border-bottom: solid 5px #36c1ba;');
   
     function col(evt){
             list.removeAttribute('style')
             let target = evt.target;
             
             console.log(target)
             if(target.classList.contains('ttl-color')){
                target.setAttribute('style', 'color: #36c1ba; border-bottom: 5px solid #36c1ba;');

                    if(pointer !== null){
                            pointer.removeAttribute('style')
                            
                     
                    } pointer = target;

             }
     };




     controls.addEventListener('click', col);


})()