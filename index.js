
async function MostrarNuevaFrase() {
    const url = 'https://api.breakingbadquotes.xyz/v1/quotes';
    const resp = await fetch(url).then(elem => elem.json());
    const quote = resp[0].quote;
    const author = resp[0].author;

    const HTMLresponse1 = document.querySelector('#text');
    const HTMLresponse2 = document.querySelector('#author');
    const frase = `<p>${quote}</p>`;
    const autor = `<p>${author}</p>`;
    HTMLresponse1.innerHTML = frase;
    HTMLresponse2.innerHTML = author;

}

MostrarNuevaFrase();

const btn = document.querySelector("#new-quote");
btn.addEventListener('click', function () {
    MostrarNuevaFrase();
})


