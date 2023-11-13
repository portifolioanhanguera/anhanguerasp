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
// JS Formulário Padrão
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".botao-form");
  const mensagem = document.getElementById("mensagem");

  const showSuccessMessage = () => {
    mensagem.innerText = "Formulário enviado! Obrigado por sua inscrição!";
    mensagem.style.display = "block";
  };

  const addLoading = () => {
    button.innerHTML =
      '<img src="./img/loading_svgrepo.com.png" class="loading">';
  };

  const removeLoading = () => {
    button.innerHTML = "Inscreva-se";
  };

  const clearFields = () => {
    document.querySelector("input[name=nome]").value = "";
    document.querySelector("input[name=telefone]").value = "";
    document.querySelector("input[name=email]").value = "";
    document.querySelector("select[name=modalidade]").value = "";
    document.querySelector("select[name=tipo]").value = "";
    document.querySelector("select[name=curso-graduacao]").value = "";
    document.querySelector("select[name=curso-tecnicos]").value = "";
    document.querySelector("input[name=curso-manual]").value = "";
    document.querySelector("select[name=polo]").value = "";
  };

  const handleTipoCursoChange = () => {
    const tipoCursoSelect = document.querySelector('select[name="tipo"]');
    const cursoContainer = document.getElementById("curso-container");
    const cursoGraduacaoSelect = document.querySelector(
      'select[name="curso-graduacao"]'
    );
    const cursoTecnicosSelect = document.querySelector(
      'select[name="curso-tecnicos"]'
    );
    const cursoManualInput = document.querySelector(
      'input[name="curso-manual"]'
    );

    tipoCursoSelect.addEventListener("change", function () {
      const selectedOption = tipoCursoSelect.value;

      if (selectedOption === "Graduação") {
        cursoContainer.style.display = "block";
        cursoGraduacaoSelect.style.display = "block";
        cursoTecnicosSelect.style.display = "none";
        cursoManualInput.style.display = "none";
        cursoTecnicosSelect.removeAttribute("required"); // Remover atributo required
        cursoGraduacaoSelect.setAttribute("required", "required"); // Adicionar required
      } else if (selectedOption === "Cursos Técnicos") {
        cursoContainer.style.display = "block";
        cursoGraduacaoSelect.style.display = "none";
        cursoTecnicosSelect.style.display = "block";
        cursoManualInput.style.display = "none";
        cursoGraduacaoSelect.removeAttribute("required"); // Remover atributo required
        cursoTecnicosSelect.setAttribute("required", "required"); // Adicionar required
      } else if (
        selectedOption === "Cursos Livres" ||
        selectedOption === "Pós-graduação"
      ) {
        cursoContainer.style.display = "block";
        cursoGraduacaoSelect.style.display = "none";
        cursoTecnicosSelect.style.display = "none";
        cursoManualInput.style.display = "block";
        cursoGraduacaoSelect.removeAttribute("required"); // Remover atributo required
        cursoTecnicosSelect.removeAttribute("required"); // Remover atributo required
      } else {
        cursoContainer.style.display = "none";
        cursoGraduacaoSelect.value = "";
        cursoTecnicosSelect.value = "";
        cursoManualInput.value = "";
        cursoGraduacaoSelect.removeAttribute("required"); // Remover atributo required
        cursoTecnicosSelect.removeAttribute("required"); // Remover atributo required
      }
    });
  };

  handleTipoCursoChange();

  const handleSubmit = (event) => {
    event.preventDefault();
    addLoading();
    const data = document.querySelector("input[name=data]").value;
    const nome = document.querySelector("input[name=nome]").value;
    const telefone = document.querySelector("input[name=telefone]").value;
    const email = document.querySelector("input[name=email]").value;
    const modalidade = document.querySelector("select[name=modalidade]").value;
    const tipo = document.querySelector("select[name=tipo]").value;
    const cursoGraduacao = document.querySelector(
      "select[name=curso-graduacao]"
    ).value;
    const cursoTecnicos = document.querySelector(
      "select[name=curso-tecnicos]"
    ).value;
    const cursoManualInput = document.querySelector("input[name=curso-manual]");
    const curso =
      tipo === "Graduação"
        ? cursoGraduacao
        : tipo === "Cursos Técnicos"
        ? cursoTecnicos
        : cursoManualInput.value;
    const polo = document.querySelector("select[name=polo]").value;

    fetch("https://api.sheetmonkey.io/form/uwnN9fSvLjroHLkpXPQsmk", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
        nome,
        telefone,
        email,
        modalidade,
        tipo,
        curso,
        polo,
      }),
    }).then(() => {
      removeLoading();
      clearFields();
      showSuccessMessage();
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

// document.addEventListener("DOMContentLoaded", function () {
//   const links = document.querySelectorAll(".footer-informacoes li a");

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

// JS formulário Unegro - afiliados

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".botao-form");
  const showSuccessMessage = () => {
    mensagem.innerText = "Formulário enviado! Obrigado por sua inscrição!";
    mensagem.style.display = "block";
  };

  const addloading = () => {
    button.innerHTML =
      '<img src="./img/loading_svgrepo.com.png" class="loading">';
  };

  const removeloading = () => {
    button.innerHTML = "Inscreva-se";
  };

  const clearFields = () => {
    document.querySelector("input[name=data]").value = "";
    document.querySelector("input[name=NomeAfiliado]").value = "";
    document.querySelector("input[name=CEP]").value = "";
    document.querySelector("input[name=endereco]").value = "";
    document.querySelector("input[name=numero]").value = "";
    document.querySelector("input[name=complemento]").value = "";
    document.querySelector("input[name=bairro]").value = "";
    document.querySelector("input[name=cidade]").value = "";
    document.querySelector("input[name=uf]").value = "";
    document.querySelector("input[name=residencial]").value = "";
    document.querySelector("input[name=comercial]").value = "";
    document.querySelector("input[name=celular]").value = "";
    document.querySelector("input[name=nascimento]").value = "";
    document.querySelector("input[name=rg]").value = "";
    document.querySelector("input[name=cpf]").value = "";
    document.querySelector("select[name=sexo]").value = "";
    document.querySelector("input[name=emailafiliado]").value = "";
    document.querySelector("input[name=municipio]").value = "";
    document.querySelector("input[name=ufm]").value = "";
    document.querySelector("select[name=escolaridade]").value = "";
    document.querySelector("input[name=ocupacao]").value = "";
    document.querySelector("select[name=movimento]").value = "";
    document.querySelector("input[name=valor]").value = "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addloading();
    const data = document.querySelector("input[name=data]").value;
    const NomeAfiliado = document.querySelector(
      "input[name=NomeAfiliado]"
    ).value;
    const CEP = document.querySelector("input[name=CEP]").value;
    const endereco = document.querySelector("input[name=endereco]").value;
    const numero = document.querySelector("input[name=numero]").value;
    const complemento = document.querySelector("input[name=complemento]").value;
    const bairro = document.querySelector("input[name=bairro]").value;
    const cidade = document.querySelector("input[name=cidade]").value;
    const uf = document.querySelector("input[name=uf]").value;
    const residencial = document.querySelector("input[name=residencial]").value;
    const comercial = document.querySelector("input[name=comercial]").value;
    const celular = document.querySelector("input[name=celular]").value;
    const nascimento = document.querySelector("input[name=nascimento]").value;
    const rg = document.querySelector("input[name=rg]").value;
    const cpf = document.querySelector("input[name=cpf]").value;
    const sexo = document.querySelector("select[name=sexo]").value;
    const emailafiliado = document.querySelector(
      "input[name=emailafiliado]"
    ).value;
    const municipio = document.querySelector("input[name=municipio]").value;
    const ufm = document.querySelector("input[name=ufm]").value;
    const escolaridade = document.querySelector(
      "select[name=escolaridade]"
    ).value;
    const ocupacao = document.querySelector("input[name=ocupacao]").value;
    const movimento = document.querySelector("select[name=movimento]").value;
    const valor = document.querySelector("input[name=valor]").value;

    fetch("https://api.sheetmonkey.io/form/uyvgqX1ZoBoyAcF56h2ygN", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
        NomeAfiliado,
        CEP,
        endereco,
        numero,
        complemento,
        bairro,
        cidade,
        uf,
        residencial,
        comercial,
        celular,
        nascimento,
        rg,
        cpf,
        sexo,
        emailafiliado,
        municipio,
        ufm,
        escolaridade,
        ocupacao,
        movimento,
        valor,
      }),
    }).then(() => {
      removeloading();
      clearFields(); // Limpa os campos após o envio do formulário
      showSuccessMessage();
    });
  };

  document.querySelector("form").addEventListener("submit", handleSubmit);
});

