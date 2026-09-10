const animasiya = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".basliq-sekil img", {
  ...animasiya,
  origin: "left",
});

ScrollReveal().reveal(".basliq-metn h1", {
  ...animasiya,
  delay: 500,
});

ScrollReveal().reveal(".basliq-metn .bolme-metn", {
  ...animasiya,
  delay: 1000,
});

ScrollReveal().reveal(".tetbiq-linkleri", {
  ...animasiya,
  delay: 1500,
});

const mesqSekilleri = document.querySelector(".mesq-sekiller");

if (mesqSekilleri) {
  const sekiller = Array.from(mesqSekilleri.children);

  sekiller.forEach((sekil) => {
    const yeniSekil = sekil.cloneNode(true);

    yeniSekil.setAttribute("aria-hidden", "true");

    mesqSekilleri.appendChild(yeniSekil);
  });
}

ScrollReveal().reveal(".mesq-metn .bolme-basliq", {
  ...animasiya,
});

ScrollReveal().reveal(".mesq-metn .bolme-metn", {
  ...animasiya,
  delay: 500,
});

ScrollReveal().reveal(".hekaye-sekil img", {
  ...animasiya,
  origin: "left",
});

ScrollReveal().reveal(".hekaye-metn .bolme-basliq", {
  ...animasiya,
  delay: 500,
});

ScrollReveal().reveal(".hekaye-metn .bolme-metn", {
  ...animasiya,
  delay: 1000,
  interval: 500,
});

ScrollReveal().reveal(".hekaye-link", {
  ...animasiya,
  delay: 2000,
});

ScrollReveal().reveal(".ozellik-siyahisi li", {
  ...animasiya,
  interval: 500,
});

ScrollReveal().reveal(".izleme-sekil img", {
  ...animasiya,
});

ScrollReveal().reveal(".uzvluk-metn .bolme-basliq", {
  ...animasiya,
});

ScrollReveal().reveal(".uzvluk-metn .bolme-metn", {
  ...animasiya,
  delay: 500,
});

ScrollReveal().reveal(".uzvluk-duyme", {
  ...animasiya,
  delay: 1000,
});

const lightMode = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("theme", "light");

  console.log("Theme: Light");
};

const darkMode = () => {
  document.body.classList.add("dark");
  localStorage.setItem("theme", "dark");

  console.log("Theme: Dark");
};

const toggleTheme = () => {
  const isDark = document.body.classList.contains("dark");

  if (isDark) {
    lightMode();
  } else {
    darkMode();
  }
};

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  darkMode();
} else {
  lightMode();
}

window.lightMode = lightMode;
window.darkMode = darkMode;
window.toggleTheme = toggleTheme;
