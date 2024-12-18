const form = document.querySelector (".formulario")
const mascara = document.querySelector (".mascara-formulario")


function cliqueinobotao () {
      form.style.left = "40%"
      form.style.tranform = "translateX (-40%)"
      mascara.style.visibility = "visible"

}

function cliquei () {
       form.style.left = "-300px"   
       mascara.style.visibility = "hidden"

}