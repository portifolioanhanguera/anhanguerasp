//JS Carrossel
document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelector(".carousel-inner");
  const slides = document.querySelectorAll(".carousel-slide");
  let currentSlide = 0;

  function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 5000); // Troca de imagem a cada 5 segundos

  const nextButton = document.getElementById("nextButton");
  const prevButton = document.getElementById("prevButton");

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);
});

//JS Menu Hamburguer
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

// JS formulário

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".botao-form");

  const addloading = () => {
    button.innerHTML =
      '<img src="./img/loading_svgrepo.com.png" class="loading">';
  };

  const removeloading = () => {
    button.innerHTML = "Inscreva-se";
  };

  const clearFields = () => {
    document.querySelector("input[name=nome]").value = "";
    document.querySelector("input[name=telefone]").value = "";
    document.querySelector("input[name=email]").value = "";
    document.querySelector("select[name=modalidade]").value = "";
    document.querySelector("select[name=tipo]").value = "";
    document.querySelector("input[name=curso]").value = "";
    document.querySelector("select[name=polo]").value = "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addloading();
    const nome = document.querySelector("input[name=nome]").value;
    const telefone = document.querySelector("input[name=telefone]").value;
    const email = document.querySelector("input[name=email]").value;
    const modalidade = document.querySelector("select[name=modalidade]").value;
    const tipo = document.querySelector("select[name=tipo]").value;
    const curso = document.querySelector("input[name=curso]").value;
    const polo = document.querySelector("select[name=polo]").value;

    fetch("https://api.sheetmonkey.io/form/uwnN9fSvLjroHLkpXPQsmk", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        telefone,
        email,
        modalidade,
        tipo,
        curso,
        polo,
      }),
    }).then(() => {
      removeloading();
      clearFields(); // Limpa os campos após o envio do formulário
    });
  };

  document.querySelector("form").addEventListener("submit", handleSubmit);
});

// JS fomulario Amigo Vale Pix
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".botao-form");

  const addloading = () => {
    button.innerHTML =
      '<img src="./img/loading_svgrepo.com.png" class="loading">';
  };

  const removeloading = () => {
    button.innerHTML = "Inscreva-se";
  };

  const clearFields = () => {
    document.querySelector("input[name=nomealuno]").value = "";
    document.querySelector("input[name=ra]").value = "";
    document.querySelector("input[name=telefonealuno]").value = "";
    document.querySelector("input[name=emailaluno]").value = "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addloading();
    const parceria = document.querySelector("input[name=parceria]").value;
    const nomealuno = document.querySelector("input[name=nomealuno]").value;
    const ra = document.querySelector("input[name=ra]").value;
    const telefonealuno = document.querySelector(
      "input[name=telefonealuno]"
    ).value;
    const emailaluno = document.querySelector("input[name=emailaluno]").value;

    fetch("https://api.sheetmonkey.io/form/uwnN9fSvLjroHLkpXPQsmk", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parceria,
        nomealuno,
        ra,
        telefonealuno,
        emailaluno,
      }),
    }).then(() => {
      removeloading();
      clearFields(); // Limpa os campos após o envio do formulário
    });
  };

  document.querySelector("form").addEventListener("submit", handleSubmit);
});

// JS fomulario Professor Vale Pix
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".botao-form");

  const addloading = () => {
    button.innerHTML =
      '<img src="./img/loading_svgrepo.com.png" class="loading">';
  };

  const removeloading = () => {
    button.innerHTML = "Inscreva-se";
  };

  const clearFields = () => {
    document.querySelector("input[name=nomeprof]").value = "";
    document.querySelector("input[name=telefoneprof]").value = "";
    document.querySelector("input[name=emailprof]").value = "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addloading();
    const parceria = document.querySelector("input[name=parceria]").value;
    const nomeprof = document.querySelector("input[name=nomeprof]").value;
    const telefoneprof = document.querySelector(
      "input[name=telefoneprof]"
    ).value;
    const emailprof = document.querySelector("input[name=emailprof]").value;

    fetch("https://api.sheetmonkey.io/form/uwnN9fSvLjroHLkpXPQsmk", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parceria,
        nomeprof,
        telefoneprof,
        emailprof,
      }),
    }).then(() => {
      removeloading();
      clearFields(); // Limpa os campos após o envio do formulário
    });
  };

  document.querySelector("form").addEventListener("submit", handleSubmit);
});

// JS Formulario Domino's
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".botao-form");

  const addloading = () => {
    button.innerHTML =
      '<img src="./img/loading_svgrepo.com.png" class="loading">';
  };

  const removeloading = () => {
    button.innerHTML = "Inscreva-se";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addloading();
    const parceria = document.querySelector("input[name=parceria]").value;

    fetch("https://api.sheetmonkey.io/form/uwnN9fSvLjroHLkpXPQsmk", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parceria,
      }),
    }).then(() => {
      removeloading();
    });
  };

  document.querySelector("form").addEventListener("submit", handleSubmit);
});

// Alerta de página em construção

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".header-links a");

  function mostrarAlerta(event) {
    if (!event.target.classList.contains("excluir-alerta")) {
      event.preventDefault();
      alert("Desculpe o transtorno, essa página ainda está em construção");
    }
  }

  links.forEach((link) => {
    link.addEventListener("click", mostrarAlerta);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll("#nav li");

  function mostrarAlerta(event) {
    const link = event.target;

    if (link.tagName === "A") {
      const href = link.getAttribute("href");

      if (href !== "./graduacao.html" && href !== "./index.html") {
        event.preventDefault();
        alert("Desculpe o transtorno, essa página ainda está em construção");
      }
    }
  }

  menuItems.forEach((item) => {
    const link = item.querySelector("a");
    link.addEventListener("click", mostrarAlerta);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".footer-informacoes li a");

  function mostrarAlerta(event) {
    if (!event.target.classList.contains("excluir-alerta")) {
      event.preventDefault();
      alert("Desculpe o transtorno, essa página ainda está em construção");
    }
  }

  links.forEach((link) => {
    link.addEventListener("click", mostrarAlerta);
  });
});
