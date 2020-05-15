class Jeu {
  constructor() {
    this.nombreJoueurAttendu = 0;
    this.nombreJoueurPresent = 0;
    this.joueur1 = null;
    this.joueur2 = null;
    this.listeJoueurs = [];
    this.joueurActif = null;

    this.nombreArmes = 30;
    this.nombreCellulesGrises = 15;
    this.initialiserParametreJeu();

    this.carte = new Carte(this.nombreColonne, this.nombreCellule, this.nombreArmes, this.nombreCellulesGrises,this.listeJoueurs);
    
  }


  ajouterJoueur(nombreJoueur){ 
    this.nombreJoueurAttendu = nombreJoueur;
    for (let k = 0; k < nombreJoueur; k++) {
      if (this.listeJoueurs.length === 0) {
        const ajoutJoueur = new Joueur;
        this.joueur1 = ajoutJoueur;
        this.listeJoueurs.push(ajoutJoueur);
        ajoutJoueur.numeroJoueur = this.listeJoueurs.length;
      }
  
      else {
        const ajoutJoueur = new Joueur;
        this.joueur2 = ajoutJoueur;
        this.listeJoueurs.push(ajoutJoueur);
        ajoutJoueur.numeroJoueur = this.listeJoueurs.length;
        
  
      }
    }
  }


  selectionJoueurAleatoire(){
    const joueurActifAleatoire = genererAleatoire(1, this.nombreJoueurPresent);
    return this.listeJoueurs[joueurActifAleatoire];
  }

  appliquerEtatActif(){
    this.joueurActif = this.selectionJoueurAleatoire();
    this.joueurActif.actif = true;
    
  }


  determinerJoueurActifAleatoire(){
  this.selectionJoueurAleatoire();
  this.appliquerEtatActif();
  this.carte.ajouterVisuelJoueurActif();
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

  


/*

  ajouterJoueur() {
    for (let k = this.nombreJoueurPresent; k < this.nombreJoueurAttendu; k++) {
      if (this.joueur1 === null && this.joueur2 === null) {
        const ajoutJoueur = new Joueur
        ajoutJoueur.numeroJoueur = 1;
        this.joueur1 = ajoutJoueur;
        this.listeJoueurs.push(ajoutJoueur);
      }

      else {
        const ajoutJoueur2 = new Joueur;
        this.joueur2 = ajoutJoueur2;
        ajoutJoueur2.numeroJoueur = 2;
        this.listeJoueurs.push(ajoutJoueur2);

      }
    }
  }
*/

/*

  determinerJoueurActifAleatoire() {
    const joueurActifAleatoire = genererAleatoire(1, 3);
    if (joueurActifAleatoire == 1) {
      this.joueurActif = this.joueur1;
      this.joueurActif.actif = true;
   //   $(".joueur1").addClass("actif"); placer dans carte utiliser num joueur



    }
    else {
    this.joueurActif = this.joueur2;
      this.joueurActif.actif = true;
     // $(".joueur2").addClass("actif"); placer dans carte num joueur
    }

  }
*/


  placerCasesSpeciales() {
    
    this.carte.ajouterJoueurCarte(); // ajouter en parametre ajouter liste joueur 
    this.carte.ajouterArmeCarte();
    this.carte.ajouterBlocGrisCarte();
    this.carte.placerTableHTML()

  }

  initialiserJeu() {

    this.ajouterJoueur(2);
    this.carte.genererCarteVierge();
    this.placerCasesSpeciales();
    this.determinerJoueurActifAleatoire(); 
  }



/*
  deplacerJoueur() {

    $(document).keydown(function (event) {
      if (event.which == 37) { // fleche gauche  code ascii 37
        // position initiale devient une cellule vide
        // nouvelle position devient cellule joueur actif 

        const ancienneCase = nouvellePartie.carte.tableauColonnes[nouvellePartie.joueurActif.positionX--][nouvellePartie.joueurActif.positionY];
        nouvellePartie.joueurActif.positionY--;


        $('.actif').replaceWith(ancienneCase.contenu);

        alert("test");
      };

      if (event.which == 38) { // fleche haut  code ascii 38

        nouvellePartie.joueurActif.positionX--;
        alert("test");
      };

      if (event.which == 39) { // fleche droite  code ascii 39

        nouvellePartie.joueurActif.positionY++;
        alert("test");
      };

      if (event.which == 40) { // fleche bas  code ascii 40

        nouvellePartie.joueurActif.positionX++;
        alert("test");
      };

    });
  };

*/
}

// lancement du jeu
const nouvellePartie = new Jeu;

nouvellePartie.initialiserJeu();















