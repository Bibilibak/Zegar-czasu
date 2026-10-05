/* ===== Tłumaczenia (PL / EN / ES) =====
   Żeby dodać język: skopiuj blok, przetłumacz teksty,
   dodaj przycisk <button data-lang="xx"> w index.html. */
var I18N = {
  pl: {
    title: "Zegar słoneczny",
    dial: "Tarcza",
    sinceRise: "od wschodu",
    altitude: "Wysokość słońca",
    noon: "● Górowanie",
    sunset: "○ Zachód",
    eventPh: "Np. Lekcja",
    add: "Dodaj",
    latPh: "Szer.",
    lonPh: "Dł.",
    set: "Ustaw",
    useLoc: "Użyj mojej lokalizacji",
    event: "Wydarzenie",
    noSun: "Brak zwykłego wschodu/zachodu",
    noGeo: "Brak lokalizacji; wpisz współrzędne",
    geoDenied: "Lokalizacja zablokowana; wpisz współrzędne",
    cityPh: "Szukaj miasta…",
    noResults: "Nie znaleziono takiego miasta",
    searchErr: "Wyszukiwanie nie działa; spróbuj ponownie lub wpisz współrzędne",
    manual: "Współrzędne ręcznie",
    or: "lub"
  },
  en: {
    title: "Solar clock",
    dial: "Dial",
    sinceRise: "since sunrise",
    altitude: "Sun altitude",
    noon: "● Solar noon",
    sunset: "○ Sunset",
    eventPh: "E.g. Class",
    add: "Add",
    latPh: "Lat.",
    lonPh: "Lon.",
    set: "Set",
    useLoc: "Use my location",
    event: "Event",
    noSun: "No regular sunrise/sunset here",
    noGeo: "Location unavailable; enter coordinates",
    geoDenied: "Location blocked; enter coordinates",
    cityPh: "Search city…",
    noResults: "City not found",
    searchErr: "Search failed; try again or enter coordinates",
    manual: "Enter coordinates",
    or: "or"
  },
  es: {
    title: "Reloj solar",
    dial: "Esfera",
    sinceRise: "desde el amanecer",
    altitude: "Altura del sol",
    noon: "● Mediodía solar",
    sunset: "○ Puesta de sol",
    eventPh: "Ej. Clase",
    add: "Añadir",
    latPh: "Lat.",
    lonPh: "Lon.",
    set: "Fijar",
    useLoc: "Usar mi ubicación",
    event: "Evento",
    noSun: "Sin amanecer/atardecer habitual",
    noGeo: "Ubicación no disponible; introduce las coordenadas",
    geoDenied: "Ubicación bloqueada; introduce las coordenadas",
    cityPh: "Buscar ciudad…",
    noResults: "Ciudad no encontrada",
    searchErr: "Error de búsqueda; inténtalo de nuevo o introduce las coordenadas",
    manual: "Coordenadas manuales",
    or: "o"
  }
};

var lang = "pl";

// t("klucz") zwraca tekst w aktualnym języku (awaryjnie po polsku)
function t(key) {
  return (I18N[lang] && I18N[lang][key]) || I18N.pl[key] || key
}

// Język: zapisany wybór -> język przeglądarki -> angielski
function detectLang() {
  try {
    var s = localStorage.getItem("lang");
    if (s && I18N[s]) return s
  } catch (e) {}
  var n = (navigator.language || "en").slice(0, 2).toLowerCase();
  return I18N[n] ? n : "en"
}

// Ustawia język i podmienia wszystkie teksty oznaczone data-i18n*
function setLang(l) {
  if (!I18N[l]) l = "en";
  lang = l;
  try { localStorage.setItem("lang", l) } catch (e) {}
  document.documentElement.lang = l;
  document.title = t("title");
  document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")) });
  document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { el.placeholder = t(el.getAttribute("data-i18n-ph")) });
  document.querySelectorAll("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))) });
  document.querySelectorAll(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-lang") === l) });
}
