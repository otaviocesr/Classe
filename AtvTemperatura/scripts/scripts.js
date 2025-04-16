// Fluxo:
// - Evento de submit no formulário disparado pelo botão
// - Captura do evento pelo search.addEventListener("submit", processar);
// - O evento captura o valor do input e coloca ele no url de requisição
// - É feita a requisição e a resposta é capturada por response.json()

const search = document.getElementById("form_container");
const cityInput = document.getElementById("input_text");
const h1 = document.getElementById("titulo");
const img = document.getElementById("image");
const tempp1 = document.getElementById("tempp1");
const clima = document.getElementById("clima");
const tempmax = document.getElementById("temp_max");
const tempmin = document.getElementById("temp_min");
const umidade = document.getElementById("umidade");
const vento = document.getElementById("vento");
const div_info_city = document.getElementById("div_info_city");
const titulo1 = document.getElementById("titulo");

const processar = async (event) => {
  event.preventDefault();
  const cityName = cityInput.value;
  const key = "628e3843938393fb21ca49b73fa2ca12";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        cityName
      )}&appid=${key}&units=metric&lang=pt_br`
    );
    const data = await response.json();

    h1.textContent = data.name;
    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    tempp1.innerHTML = `${data.main.temp} <sup>C°<sup>`;
    clima.textContent = data.weather[0].description;
    tempmax.innerHTML = `${data.main.temp_max} <sup>C°<sup>`;
    tempmin.innerHTML = `${data.main.temp_min} <sup>C°<sup>`;
    umidade.textContent = `${data.main.humidity}%`;
    vento.textContent = `${data.wind.speed} M/s`;

    div_info_city.classList.add("visible");
    titulo1.classList.add("visible");
  } catch (error) {
    console.log("Erro ao buscar dados", error);
  }
};

search.addEventListener("submit", processar);
