function on () {
  document.getElementById('overlay').style.display = 'block'
  document.getElementById('menu-icon').src = 'images/x.png'
  document.getElementById('menu-icon').removeEventListener('click', on)
  document.getElementById('menu-icon').addEventListener('click', off)
}

function off () {
  document.getElementById('overlay').style.display = 'none'
  document.getElementById('menu-icon').src = 'images/menu.png'
  document.getElementById('menu-icon').removeEventListener('click', off)
  document.getElementById('menu-icon').addEventListener('click', on)
}

function expando () {
  var card = document.getElementsByClassName('btn')
  var i
  for (i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function () {
      var content = this.nextElementSibling
      if (content.style.Height && content.style.Width) {
        content.style.Height = null
        content.style.Width = null
      } else {
        content.style.Height = content.scrollHeight + 'px'
        content.style.Width = '40%'
      }
    })
  }
}
