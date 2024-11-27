window.onload = function () {
  if (document.getElementById('name1')) {
    document.getElementById('name1').innerHTML = localStorage.getItem(1)
  }
  if (document.getElementById('name') && document.getElementById('vic')) {
    document.getElementById('name').value = localStorage.getItem(1)
    document.getElementById('vic').value = localStorage.getItem(2)
  }
}

function config() {
  ///////////// INICIO PAG  ///////
  window.location.href = 'config.html'
}

function nosotros() {
  window.location.href = 'moreInf.html'
}

function save() {
  const name = document.getElementById('name').value
  const vic = document.getElementById('vic').value
  if (vic) {
    localStorage.setItem(2, vic)
  }
  if (name) {
    localStorage.setItem(1, name)
  }
}

function back() {
  window.location.href = 'index.html'
}

function play() {
  window.location.href = 'juego.html'
}

function local() {
  /////// CAMBIO DE NOMBRE /////
  var nombre = document.getElementById('name')
  var nombre2 = localStorage.getItem(1)
  document.getElementById('name').innerHTML = nombre2
}
