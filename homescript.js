const up = document.getElementById("top")

up.addEventListener("click", function(){
    window.scrollTo(0,0)
})

document.addEventListener('scroll',ocultar)

function ocultar(){
    if(window.scrollY > 1080){
        up.style.display = "flex"
    }   else {
        up.style.display = "none"
    }
}

ocultar()