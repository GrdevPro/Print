const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



//------------------------------------------ EVENT LISTENER SECTION
const leftArrow = document.getElementsByClassName("arrow_left")[0];
const rightArrow = document.getElementsByClassName("arrow_right")[0];


// Premiere partie projet ok 





// Sélectionnez tous les éléments avec la classe "dots"
const dotContainers = document.querySelectorAll(".dots");

// Parcourir chaque élément 
dotContainers.forEach(container => {
  // Créez un élément <span> pour chaque diapositive
  slides.forEach((slide, index) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    
    // Si  première diapo, ajoutez la classe "dot_selected"
    if (index === 0) {
      dot.classList.add("dot_selected");
    }
    // Ajoutez l'élément <span> au conteneur
    container.appendChild(dot);
  });
});


// Etape 4
// Onclick fleche droite >bullet point selected changé 

let currentIndex = 0;

rightArrow.addEventListener("click", function() {
    // Supprimez la classe "dot_selected"
    allDotSpans.forEach(function(dot) {
        dot.classList.remove("dot_selected");
    });

    // Obtenir le prochain élément
    currentIndex = (currentIndex + 1) % allDotSpans.length; // Incrémente l'indice circulairement
    let nextDotSpan = allDotSpans[currentIndex];
    nextDotSpan.classList.add('dot_selected');
});


 // ------------------IMAGE SUIVANTE -----
 // Initialisez l'image avec la première image
 let currentImageIndex = 0;
 const imageElement = document.getElementById("image");
 const bannerText = document.querySelector("#banner p");
 const allDotSpans = document.querySelectorAll('span.dot');
// Fonction pour mettre à jour l'image et les points
function updateCarousel(direction) {
	// Supprimez la classe "dot_selected" de tous les points
	allDotSpans.forEach(dot => dot.classList.remove("dot_selected"));
  
	if (direction === "right") {
	  currentImageIndex = (currentImageIndex + 1) % slides.length;
	} else if (direction === "left") {
	  currentImageIndex = (currentImageIndex - 1 + slides.length) % slides.length;
	}
  
	// Mettez à jour l'image avec la nouvelle image
	imageElement.src = "./assets/images/slideshow/" + slides[currentImageIndex].image;
  
	// Mettez à jour le texte de l'image
	bannerText.innerHTML = slides[currentImageIndex].tagLine;
  
	// Ajoutez la classe "dot_selected" au point correspondant à la nouvelle image
	allDotSpans[currentImageIndex].classList.add("dot_selected");
  }
  
  // Écouteur d'événement pour la flèche droite
  rightArrow.addEventListener("click", function () {
	console.log("rightArrow ok")
	
	updateCarousel("right");
  });
  
  // Écouteur d'événement pour la flèche gauche
  leftArrow.addEventListener("click", function () {
	console.log("leftArrow ok")

	updateCarousel("left");
  });
  
 
  
  // Appel initial pour afficher la première diapositive
  updateCarousel();
  