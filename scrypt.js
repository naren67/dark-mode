var body = document.getElementsByTagName('body')[0]
var label = document.getElementById('dark-mode')
var header = document.getElementsByTagName('header')[0]

label.addEventListener('click', function(){
          label.classList.toggle('active')
          body.classList.toggle('night')   
          header.classList.toggle('headerStyle')      
})