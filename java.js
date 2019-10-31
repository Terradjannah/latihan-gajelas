
const warna = document.querySelectorAll('input[type=range]')

warna.forEach(function(slider){
  slider.addEventListener('input', function() {
    const r = document.querySelector('input[name=slider1]').value;
    const g = document.querySelector('input[name=slider2]').value;
    const b = document.querySelector('input[name=slider3]').value;
    document.body.style.backgroundColor = "rgb("+ r +","+ g +", "+ b +")";
  })
})

document.body.addEventListener('mousemove',function(event){
  const xpos = Math.round((event.clientX / window.innerWidth) * 255)
  const ypos = Math.round((event.clientY / window.innerHeight) * 255)

  document.body.style.backgroundColor = "rgb("+ xpos +","+ ypos +", 100)";

})
