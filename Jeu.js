class Jeu {
  constructor() {

    // PARAMETRE COLONNE / CELLULE
    do {
      this.nombreColonne = parametrerNombreColonnes();
      this.nombreCellule = parametrerNombreCellules();
      if (this.nombreJoueurs + this.nombreArmes + this.nombreCellulesGrises > this.nombreColonne * this.nombreCellule) {
        alert("Pas assez de cases disponible sur le plateau de jeu, veuillez entrez de nouveaux paramètres");
      }
    } 
    while (this.nombreJoueurs + this.nombreArmes + this.nombreCellulesGrises > this.nombreColonne * this.nombreCellule);
    this.nombreJoueurAttendu = 2;
    this.nombreJoueurPresent = 1;
    this.joueur1 = null;
    this.joueur2 = null;
    this.nombreArmes = 30;
    this.nombreCellulesGrises = 15;
    this.carte = null;
    this.joueurActif = null; 
    this.listeJoueurs = [];

  }

  parametrerPositionJoueur(){
    const positionJoueur = new Joueur (this.nombreJoueurPresent, genererAleatoire(0, this.nombreColonne), genererAleatoire(0, this.nombreCellule) );
      if (genCarte.tableauColonnes[positionJoueur.positionX][positionJoueur.positionY].typeCase == "cellulevide" ) {
        nouvellePartie.nombreJoueurPresent++; 
        return positionJoueur; 

  }}


  ajouterJoueur(){
if(this.joueur1 === null && this.joueur2 === null){
    const ajoutJoueur = this.parametrerPositionJoueur()
        this.joueur1 = ajoutJoueur; 
        this.listeJoueurs.push(ajoutJoueur);
      }
  
  else { const ajoutJoueur = this.parametrerPositionJoueur() 
    this.joueur2 = ajoutJoueur;
    this.listeJoueurs.push(ajoutJoueur);
   }
}

  

  
  determinerJoueurActifAleatoire(){
  const joueurActifAleatoire = genererAleatoire(1, 3);
if (joueurActifAleatoire === 1){
  this.joueurActif= this.joueur1;
  this.joueurActif.actif = true;
  $( "joueur2" ).removeClass( "actif" );
  $("joueur1").addClass("actif");
  


}
else {this.joueurActif= this.joueur2;
  this.joueurActif.actif = true;}
  $(".joueur1").removeClass("actif");
  $(".joueur2").addClass("actif");


}


placerCasesSpeciales() {  
  //DEROULEMENT

genCarte.ajouterJoueurCarte();
  genCarte.ajouterArmeCarte();
  genCarte.ajouterBlocGrisCarte();
  genCarte.placerTableHTML()
  
    }

/*

deplacerJoueur(){

      $(document).keydown(function(event) { 
       if (event.which == 37) { // fleche gauche  code ascii 37
  // position initiale devient une cellule vide
  // nouvelle position devient cellule joueur actif 
  nouvellePartie.joueurActif.contenu.positionInitialeY--; // joueur
  nouvellePartie.joueurActif.positionY--; // case
  $('.actif').replaceWith('<p>Cet élément a été remplacé !</p>');
  alert("test");
       };  
  
       if (event.which == 38) { // fleche haut  code ascii 38
        nouvellePartie.joueurActif.contenu.positionInitialeX--;
        nouvellePartie.joueurActif.positionX--;
        alert("test");
       };
  
       if (event.which == 39) { // fleche droite  code ascii 39
        nouvellePartie.joueurActif.contenu.positionInitialeY++;
        nouvellePartie.joueurActif.positionY++;
        alert("test");
       };
  
       if (event.which == 40) { // fleche bas  code ascii 40
        nouvellePartie.joueurActif.contenu.positionInitialeX++;
        nouvellePartie.joueurActif.positionX++;
        alert("test");
       };  
  
      });
    };



*/

}

// lancement du jeu
const nouvellePartie = new Jeu;
const genCarte = new Carte;
nouvellePartie.carte = genCarte;
genCarte.genererCarteVierge();
nouvellePartie.ajouterJoueur();
nouvellePartie.ajouterJoueur();
nouvellePartie.placerCasesSpeciales();
nouvellePartie.determinerJoueurActifAleatoire();















