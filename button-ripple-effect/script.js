const btnElment=document.querySelector(".btn")
btnElment.addEventListener("mouseover",(event)=>{
    const x=(event.pageX-btnElment.offsetLeft)
    const y=(event.pageY-btnElment.offsetTop)
    btnElment.style.setProperty("--xPos",x+"px")
    btnElment.style.setProperty("--yPos",y+"px")
})