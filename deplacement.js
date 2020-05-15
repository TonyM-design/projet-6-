

$(function() {
     let joueurActif = nouvellePartie.`joueur${genererAleatoire(1, 2)}`;
    let positionInitiale == nouvellePartie.`joueur${genCarte.nombreJoueur}`;;
    $(document).keydown(function(event) { 
     if (event.which == 37) { // fleche gauche  code ascii 37
// position initiale devient une cellule vide
// nouvelle position devient cellule joueur actif 
alert("test1");
     };  

     if (event.which == 38) { // fleche haut  code ascii 38
          alert("test2");
     };

     if (event.which == 39) { // fleche droite  code ascii 39
          alert("test3");
     };

     if (event.which == 40) { // fleche bas  code ascii 40
          alert("test4");
     };  

    });
  });

obtenirPosition() {
     get positionX() {
       return this.journal[this.journal.length - 1];
       }

/*
var o = {
  get dernier() {
    if (this.journal.length > 0) {
      return this.journal[this.journal.length - 1];
    }
    else {
      return null;
    }
  },
  journal: ["toto","actu"]
}
console.log(o.dernier); // "actu"
*/