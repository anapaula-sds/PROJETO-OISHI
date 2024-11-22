function exibirMenu(){
    menu.style.display="block"
    iconeHam.style.display="none"
    iconeClose.style.display="inline"
    }
    function ocultarMenu(){
        menu.style.display="none"
        iconeHam.style.display="inline"
        iconeClose.style.display="none"
    }
    function verificaTela(){
        if(window.innerWidth<1024){
            iconeHam.style.display = "inline"
            iconeClose.style.display ="none"
            menu.style.display = "none"
        }else{
            menu.style.display = "block"
            iconeHam.style.display = "none"
            iconeClose.style.display ="none"
        }
    }
    
    window.addEventListener("resize",verificaTela)
    