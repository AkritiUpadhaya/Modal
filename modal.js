let openBtn = document.getElementById('btn')
let modalcontainer= document.querySelector('.modal-container')
let closeBtn= document.querySelector('.close-btn')
let body= document.querySelector('body')
openBtn.addEventListener('click',function(){
    modalcontainer.style.display= 'block'
})
closeBtn.addEventListener('click',function(){
    modalcontainer.style.display='none'
})
window.addEventListener('click',function(e){
    console.log(e.target)
    if(e.target=== body){
        modalcontainer.style.display='none'
    }
})