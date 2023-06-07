import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
//document.querySelector("h1").addEventListener("click",function(e){
//alert("Bana tıkladın!")
//});


// Kodlar buraya gelecek!

// 1) mouseover
document.querySelector(".logo-heading").addEventListener("mouseover", e => {e.target.style.color = "red";})

// 2) mouseout
document.querySelector(".logo-heading").addEventListener("mouseout", e => {e.target.style.color = "black";})

// 3) keydown
document.body.addEventListener("keydown", keyFunction);

function keyFunction(){
    alert("Bir tuşa bastınız!");
}

// 4) wheel

document.querySelector(".main-navigation").addEventListener("wheel", wheelFunction);

function wheelFunction(e){
    e.currentTarget.style.backgroundColor = "silver";
}

window.addEventListener("resize", resizeFunction);

function resizeFunction(){
    document.querySelector(".main-navigation").style.backgroundColor = "pink";
}



/* ----ETÜTTEN----
//wheel

const whellColor = document.querySelector(".main-navigation");
const bodyStyle = () => (whellColor.style.backgroundColor = "whitesmoke");
document.querySelector("body").addEventListener("wheel", bodyStyle);


//dblclick

document
    .querySelector(".content-destination img")
    .addEventListener("dblclick", (event) => {
        if (event.target.style.borderRadius === "100%") {
            event.target.style.borderRadius = "";
        } else {
            event.target.style.borderRadius = "100%";
        }
    });

// mousemove

const rota = document.querySelectorAll("h4");
rota.forEach((h4) => {
    h4.addEventListener("mousemove", () => {
        h4.style.color = "orange";
    });
});


// focus 

const form = document.querySelectorAll(".nav-link");
const formArr = Array.from(form);
formArr.forEach((element) => {
    element.addEventListener(
        "focus",
        (event) => {
            event.target.style.background = "blue";
        },
        true
    );
    element.addEventListener(
        "blur",
        (event) => {
            event.target.style.background = "gray";
        },
        true
    );
});

// keydown 

document.addEventListener("keydown", (event) => {
    if (event.shiftKey) {
        const baslik = document.querySelector("h1");
        baslik.style.color = "#c6e2ff";
    }
});

// scroll

const header = document.querySelector("header");
document.addEventListener("scroll", (event) => {
    header.style.backgroundColor = "#008080";
});



// load 

const loading = document.querySelectorAll("img");
loading[1].addEventListener("load", (event) => {
    alert("Yüklendi.");
});


//click 

const clickButton = document.querySelectorAll(".btn");
clickButton.forEach((button) => {
    button.addEventListener("click", (event) => {
        button.style.backgroundColor = "#8b8989";
    });
});


//mouseover

const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#79cdcd";
  });
});*/


/* SAFA
// Kodlar buraya gelecek!
let navLinks = document.getElementsByClassName("nav-link");
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("mouseover", function() {
        this.style.color = "blue";
      });

      navLinks[i].addEventListener("mouseout", function() {
        this.style.color = "";
      });
    }

    document.addEventListener("keydown", function(event) {
      console.log("Basılan tuşun kodu: " + event.code);
    });

    function goToNextParagraph(element) {
      let nextParagraph = element.nextElementSibling;
      if (nextParagraph && nextParagraph.tagName.toLowerCase() === "p") {
        nextParagraph.scrollIntoView({ behavior: "smooth" });
      }
    }

    let h2Elements = document.querySelectorAll(".content-section h2");
    h2Elements.forEach(function(h2) {
      h2.addEventListener("click", function() {
        goToNextParagraph(this);
      });
    });

    document.addEventListener("DOMContentLoaded", function() {
      let navLinks2 = document.querySelectorAll(".nav-link");

      navLinks2.forEach(function(link) {
        link.addEventListener("click", function(event) {
          let content = document.querySelector(".container");
          content.style.display = "none";

          setTimeout(function() {
            location.reload();
          }, 2000);
        });
      });
    });

    document.addEventListener("keydown", function(event) {
      if (event.code === "KeyF") {
        document.body.style.backgroundColor = "yellow";
      } else if (event.code === "KeyB") {
        document.body.style.backgroundColor = "navy";
      }
    });

    document.addEventListener("keydown", function(event) {
      if (event.code === "KeyS") {
        document.body.style.backgroundColor = "yellow";
      } else if (event.code === "KeyG") {
        document.body.style.backgroundColor = "red";
      }
    });
    let destinationSection = document.querySelector(".content-destination h2");

destinationSection.setAttribute("tabindex", "0"); 

destinationSection.addEventListener("focus", function() {
  this.style.backgroundColor = "red";
});
window.addEventListener("resize", function() {
    console.log("Pencere boyutu değişti!");
  });    
  window.addEventListener("scroll", function() {
    console.log("Sayfa kaydırıldı!");
  });*/

