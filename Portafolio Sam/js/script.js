// MENU HAMBURGUESA

let menu = document.querySelector(".icono_hamburguesa");
let navbar = document.querySelector(".divnav");

let linia1 = document.querySelector(".linia1_hamburguesa");
let linia2 = document.querySelector(".linia2_hamburguesa");
let linia3 = document.querySelector(".linia3_hamburguesa");

/*Raton personalizado*/
$(document).ready(function(){

    $('body').on({'mousemove':function(e){
        // console.clear()
       let clientY = e.originalEvent.clientY
       let clientX = e.originalEvent.clientX
        
        $('#cursor').css({
            'left': (clientX - 25) +'px',
            'top': (clientY - 25) +'px'
        })
    }})

    $('a').on({
        'mouseover': function(){
            $('#cursor').addClass('mini')
        },
        'mouseout': function(){
            $('#cursor').removeClass('mini')
        },
    })
    $('.petit').on({
        'mouseover': function(){
            $('#cursor').addClass('mini')
        },
        'mouseout': function(){
            $('#cursor').removeClass('mini')
        },
    })

})
// LISTA DE NAVBAR

menu.onclick=() => {
    navbar.classList.toggle("open-menu");
    linia1.classList.toggle("activelinia1_hamburguesa");
    linia2.classList.toggle("activelinia2_hamburguesa");
    linia3.classList.toggle("activelinia3_hamburguesa");
}

window.onscroll = () => {
    navbar.classList.remove("open-menu");
    linia1.classList.remove("activelinia1_hamburguesa");
    linia2.classList.remove("activelinia2_hamburguesa");
    linia3.classList.remove("activelinia3_hamburguesa");
}

















