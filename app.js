let search = document.getElementById("inp-word");
let searchBtn = document.getElementById("search-btn");
let reasult = document.getElementById("result");

searchBtn.addEventListener("click", async () => {
  let inpWord = document.getElementById("inp-word").value;
  let response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/ ${inpWord} `
  );
  console.log(response);
  let data = await response.json();
  console.log(data);

  try {
    reasult.innerHTML = `
    <div class="word">
    <h3>${inpWord}</h3>
    <button><i class="fas fa-volume-up"></i></button>
  </div>
  <div class="details">
  <p>${data[0].meanings[0].partOfSpeech}</p>
  <p>${data[0].phonetic}</p>
  </div>
  <div class="word-meaning">
  <p>${data[0].meanings[0].definitions[0].definition}</p>
  <p>${data[0].meanings[0].definitions[1].definition}</p>
  </div>
  <div class="word-example">
  <p>${data[0].meanings[0].definitions[0].example || ""}</p>
  <p>${data[0].meanings[0].definitions[1].example || ""}</p>
  </div>
    `;
  } catch {
    reasult.innerHTML = `<h2>Couldn't Find The Word</h2>`;
  }
});
