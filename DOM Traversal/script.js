// const close = document.querySelector('.close');
// const close1 = document.querySelector('.card');
// close.addEventListener('click',function(){
//   close1.style.display = 'none';
// })

const close = document.querySelectorAll('.close');
for( let p = 0; p < close.length; p++){
  close[p].addEventListener('click', function(){
      card[p].style.display = 'none';

  })
}
