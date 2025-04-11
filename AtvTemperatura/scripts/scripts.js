// Fluxo:
// - Evento de submit no formulário disparado pelo botão
// - Captura do evento pelo search.addEventListener("submit", processar);
// - O evento captura o valor do input e coloca ele no url de requisição
// - É feita a requisição e a resposta é capturada por response.json()

// img
// Textos Temperatura e Tempo
// Temp mínima e máxima, umidade ventos

const search = document.getElementById("form_container");
const cityInput = document.getElementById("input_text");
const h1 = document.getElementById("titulo");
const img = document.getElementById("image");
const tempp1 = document.getElementById("tempp1");
const tempp2 = document.getElementById("tempp2");
const tempmax = document.getElementById("temp_max");
const tempmin = document.getElementById("temp_min");
const umidade = document.getElementById("umidade");
const vento = document.getElementById("vento");

const processar = async (event) => {
  event.preventDefault();
  const cityName = cityInput.value;
  const key = "628e3843938393fb21ca49b73fa2ca12";

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      cityName
    )}&appid=${key}&units=metric&lang=pt_br`
  );
  const data = await response.json();

  console.log(data);
};

search.addEventListener("submit", processar);
