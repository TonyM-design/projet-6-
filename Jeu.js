class Jeu {
  constructor() {
    this.nombreJoueurAttendu = 2;
    this.nombreJoueurPresent = 0;
    this.listeJoueurs = [];
    this.fileAttentes = this.listeJoueurs;
    this.joueurActif = null;

    this.nombreArmes = 4;
    this.nombreCellulesGrises = 5;
    this.initialiserParametreJeu();

    this.carte = new Carte(this.nombreColonne, this.nombreCellule, this.nombreArmes, this.nombreCellulesGrises,this.listeJoueurs);
    
  }


  ajouterJoueur(nombreJoueur){ 
    this.nombreJoueurAttendu = nombreJoueur;
    for (let k = 0; k < nombreJoueur; k++) {
        const ajoutJoueur = new Joueur;
        this.listeJoueurs.push(ajoutJoueur);
        ajoutJoueur.numeroJoueur = k;
    }
  }

  

  selectionJoueurAleatoire(){
    const joueurActifAleatoire = genererAleatoire(0, this.nombreJoueurAttendu);
    return this.listeJoueurs[joueurActifAleatoire];
  }


  
  parametrerNombreColonnes() {
    do {
      this.nombreColonne = prompt (Number.parseInt("entrez le nombre de colonne du plateau de jeu (entrez un chiffre) :",10));
      if (this.nombreColonne <= 0 || isNaN(this.nombreColonne)) {
        alert("entrez un chiffre ;) ");
      }
    } while (this.nombreColonne <= 0 || isNaN(this.nombreColonne));
  }



  parametrerNombreCellules() {
    do {
      this.nombreCellule = prompt (Number.parseInt("entrez le nombre de colonne du plateau de jeu (entrez un chiffre) :",10));
      if (this.nombreCellule <= 0 || isNaN(this.nombreCellule)) {
        alert("entrez un chiffre ;) ");
      }
    } while (this.nombreCellule <= 0 || isNaN(this.nombreCellule));
  }

  initialiserParametreJeu() {
    do {
      this.nombreColonne = parametrerNombreColonnes();
      this.nombreCellule = parametrerNombreCellules();
      if (this.nombreJoueurAttendu + this.nombreArmes + this.nombreCellulesGrises > this.nombreColonne * this.nombreCellule) {
        alert("Pas assez de cases disponible sur le plateau de jeu, veuillez entrez de nouveaux paramètres");
      }
      
    } while (this.nombreJoueurAttendu + this.nombreArmes + this.nombreCellulesGrises > this.nombreColonne * this.nombreCellule);
    
  }

  
  appliquerEtatActif(){
    this.joueurActif = this.selectionJoueurAleatoire();
    this.joueurActif.actif = true;
    
  }


  determinerJoueurActifAleatoire(){
  this.selectionJoueurAleatoire();
  this.appliquerEtatActif();
  }

// DEPLACEMENT JOUEUR


// PROBLEME D'UTILISATION DE THIS


// VOIR AVEC DAVID POUR LE PROBLEME DE L'UTILISATION DE THIS, PEUT ETRE $(document) ?
deplacerJoueur() {
      $(document).keydown( (event) => {
        while (this.joueurActif.compteurDeplacement !== 0) {
          if (event.which == 37) {
              if (this.carte.verifierCaseDirection(this.joueurActif.positionX, this.joueurActif.positionY--) == true) {
                this.joueurActif.positionY--;
                this.joueurActif.compteurDeplacement--;
                this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY--].contenu = this.joueurActif;
              }
              else { this.joueurActif.compteurDeplacement = 0 }
          };

          if (event.which == 38) { // fleche haut  code ascii 38
              if (this.verifierCaseDirection(this.joueurActif.positionX--, this.joueurActif.positionY) == true) {
                this.joueurActif.positionX--;
                this.joueurActif.compteurDeplacement--;
              }
              else { this.joueurActif.compteurDeplacement = 0 }
          };

          if (event.which == 39) { // fleche droite  code ascii 39
              if (this.verifierCaseDirection(this.joueurActif.positionX, this.joueurActif.positionY++) == true) {
                this.joueurActif.positionY++;
                this.joueurActif.compteurDeplacement--;
              }
              else { this.joueurActif.compteurDeplacement = 0 }
          };

          if (event.which == 40) { // fleche bas  code ascii 40
              if (this.verifierCaseDirection(this.joueurActif.positionX++, this.joueurActif.positionY) == true) {
                this.joueurActif.positionX++;
                this.joueurActif.compteurDeplacement--;
              }
              else { this.joueurActif.compteurDeplacement = 0 }
          };
        }
      });
    }









  placerCasesSpeciales() {
    
    this.carte.ajouterJoueurCarte(this.listeJoueurs);  
    this.carte.ajouterArmeCarte();
    this.carte.ajouterBlocGrisCarte();
    this.carte.placerTableHTML()

  }

  initialiserJeu() {

    this.ajouterJoueur(2);
    this.carte.genererCarteVierge();
    this.placerCasesSpeciales();

  }

  creerTourParTour() {
    this.determinerJoueurActifAleatoire(); 
    this.carte.ajouterVisuelJoueurActif(this.listeJoueurs);

  }

}


// lancement du jeu
const nouvellePartie = new Jeu;

nouvellePartie.initialiserJeu();
nouvellePartie.creerTourParTour();















