

const el = document.querySelector("#btn-trailer")
const videoPlace = document.querySelector("main")
const content = document.querySelector(".content")
const backButton = document.querySelector("#button-voltar")
let count = 0

const video = `
    <iframe width="900px" height="600px" src="https://www.youtube.com/embed/X23XCFgdh2M" title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
        <div class="button"> <a href="index.html"><span>Voltar</span> </div>
        `
const cardsContent = {
    wanda: `Feiticeira Escarlate é uma super-heroína que aparece nos quadrinhos americanos publicados pela Marvel Comics. A personagem foi criada pelo roteirista Stan Lee e pelo desenhista Jack Kirby. Sua primeira aparição foi em "X-Men" # 4 na Era de prata das histórias em quadrinhos americanas`,
    america:`America Chavez é uma personagem fictícia, super-heroína, da editora de quadrinhos norte-americana Marvel Comics. Ela foi criada pelo escritor Joe Casey e pelo desenhista Nick Dragotta, tendo aparecido pela primeira vez em 2011 na revista Vengeance #1. Wikipédia
    `,
    strange: `Doctor Strange in the Multiverse of Madness é um futuro filme americano de super-herói baseado no personagem homônimo da Marvel Comics. Produzido pelo Marvel Studios e distribuído pela Walt Disney Studios Motion Pictures, será a sequência de Doctor Strange e o vigésimo oitavo filme do Universo Cinematográfico Marvel.`,
    wong: `Wong é um personagem fictício que aparece nos quadrinhos americanos publicados pela Marvel Comics. Ele é o ajudante e valet do Doutor Estranho, o Feiticeiro Supremo da Terra. Wong apareceu pela primeira vez nos quadrinhos Strange Tales # 110, mas não foi nomeado até Strange Tales # 119. Na minissérie de 2006`,
}



function abrirTrailer(){
    //animation
    videoPlace.innerHTML = video  
}


document.querySelectorAll(".btn-content").forEach((button, index) => {
    button.onclick = (event) => {
    textPlace = document.querySelector(`#${button.id}-image`)
    if(count % 2 == 0){
        textPlace.innerHTML = `<div class="text">${cardsContent[button.id]}</div>` 
        button.innerHTML = "FECHAR"
        count++
      }else{
        textPlace.innerHTML = `` 
        button.innerHTML = "SAIBA MAIS"
        count++
              
      }

    }
  })




el.addEventListener("click", abrirTrailer ,true)

