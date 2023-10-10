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

//JS Carrossel 2
document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelector(".carousel-inner2");
  const slides = document.querySelectorAll(".carousel-slide2");
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

  const nextButton = document.getElementById("nextButton2");
  const prevButton = document.getElementById("prevButton2");

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
    document.querySelector("input[name=nomealuno]").value = "";
    document.querySelector("input[name=ra]").value = "";
    document.querySelector("input[name=telefonealuno]").value = "";
    document.querySelector("input[name=emailaluno]").value = "";
  };

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    addloading();
    setTimeout(() => {
      removeloading();
      clearFields(); 
    }, 2000); =
  });
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
    document.querySelector("input[name=nomeprof]").value = "";
    document.querySelector("input[name=telefoneprof]").value = "";
    document.querySelector("input[name=emailprof]").value = "";
  };

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    addloading();
    setTimeout(() => {
      removeloading();
      clearFields(); 
    }, 2000); 
  });
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

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    addloading();
    setTimeout(() => {
      removeloading();
    }, 2000); 
  });
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

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    addloading();
    setTimeout(() => {
      removeloading();
    }, 2000); 
  });
});

// Função para obter a data atual no formato "dd/mm/yyyy"
function getDataAtual() {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0"); // Mês é base 0
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

// Preenche o campo "data" com a data atual quando a página carrega
window.addEventListener("load", function () {
  const campoData = document.getElementById("data");
  if (campoData) {
    campoData.value = getDataAtual();
  }
});

// // Alerta de página em construção

// document.addEventListener("DOMContentLoaded", function () {
//   const links = document.querySelectorAll(".header-links a");

//   function mostrarAlerta(event) {
//     if (!event.target.classList.contains("excluir-alerta")) {
//       event.preventDefault();
//       alert("Desculpe o transtorno, essa página ainda está em construção");
//     }
//   }

//   links.forEach((link) => {
//     link.addEventListener("click", mostrarAlerta);
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const menuItems = document.querySelectorAll("#nav li");

//   function mostrarAlerta(event) {
//     const link = event.target;

//     if (link.tagName === "A") {
//       const href = link.getAttribute("href");

//       if (href !== "./graduacao.html" && href !== "./index.html") {
//         event.preventDefault();
//         alert("Desculpe o transtorno, essa página ainda está em construção");
//       }
//     }
//   }

//   menuItems.forEach((item) => {
//     const link = item.querySelector("a");
//     link.addEventListener("click", mostrarAlerta);
//   });
// });

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

// Unidades JS

document.addEventListener("DOMContentLoaded", (event) => {
  const botao1 = document.getElementById("botao1");
  const botao2 = document.getElementById("botao2");
  const botao3 = document.getElementById("botao3");
  const botao4 = document.getElementById("botao4");
  const botao5 = document.getElementById("botao5");
  const botao6 = document.getElementById("botao6");
  const botao7 = document.getElementById("botao7");
  const botao8 = document.getElementById("botao8");
  const botao9 = document.getElementById("botao9");
  const botao10 = document.getElementById("botao10");
  const botao11 = document.getElementById("botao11");
  const botao12 = document.getElementById("botao12");
  const botao13 = document.getElementById("botao13");
  const botao14 = document.getElementById("botao14");
  const botao15 = document.getElementById("botao15");
  const botao16 = document.getElementById("botao16");
  const texto1 = document.getElementById("text1");
  const texto2 = document.getElementById("text2");
  const texto3 = document.getElementById("text3");
  const texto4 = document.getElementById("text4");
  const texto5 = document.getElementById("text5");
  const texto6 = document.getElementById("text6");
  const texto7 = document.getElementById("text7");
  const texto8 = document.getElementById("text8");
  const texto9 = document.getElementById("text9");
  const texto10 = document.getElementById("text10");
  const texto11 = document.getElementById("text11");
  const texto12 = document.getElementById("text12");
  const texto13 = document.getElementById("text13");
  const texto14 = document.getElementById("text14");
  const texto15 = document.getElementById("text15");
  const texto16 = document.getElementById("text16");

  botao1.addEventListener("click", function () {
    //Deixa o botão selecionado
    if (botao1.classList.contains("inactive")) {
      botao1.classList.remove("inactive");
      botao2.classList.add("inactive");
      botao3.classList.add("inactive");
      botao4.classList.add("inactive");
      botao5.classList.add("inactive");
      botao6.classList.add("inactive");
      botao7.classList.add("inactive");
      botao8.classList.add("inactive");
      botao9.classList.add("inactive");
      botao10.classList.add("inactive");
      botao11.classList.add("inactive");
      botao12.classList.add("inactive");
      botao13.classList.add("inactive");
      botao14.classList.add("inactive");
      botao15.classList.add("inactive");
      botao16.classList.add("inactive");
    }

    //Deixa o texto selecionado
    texto1.style.display = "list-item";
    texto2.style.display = "none";
    texto3.style.display = "none";
    texto4.style.display = "none";
    texto5.style.display = "none";
    texto6.style.display = "none";
    texto7.style.display = "none";
    texto8.style.display = "none";
    texto9.style.display = "none";
    texto10.style.display = "none";
    texto11.style.display = "none";
    texto12.style.display = "none";
    texto13.style.display = "none";
    texto14.style.display = "none";
    texto15.style.display = "none";
    texto16.style.display = "none";
  });

  botao2.addEventListener("click", function () {
    //Deixa o botão selecionado
    if (botao2.classList.contains("inactive")) {
      botao2.classList.remove("inactive");
      botao1.classList.add("inactive");
      botao3.classList.add("inactive");
      botao4.classList.add("inactive");
      botao5.classList.add("inactive");
      botao6.classList.add("inactive");
      botao7.classList.add("inactive");
      botao8.classList.add("inactive");
      botao9.classList.add("inactive");
      botao10.classList.add("inactive");
      botao11.classList.add("inactive");
      botao12.classList.add("inactive");
      botao13.classList.add("inactive");
      botao14.classList.add("inactive");
      botao15.classList.add("inactive");
      botao16.classList.add("inactive");
    }

    //Deixa o texto selecionado
    texto1.style.display = "none";
    texto2.style.display = "list-item";
    texto3.style.display = "none";
    texto4.style.display = "none";
    texto5.style.display = "none";
    texto6.style.display = "none";
    texto7.style.display = "none";
    texto8.style.display = "none";
    texto9.style.display = "none";
    texto10.style.display = "none";
    texto11.style.display = "none";
    texto12.style.display = "none";
    texto13.style.display = "none";
    texto14.style.display = "none";
    texto15.style.display = "none";
    texto16.style.display = "none";
  });

  botao3.addEventListener("click", function () {
    //Deixa o botão selecionado
    if (botao3.classList.contains("inactive")) {
      botao3.classList.remove("inactive");
      botao1.classList.add("inactive");
      botao2.classList.add("inactive");
      botao4.classList.add("inactive");
      botao5.classList.add("inactive");
      botao6.classList.add("inactive");
      botao7.classList.add("inactive");
      botao8.classList.add("inactive");
      botao9.classList.add("inactive");
      botao10.classList.add("inactive");
      botao11.classList.add("inactive");
      botao12.classList.add("inactive");
      botao13.classList.add("inactive");
      botao14.classList.add("inactive");
      botao15.classList.add("inactive");
      botao16.classList.add("inactive");
    }

    //Deixa o texto selecionado
    texto1.style.display = "none";
    texto2.style.display = "none";
    texto3.style.display = "list-item";
    texto4.style.display = "none";
    texto5.style.display = "none";
    texto6.style.display = "none";
    texto7.style.display = "none";
    texto8.style.display = "none";
    texto9.style.display = "none";
    texto10.style.display = "none";
    texto11.style.display = "none";
    texto12.style.display = "none";
    texto13.style.display = "none";
    texto14.style.display = "none";
    texto15.style.display = "none";
    texto16.style.display = "none";
  });

  botao4.addEventListener("click", function () {
    //Deixa o botão selecionado
    if (botao4.classList.contains("inactive")) {
      botao4.classList.remove("inactive");
      botao1.classList.add("inactive");
      botao2.classList.add("inactive");
      botao3.classList.add("inactive");
      botao5.classList.add("inactive");
      botao6.classList.add("inactive");
      botao7.classList.add("inactive");
      botao8.classList.add("inactive");
      botao9.classList.add("inactive");
      botao10.classList.add("inactive");
      botao11.classList.add("inactive");
      botao12.classList.add("inactive");
      botao13.classList.add("inactive");
      botao14.classList.add("inactive");
      botao15.classList.add("inactive");
      botao16.classList.add("inactive");
    }

    //Deixa o texto selecionado
    texto1.style.display = "none";
    texto2.style.display = "none";
    texto3.style.display = "none";
    texto4.style.display = "list-item";
    texto5.style.display = "none";
    texto6.style.display = "none";
    texto7.style.display = "none";
    texto8.style.display = "none";
    texto9.style.display = "none";
    texto10.style.display = "none";
    texto11.style.display = "none";
    texto12.style.display = "none";
    texto13.style.display = "none";
    texto14.style.display = "none";
    texto15.style.display = "none";
    texto16.style.display = "none";
  });

  botao5.addEventListener("click", function () {
    //Deixa o botão selecionado
    if (botao5.classList.contains("inactive")) {
      botao5.classList.remove("inactive");
      botao1.classList.add("inactive");
      botao2.classList.add("inactive");
      botao3.classList.add("inactive");
      botao4.classList.add("inactive");
      botao6.classList.add("inactive");
      botao7.classList.add("inactive");
      botao8.classList.add("inactive");
      botao9.classList.add("inactive");
      botao10.classList.add("inactive");
      botao11.classList.add("inactive");
      botao12.classList.add("inactive");
      botao13.classList.add("inactive");
      botao14.classList.add("inactive");
      botao15.classList.add("inactive");
      botao16.classList.add("inactive");
    }

    //Deixa o texto selecionado
    texto1.style.display = "none";
    texto2.style.display = "none";
    texto3.style.display = "none";
    texto4.style.display = "none";
    texto5.style.display = "list-item";
    texto6.style.display = "none";
    texto7.style.display = "none";
    texto8.style.display = "none";
    texto9.style.display = "none";
    texto10.style.display = "none";
    texto11.style.display = "none";
    texto12.style.display = "none";
    texto13.style.display = "none";
    texto14.style.display = "none";
    texto15.style.display = "none";
    texto16.style.display = "none";
  });

  botao6.addEventListener("click", function () {
    //Deixa o botão selecionado
    if (botao6.classList.contains("inactive")) {
      botao6.classList.remove("inactive");
      botao1.classList.add("inactive");
      botao2.classList.add("inactive");
      botao3.classList.add("inactive");
      botao4.classList.add("inactive");
      botao5.classList.add("inactive");
      botao7.classList.add("inactive");
      botao8.classList.add("inactive");
      botao9.classList.add("inactive");
      botao10.classList.add("inactive");
      botao11.classList.add("inactive");
      botao12.classList.add("inactive");
      botao13.classList.add("inactive");
      botao14.classList.add("inactive");
      botao15.classList.add("inactive");
      botao16.classList.add("inactive");
    }

    //Deixa o texto selecionado
    texto1.style.display = "none";
    texto2.style.display = "none";
    texto3.style.display = "none";
    texto4.style.display = "none";
    texto5.style.display = "none";
    texto6.style.display = "list-item";
    texto7.style.display = "none";
    texto8.style.display = "none";
    texto9.style.display = "none";
    texto10.style.display = "none";
    texto11.style.display = "none";
    texto12.style.display = "none";
    texto13.style.display = "none";
    texto14.style.display = "none";
    texto15.style.display = "none";
    texto16.style.display = "none";
  });

  botao7.addEventListener("click", function () {
    //Deixa o botão selecionado
    if (botao7.classList.contains("inactive")) {
      botao7.classList.remove("inactive");
      botao1.classList.add("inactive");
      botao2.classList.add("inactive");
      botao3.classList.add("inactive");
      botao4.classList.add("inactive");
      botao5.classList.add("inactive");
      botao6.classList.add("inactive");
      botao8.classList.add("inactive");
      botao9.classList.add("inactive");
      botao10.classList.add("inactive");
      botao11.classList.add("inactive");
      botao12.classList.add("inactive");
      botao13.classList.add("inactive");
      botao14.classList.add("inactive");
      botao15.classList.add("inactive");
      botao16.classList.add("inactive");
    }

    //Deixa o texto selecionado
    texto1.style.display = "none";
    texto2.style.display = "none";
    texto3.style.display = "none";
    texto4.style.display = "none";
    texto5.style.display = "none";
    texto6.style.display = "none";
    texto7.style.display = "list-item";
    texto8.style.display = "none";
    texto9.style.display = "none";
    texto10.style.display = "none";
    texto11.style.display = "none";
    texto12.style.display = "none";
    texto13.style.display = "none";
    texto14.style.display = "none";
    texto15.style.display = "none";
    texto16.style.display = "none";
  });

  botao8.addEventListener("click", function () {
    //Deixa o botão selecionado
    if (botao8.classList.contains("inactive")) {
      botao8.classList.remove("inactive");
      botao1.classList.add("inactive");
      botao2.classList.add("inactive");
      botao3.classList.add("inactive");
      botao4.classList.add("inactive");
      botao5.classList.add("inactive");
      botao6.classList.add("inactive");
      botao7.classList.add("inactive");
      botao9.classList.add("inactive");
      botao10.classList.add("inactive");
      botao11.classList.add("inactive");
      botao12.classList.add("inactive");
      botao13.classList.add("inactive");
      botao14.classList.add("inactive");
      botao15.classList.add("inactive");
      botao16.classList.add("inactive");
    }

    //Deixa o texto selecionado
    texto1.style.display = "none";
    texto2.style.display = "none";
    texto3.style.display = "none";
    texto4.style.display = "none";
    texto5.style.display = "none";
    texto6.style.display = "none";
    texto7.style.display = "none";
    texto8.style.display = "list-item";
    texto9.style.display = "none";
    texto10.style.display = "none";
    texto11.style.display = "none";
    texto12.style.display = "none";
    texto13.style.display = "none";
    texto14.style.display = "none";
    texto15.style.display = "none";
    texto16.style.display = "none";
  });

  botao9.addEventListener("click", function () {
    //Deixa o botão selecionado
    if (botao9.classList.contains("inactive")) {
      botao9.classList.remove("inactive");
      botao1.classList.add("inactive");
      botao2.classList.add("inactive");
      botao3.classList.add("inactive");
      botao4.classList.add("inactive");
      botao5.classList.add("inactive");
      botao6.classList.add("inactive");
      botao7.classList.add("inactive");
      botao8.classList.add("inactive");
      botao10.classList.add("inactive");
      botao11.classList.add("inactive");
      botao12.classList.add("inactive");
      botao13.classList.add("inactive");
      botao14.classList.add("inactive");
      botao15.classList.add("inactive");
      botao16.classList.add("inactive");
    }

    //Deixa o texto selecionado
    texto1.style.display = "none";
    texto2.style.display = "none";
    texto3.style.display = "none";
    texto4.style.display = "none";
    texto5.style.display = "none";
    texto6.style.display = "none";
    texto7.style.display = "none";
    texto8.style.display = "none";
    texto9.style.display = "list-item";
    texto10.style.display = "none";
    texto11.style.display = "none";
    texto12.style.display = "none";
    texto13.style.display = "none";
    texto14.style.display = "none";
    texto15.style.display = "none";
    texto16.style.display = "none";
  });

  botao10.addEventListener("click", function () {
    //Deixa o botão selecionado
    if (botao10.classList.contains("inactive")) {
      botao10.classList.remove("inactive");
      botao1.classList.add("inactive");
      botao2.classList.add("inactive");
      botao3.classList.add("inactive");
      botao4.classList.add("inactive");
      botao5.classList.add("inactive");
      botao6.classList.add("inactive");
      botao7.classList.add("inactive");
      botao8.classList.add("inactive");
      botao9.classList.add("inactive");
      botao11.classList.add("inactive");
      botao12.classList.add("inactive");
      botao13.classList.add("inactive");
      botao14.classList.add("inactive");
      botao15.classList.add("inactive");
      botao16.classList.add("inactive");
    }

    //Deixa o texto selecionado
    texto1.style.display = "none";
    texto2.style.display = "none";
    texto3.style.display = "none";
    texto4.style.display = "none";
    texto5.style.display = "none";
    texto6.style.display = "none";
    texto7.style.display = "none";
    texto8.style.display = "none";
    texto9.style.display = "none";
    texto10.style.display = "list-item";
    texto11.style.display = "none";
    texto12.style.display = "none";
    texto13.style.display = "none";
    texto14.style.display = "none";
    texto15.style.display = "none";
    texto16.style.display = "none";
  });

  botao11.addEventListener("click", function () {
    //Deixa o botão selecionado
    if (botao11.classList.contains("inactive")) {
      botao11.classList.remove("inactive");
      botao1.classList.add("inactive");
      botao2.classList.add("inactive");
      botao3.classList.add("inactive");
      botao4.classList.add("inactive");
      botao5.classList.add("inactive");
      botao6.classList.add("inactive");
      botao7.classList.add("inactive");
      botao8.classList.add("inactive");
      botao9.classList.add("inactive");
      botao10.classList.add("inactive");
      botao12.classList.add("inactive");
      botao13.classList.add("inactive");
      botao14.classList.add("inactive");
      botao15.classList.add("inactive");
      botao16.classList.add("inactive");
    }

    //Deixa o texto selecionado
    texto1.style.display = "none";
    texto2.style.display = "none";
    texto3.style.display = "none";
    texto4.style.display = "none";
    texto5.style.display = "none";
    texto6.style.display = "none";
    texto7.style.display = "none";
    texto8.style.display = "none";
    texto9.style.display = "none";
    texto10.style.display = "none";
    texto11.style.display = "list-item";
    texto12.style.display = "none";
    texto13.style.display = "none";
    texto14.style.display = "none";
    texto15.style.display = "none";
    texto16.style.display = "none";
  });

  botao12.addEventListener("click", function () {
    //Deixa o botão selecionado
    if (botao12.classList.contains("inactive")) {
      botao12.classList.remove("inactive");
      botao1.classList.add("inactive");
      botao2.classList.add("inactive");
      botao3.classList.add("inactive");
      botao4.classList.add("inactive");
      botao5.classList.add("inactive");
      botao6.classList.add("inactive");
      botao7.classList.add("inactive");
      botao8.classList.add("inactive");
      botao9.classList.add("inactive");
      botao10.classList.add("inactive");
      botao11.classList.add("inactive");
      botao13.classList.add("inactive");
      botao14.classList.add("inactive");
      botao15.classList.add("inactive");
      botao16.classList.add("inactive");
    }

    //Deixa o texto selecionado
    texto1.style.display = "none";
    texto2.style.display = "none";
    texto3.style.display = "none";
    texto4.style.display = "none";
    texto5.style.display = "none";
    texto6.style.display = "none";
    texto7.style.display = "none";
    texto8.style.display = "none";
    texto9.style.display = "none";
    texto10.style.display = "none";
    texto11.style.display = "none";
    texto12.style.display = "list-item";
    texto13.style.display = "none";
    texto14.style.display = "none";
    texto15.style.display = "none";
    texto16.style.display = "none";
  });

  botao13.addEventListener("click", function () {
    //Deixa o botão selecionado
    if (botao13.classList.contains("inactive")) {
      botao13.classList.remove("inactive");
      botao1.classList.add("inactive");
      botao2.classList.add("inactive");
      botao3.classList.add("inactive");
      botao4.classList.add("inactive");
      botao5.classList.add("inactive");
      botao6.classList.add("inactive");
      botao7.classList.add("inactive");
      botao8.classList.add("inactive");
      botao9.classList.add("inactive");
      botao10.classList.add("inactive");
      botao11.classList.add("inactive");
      botao12.classList.add("inactive");
      botao14.classList.add("inactive");
      botao15.classList.add("inactive");
      botao16.classList.add("inactive");
    }

    //Deixa o texto selecionado
    texto1.style.display = "none";
    texto2.style.display = "none";
    texto3.style.display = "none";
    texto4.style.display = "none";
    texto5.style.display = "none";
    texto6.style.display = "none";
    texto7.style.display = "none";
    texto8.style.display = "none";
    texto9.style.display = "none";
    texto10.style.display = "none";
    texto11.style.display = "none";
    texto12.style.display = "none";
    texto13.style.display = "list-item";
    texto14.style.display = "none";
    texto15.style.display = "none";
    texto16.style.display = "none";
  });

  botao14.addEventListener("click", function () {
    //Deixa o botão selecionado
    if (botao14.classList.contains("inactive")) {
      botao14.classList.remove("inactive");
      botao1.classList.add("inactive");
      botao2.classList.add("inactive");
      botao3.classList.add("inactive");
      botao4.classList.add("inactive");
      botao5.classList.add("inactive");
      botao6.classList.add("inactive");
      botao7.classList.add("inactive");
      botao8.classList.add("inactive");
      botao9.classList.add("inactive");
      botao10.classList.add("inactive");
      botao11.classList.add("inactive");
      botao12.classList.add("inactive");
      botao13.classList.add("inactive");
      botao15.classList.add("inactive");
      botao16.classList.add("inactive");
    }

    //Deixa o texto selecionado
    texto1.style.display = "none";
    texto2.style.display = "none";
    texto3.style.display = "none";
    texto4.style.display = "none";
    texto5.style.display = "none";
    texto6.style.display = "none";
    texto7.style.display = "none";
    texto8.style.display = "none";
    texto9.style.display = "none";
    texto10.style.display = "none";
    texto11.style.display = "none";
    texto12.style.display = "none";
    texto13.style.display = "none";
    texto14.style.display = "list-item";
    texto15.style.display = "none";
    texto16.style.display = "none";
  });

  botao15.addEventListener("click", function () {
    //Deixa o botão selecionado
    if (botao15.classList.contains("inactive")) {
      botao15.classList.remove("inactive");
      botao1.classList.add("inactive");
      botao2.classList.add("inactive");
      botao3.classList.add("inactive");
      botao4.classList.add("inactive");
      botao5.classList.add("inactive");
      botao6.classList.add("inactive");
      botao7.classList.add("inactive");
      botao8.classList.add("inactive");
      botao9.classList.add("inactive");
      botao10.classList.add("inactive");
      botao11.classList.add("inactive");
      botao12.classList.add("inactive");
      botao13.classList.add("inactive");
      botao14.classList.add("inactive");
      botao16.classList.add("inactive");
    }

    //Deixa o texto selecionado
    texto1.style.display = "none";
    texto2.style.display = "none";
    texto3.style.display = "none";
    texto4.style.display = "none";
    texto5.style.display = "none";
    texto6.style.display = "none";
    texto7.style.display = "none";
    texto8.style.display = "none";
    texto9.style.display = "none";
    texto10.style.display = "none";
    texto11.style.display = "none";
    texto12.style.display = "none";
    texto13.style.display = "none";
    texto14.style.display = "none";
    texto15.style.display = "list-item";
    texto16.style.display = "none";
  });

  botao16.addEventListener("click", function () {
    //Deixa o botão selecionado
    if (botao16.classList.contains("inactive")) {
      botao16.classList.remove("inactive");
      botao1.classList.add("inactive");
      botao2.classList.add("inactive");
      botao3.classList.add("inactive");
      botao4.classList.add("inactive");
      botao5.classList.add("inactive");
      botao6.classList.add("inactive");
      botao7.classList.add("inactive");
      botao8.classList.add("inactive");
      botao9.classList.add("inactive");
      botao10.classList.add("inactive");
      botao11.classList.add("inactive");
      botao12.classList.add("inactive");
      botao13.classList.add("inactive");
      botao14.classList.add("inactive");
      botao15.classList.add("inactive");
    }

    //Deixa o texto selecionado
    texto1.style.display = "none";
    texto2.style.display = "none";
    texto3.style.display = "none";
    texto4.style.display = "none";
    texto5.style.display = "none";
    texto6.style.display = "none";
    texto7.style.display = "none";
    texto8.style.display = "none";
    texto9.style.display = "none";
    texto10.style.display = "none";
    texto11.style.display = "none";
    texto12.style.display = "none";
    texto13.style.display = "none";
    texto14.style.display = "none";
    texto15.style.display = "none";
    texto16.style.display = "list-item";
  });
});

function scrollDown() {
  // Obtém a posição atual da janela
  const currentPosition = window.scrollY;

  // Define a posição de destino (pode ajustar essa parte de acordo com sua necessidade)
  const targetPosition = currentPosition + 300; // Role 300 pixels para baixo

  // Anima a rolagem suavemente
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth", // Essa opção faz a rolagem ser suave
  });
}
