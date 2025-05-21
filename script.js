function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI !
let header = document.createElement('header'); 
      let nav = document.createElement('nav');
      console.log(header);
      
// div de la nav 
// logo
      let divLogo = document.createElement ('div');
      divLogo.id ='logo'
      let logo = document.createElement('a')
  
      let titre = document.createElement('h2');
      console.log(divLogo);
      
// Les Articles 
      let divThemeNav = document.createElement ('div');
      let listeArticle= document.createElement('a')
      divThemeNav.id = ' ThemeNav'
     let navArticle = ["Thème 1","Thème 2", "Thème 3", "Thème 4"]

// Login 
let divAvatar = document.createElement ('div');
divAvatar.id = 'Avatar'
      let BoutonCompte = document.createElement('a')
let BoutonAvatar = document.createElement('a')

/// crée les boucles pour mes thematique avec le tableeau themes , cree pour les themes de mon headers 
// id = uni ; classe pour les multiples ! 
// recuperer la data = data.journal et crée la variable 

// les parents 
    header.appendChild(nav)

divLogo.appendChild(logo)
     divLogo.appendChild(titre)

     divThemeNav.appendChild(listeArticle)
          // divArcticleNav.appendChild(navArticle)

          divAvatar.appendChild(BoutonAvatar)
          divAvatar.appendChild(BoutonCompte)

nav.appendChild(divThemeNav)
nav.appendChild(divAvatar)
nav.appendChild(divLogo)
console.log(nav);

let ulNav= document.createElement('ul')

let themes = data.journal.themes

console.log(themes);


// crée une boucle qui affiche chaque nom du tableau "themes" dans l'ul ( des li ) 
themes.forEach(theme => {
  console.log(theme.nom);
  let liT = document.createElement('li');
console.log(liT);
ulNav.appendChild(liT)
  

  //let nomT = theme.nom
  
 
  
  
  
});


       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici