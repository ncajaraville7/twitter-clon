const btnTwittear = document.getElementById('twittear');
const formulario = document.getElementById('formulario');
const tweet = document.getElementById('tweet');
const tweetsLista = document.querySelector('.lista-tweets');

let listaTweets = [];

document.addEventListener('DOMContentLoaded', ()=> {
    iniciarApp();

    listaTweets = JSON.parse(localStorage.getItem('tweet')) || [];

    crearTweet();
});
formulario.addEventListener('input', validarTweet);
btnTwittear.addEventListener('click', agregarTweet);

function iniciarApp() {
    btnTwittear.disabled = true;
    btnTwittear.classList.add('btnTweetDisabled');
}

function validarTweet() {
    if(tweet.value) {
        btnTwittear.disabled = false;
        btnTwittear.classList.remove('btnTweetDisabled');
    } else {
        btnTwittear.disabled = true;
        btnTwittear.classList.add('btnTweetDisabled');
    }
}

function agregarTweet(e) {
    e.preventDefault();
    
    const tweetObj = {
        id: Date.now(),
        tweet: tweet.value.trim()
    }

    if(tweet.value) {
        listaTweets = [...listaTweets, tweetObj];
        crearTweet();
    }
    formulario.reset();
}

function crearTweet() {

    limpiarHTML();
    
    const inicioRta = 1;
    const finalRta = 700;

    let numeroRandomRta = inicioRta + Math.floor(Math.random() * finalRta);

    const inicioRt = 1;
    const finalRt = 900;

    let numeroRandomRt = inicioRt + Math.floor(Math.random() * finalRt);

    const inicioFv = 1;
    const finalFv = 2000;

    let numeroRandomFv = inicioFv + Math.floor(Math.random() * finalFv);


    listaTweets.forEach( tweet => {
        const tweetDiv = document.createElement('div');
        tweetDiv.classList.add('tweets')

        tweetDiv.innerHTML = `
                <div class="tweets__contenido">
                    <div class="tweets__contenido__imagen">
                        <img src="src/imagenes/imagenPerfil.png" alt="Imagen de Perfil">
                    </div>
                    <div class="tweets__contenido__data">
                        <div class="tweets__contenido__data__usuario">
                            <p>Nico C</p>
                            <p>@NicolasCajaraville</p>
                        </div>
                        <p> ${tweet.tweet} </p>
                    </div>
                </div>
                <div class="tweets__botones">
                    <div class="tweets__botones__boton">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1569682881658" viewBox="0 0 1024 1024" version="1.1" focusable="false" class="tweetIcon-respuesta" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M573 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40zM293 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z"></path><path d="M894 345c-48.1-66-115.3-110.1-189-130v0.1c-17.1-19-36.4-36.5-58-52.1-163.7-119-393.5-82.7-513 81-96.3 133-92.2 311.9 6 439l0.8 132.6c0 3.2 0.5 6.4 1.5 9.4 5.3 16.9 23.3 26.2 40.1 20.9L309 806c33.5 11.9 68.1 18.7 102.5 20.6l-0.5 0.4c89.1 64.9 205.9 84.4 313 49l127.1 41.4c3.2 1 6.5 1.6 9.9 1.6 17.7 0 32-14.3 32-32V753c88.1-119.6 90.4-284.9 1-408zM323 735l-12-5-99 31-1-104-8-9c-84.6-103.2-90.2-251.9-11-361 96.4-132.2 281.2-161.4 413-66 132.2 96.1 161.5 280.6 66 412-80.1 109.9-223.5 150.5-348 102z m505-17l-8 10 1 104-98-33-12 5c-56 20.8-115.7 22.5-171 7l-0.2-0.1C613.7 788.2 680.7 742.2 729 676c76.4-105.3 88.8-237.6 44.4-350.4l0.6 0.4c23 16.5 44.1 37.1 62 62 72.6 99.6 68.5 235.2-8 330z"></path><path d="M433 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z"></path></svg>
                        <p>${numeroRandomRta}</p>
                    </div>
                    <div class="tweets__botones__boton">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" focusable="false" class="tweetIcon-retweet" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2a8.3 8.3 0 0 0 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8a8.22 8.22 0 0 0-5.2-1.8c-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2a8.3 8.3 0 0 0-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z"></path></svg>
                        <p>${numeroRandomRt}</p>
                    </div>
                    <div class="tweets__botones__boton">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" focusable="false" class="tweetIcon-favorito" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path></svg>
                        <p>${numeroRandomFv}</p>
                    </div>
                    <div class="tweets__botones__boton">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" focusable="false" class="tweetIcon-compartir" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg>
                    </div>
                </div> 
        `;

        const btnBorrar = document.createElement('a')
        btnBorrar.textContent = '';
        btnBorrar.classList.add('btnBorrar');
        btnBorrar.onclick = () => {
            borrarTweet(tweet.id)
        }

        tweetDiv.appendChild(btnBorrar);
        tweetsLista.appendChild(tweetDiv);
    });
    guardarTweet();
}

function borrarTweet(id) {
    listaTweets = listaTweets.filter( tweet => tweet.id !== id);
    crearTweet();
}

function guardarTweet() {
    localStorage.setItem('tweet', JSON.stringify(listaTweets));
}

function limpiarHTML() {
    while(tweetsLista.firstChild) {
        tweetsLista.removeChild(tweetsLista.firstChild);
    }
}



