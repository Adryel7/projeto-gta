const botao = document.querySelector(".btn-plataforma");

const elemenoPlatafomras = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener ("click", () => {
    
    elemenoPlatafomras.classList.toggle("ativo")
    
    /* const botaoAberto = elemenoPlatafomras.classList.contains("ativo");
   
    if(botaoAberto == true ){
        elemenoPlatafomras.classList.remove("ativo");
    }
    else{
        elemenoPlatafomras.classList.add("ativo");
    } */
});