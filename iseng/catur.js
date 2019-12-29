function computer (player){

    var comp = Math.random();

    if(comp <= 0.34){
      comp = "gajah"
      const gGajah = document.createElement('img')
      const anakDiv = document.getElementById('HASIL')
      const A = anakDiv.appendChild(gGajah);

      A.setAttribute ('src', 'vekto/gajah.png')
      A.classList.toggle ('cGajah')

    }else if (comp > 0.34 && comp <= 0.67) {
      comp = "semut"
      const gSemut = document.createElement('img')
      const anakDiv = document.getElementById('HASIL')
      const A = anakDiv.appendChild(gSemut);

      A.setAttribute ('src', 'vekto/semut.png')
      A.classList.toggle ('cSemut')

    }else{
      comp = "orang"
      const gOrang = document.createElement('img')
      const anakDiv = document.getElementById('HASIL')
      const A = anakDiv.appendChild(gOrang);

      A.setAttribute ('src', 'vekto/orang.png')
      A.classList.toggle ('cGajah')
    }
    

    function seri (){
      const seri = document.getElementById('HASIL')
      seri.style.backgroundColor = "lightgreen"
      document.getElementById('hasil').innerHTML = "SERI"
    }

    function menang (){
      const menang = document.getElementById('HASIL')
      menang.style.backgroundColor = "lightblue"

      document.getElementById('hasil').innerHTML = "MENANG!"
    }
    function kalah (){
      const kalah = document.getElementById('HASIL')
      kalah.style.backgroundColor = "red"
      document.getElementById('hasil').innerHTML = "KALAH!"
    }

    if(player == comp){
      seri();
    }else if (player == "gajah") {
      hasil = (comp == "orang") ? menang() : kalah();
    }else if (player == "orang") {
      hasil = (comp == "semut") ? menang() : kalah();
    }else if (player == "semut"){
      hasil = (comp == "gajah") ? menang() : kalah()
    } else {
      hasil = "gaada " + player + " BEGO"
    }
    ;
}

const gajah = document.getElementsByTagName('button')[0];
gajah.addEventListener('click', function () {
  const gGajah = document.createElement('img')
  const anakDiv = document.getElementById('HASIL')
  const A = anakDiv.appendChild(gGajah);

  A.setAttribute ('src', 'vekto/gajah.png')
  A.classList.toggle ('gGajah')

  computer("gajah")



});

const orang = document.getElementsByTagName('button')[1];
orang.addEventListener('click', function () {
  const gOrang = document.createElement('img');
  const anakDiv = document.getElementById('HASIL');
  const A = anakDiv.appendChild(gOrang);

  A.setAttribute ('src', 'vekto/orang.png')
  A.classList.toggle ('gGajah')

  computer("orang")

});

const semut = document.getElementsByTagName('button')[2];
semut.addEventListener('click', function () {
  const gSemut = document.createElement('img');
  const anakDiv = document.getElementById('HASIL');
  const A = anakDiv.appendChild(gSemut);

  A.setAttribute ('src', 'vekto/semut.png')
  A.classList.toggle ('gSemut')

  computer("semut")

});

const reseto = document.getElementsByTagName('button')[3];
reseto.addEventListener('click',function () {
  window.location.reload(true)
})