// JS formulário  Concurso Público

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".botao-form");
  const showSuccessMessage = () => {
    mensagem.innerText = "Formulário enviado! Obrigado por sua inscrição!";
    mensagem.style.display = "block";
  };

  const addloading = () => {
    button.innerHTML =
      '<img src="./img/loading_svgrepo.com.png" class="loading">';
  };

  const removeloading = () => {
    button.innerHTML = "Inscreva-se";
  };

  const clearFields = () => {
    document.querySelector("input[name=data]").value = "";
    document.querySelector("input[name=nomeconcurso]").value = "";
    document.querySelector("input[name=telefoneconcurso]").value = "";
    document.querySelector("input[name=emailconcurso]").value = "";
    document.querySelector("select[name=cursoconcurso]").value = "";
    document.querySelector("select[name=datacurso]").value = "";
    document.querySelector("select[name=localconcurso]").value = "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addloading();
    const data = document.querySelector("input[name=data]").value;
    const nomeconcurso = document.querySelector(
      "input[name=nomeconcurso]"
    ).value;
    const telefoneconcurso = document.querySelector(
      "input[name=telefoneconcurso]"
    ).value;
    const emailconcurso = document.querySelector(
      "input[name=emailconcurso]"
    ).value;
    const cursoconcurso = document.querySelector(
      "select[name=cursoconcurso]"
    ).value;
    const datacurso = document.querySelector("select[name=datacurso]").value;
    const localconcurso = document.querySelector(
      "select[name=localconcurso]"
    ).value;

    fetch("https://api.sheetmonkey.io/form/2fVEfg6Aed4GxgANxLppGS", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
        nomeconcurso,
        telefoneconcurso,
        emailconcurso,
        cursoconcurso,
        datacurso,
        localconcurso,
      }),
    }).then(() => {
      removeloading();
      clearFields();
      showSuccessMessage();
    });
  };

  document.querySelector("form").addEventListener("submit", handleSubmit);
});
