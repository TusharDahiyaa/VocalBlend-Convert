// An array containing information about various languages and their dialects
var languageArray = [
  ["Afrikaans", ["af-ZA"]],
  ["Bahasa Indonesia", ["id-ID"]],
  ["Bahasa Melayu", ["ms-MY"]],
  ["Català", ["ca-ES"]],
  ["Čeština", ["cs-CZ"]],
  ["Deutsch", ["de-DE"]],
  [
    "English",
    ["en-AU", "Australia"],
    ["en-CA", "Canada"],
    ["en-IN", "India"],
    ["en-NZ", "New Zealand"],
    ["en-ZA", "South Africa"],
    ["en-GB", "United Kingdom"],
    ["en-US", "United States"],
  ],
  [
    "Español",
    ["es-AR", "Argentina"],
    ["es-BO", "Bolivia"],
    ["es-CL", "Chile"],
    ["es-CO", "Colombia"],
    ["es-CR", "Costa Rica"],
    ["es-EC", "Ecuador"],
    ["es-SV", "El Salvador"],
    ["es-ES", "España"],
    ["es-US", "Estados Unidos"],
    ["es-GT", "Guatemala"],
    ["es-HN", "Honduras"],
    ["es-MX", "México"],
    ["es-NI", "Nicaragua"],
    ["es-PA", "Panamá"],
    ["es-PY", "Paraguay"],
    ["es-PE", "Perú"],
    ["es-PR", "Puerto Rico"],
    ["es-DO", "República Dominicana"],
    ["es-UY", "Uruguay"],
    ["es-VE", "Venezuela"],
  ],
  ["Euskara", ["eu-ES"]],
  ["Français", ["fr-FR"]],
  ["Galego", ["gl-ES"]],
  ["Hrvatski", ["hr_HR"]],
  ["IsiZulu", ["zu-ZA"]],
  ["Íslenska", ["is-IS"]],
  ["Italiano", ["it-IT", "Italia"], ["it-CH", "Svizzera"]],
  ["Magyar", ["hu-HU"]],
  ["Nederlands", ["nl-NL"]],
  ["Norsk bokmål", ["nb-NO"]],
  ["Polski", ["pl-PL"]],
  ["Português", ["pt-BR", "Brasil"], ["pt-PT", "Portugal"]],
  ["Română", ["ro-RO"]],
  ["Slovenčina", ["sk-SK"]],
  ["Suomi", ["fi-FI"]],
  ["Svenska", ["sv-SE"]],
  ["Türkçe", ["tr-TR"]],
  ["български", ["bg-BG"]],
  ["Pусский", ["ru-RU"]],
  ["Српски", ["sr-RS"]],
  ["한국어", ["ko-KR"]],
  [
    "中文",
    ["cmn-Hans-CN", "普通话 (中国大陆)"],
    ["cmn-Hans-HK", "普通话 (香港)"],
    ["cmn-Hant-TW", "中文 (台灣)"],
    ["yue-Hant-HK", "粵語 (香港)"],
  ],
  ["日本語", ["ja-JP"]],
  ["Lingua latīna", ["la"]],
];

// Variables to reference the language and dialect selection dropdowns.
let languageSelect = document.querySelector("#selectLanguage");
let dialectSelect = document.querySelector("#selectDialect");

// Loop to populate the language selection dropdown (languageSelect) with options based on the languageArray array.
for (var i = 0; i < languageArray.length; i++) {
  languageSelect.options[i] = new Option(languageArray[i][0], i);
}

// Set default selections and update dialect dropdown
languageSelect.selectedIndex = 6;
updateCountry();
dialectSelect.selectedIndex = 2;

// function to update country list based on language selection
function updateCountry() {
  // loop through all the options and remove them from the select dropdown
  for (var i = dialectSelect.options.length - 1; i >= 0; i--) {
    dialectSelect.remove(i);
  }

  // get the selected language's list from the languageArray object
  var list = languageArray[languageSelect.selectedIndex];

  // loop through the list and add each item as an option to the select dropdown
  for (var i = 1; i < list.length; i++) {
    dialectSelect.options.add(new Option(list[i][1], list[i][0]));
  }

  // if the list only contains 1 item, hide the select dropdown; otherwise, show it
  dialectSelect.style.visibility = list[1].length == 1 ? "hidden" : "visible";
}
