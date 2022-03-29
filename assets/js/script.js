

const el = document.querySelector(".button")
const videoPlace = document.querySelector("main")
const content = document.querySelector(".content")
const backButton = document.querySelector("#button-voltar")
const video = `
        <iframe width="900px" height="600px" src="https://www.youtube.com/embed/X23XCFgdh2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="button"> <a href="index.html"><span>Voltar</span> </div>
        `

const animacao = () =>{
    
    document.querySelector('.content').classList.add("fade-out")
    document.querySelector('body').style.backgroundColor = "#000E"
    
}
function resolver2segundos(){
    return new Promise(animacao =>{
        setTimeout(()=>{
            animacao()
        }, 1000)
    });
}

async function abrirTrailer(){
    //animation
    await resolver2segundos();

    videoPlace.innerHTML = video
    
}

console.log(el)
el.addEventListener("click", abrirTrailer ,true)


