let header = document.getElementById('header');
let navigationHeader = document.getElementById('navigation-header');
let content = document.getElementById('content');
let showSidebar = false;

//script para abrir e fechar menu lateral
function toggleSidebar() {

    showSidebar = !showSidebar;

    if(showSidebar){
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)'; 

    }else{
        navigationHeader.style.marginLeft = '-100vw' ;
        navigationHeader.style.animationName = '';
        content.style.filter = '';
    } 
    
}

//script para fechar menu lateral ao clicar no body
function closeSidebar(){
    if (showSidebar) {
        toggleSidebar()
    } 
}


//script para fechar menu lateral ao redimensionar a página
window.addEventListener('resize',function(event){
    if(window.innerWidth > 768 && showSidebar){
        toggleSidebar();
    }
})