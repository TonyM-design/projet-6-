class Jeu {
  constructor() {

    // PARAMETRE COLONNE / CELLULE
    do {
      this.nombreColonne = parametrerNombreColonnes();
      this.nombreCellule = parametrerNombreCellules();
      if (this.nombreJoueurs + this.nombreArmes + this.nombreCellulesGrises > this.nombreColonneTraduit * this.nombreCelluleTraduit) {
        alert("Pas assez de cases disponible sur le plateau de jeu, veuillez entrez de nouveaux paramètres");
      }
    } while (this.nombreJoueurs + this.nombreArmes + this.nombreCellulesGrises > this.nombreColonneTraduit * this.nombreCelluleTraduit);

    this.nombreColonneTraduit = "";
    this.nombreCelluleTraduit = "";
    this.nombreJoueur = 1;
    this.premierJoueur = false;
    this.deuxiemeJoueur = false;
    this.nombreArmes = 30;
    this.nombreCellulesGrises = 15;
    this.carte = "";

  }





}

// lancement du jeu
const nouvellePartie = new Jeu;
const genCarte = new Carte;
nouvellePartie.carte = genCarte;
genCarte.genererCarte();
genCarte.placerCasesSpeciales();
genCarte.placerTableHTML();






