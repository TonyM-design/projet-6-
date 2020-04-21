class Carte {
  constructor() {
    this.nombreColonneTraduit = Jeu.nombreColonneTraduit;
    this.nombreCelluleTraduit = Jeu.nombreCelluleTraduit;
    this.nombreArmes = Jeu.nombreArmes;
    this.nombreCelluleGrise = Jeu.nombreCelluleGrise;
    this.nombreArmesPresentes = '';
    this.nombreCellulesGrisesPresentes = '';
    this.joueur1 = '';
    this.joueur2 = '';
    this.tableauColonnes = [];
  }



  selectionCelluleAleatoire() {
    const positionX = genererAleatoire(0, this.nombreColonneTraduit);
    const positionY = genererAleatoire(0, this.nombreCelluleTraduit);
    return this.tableauColonnes[positionX][positionY];


  }
  
  


  genererCarte() {
    // CREATION TABLEAU DEUX DIMENSIONS STOCKAGE OBJ CELLULEVIDE 
    this.tableauColonnes = new Array(this.nombreColonneTraduit);
    for (let i = 0; i < this.nombreColonneTraduit; i++) {
      this.tableauColonnes[i] = new Array(this.nombreCelluleTraduit);
      for (let j = 0; j < this.nombreCelluleTraduit; j++) {
        this.tableauColonnes[i][j] = new Cellule(i, j, "cellulevide", null);
      }
    }
  }

// IMPORTANT FAIRE UN SYSTEME BASE SUR UNE BOUCLE NOMBREJOUEUR AVEC INCR
  placerCasesSpeciales() {
    //AJOUT DES CASES SPECIALES
    //JOUEUR1
    while (nouvellePartie.premierJoueur == false) {
      const caseJoueur1 = this.selectionCelluleAleatoire();
      if (caseJoueur1.typeCase == "cellulevide") {
        caseJoueur1.typeCase = "joueur1";
        caseJoueur1.contenu = new Joueur;
        console.log(caseJoueur1);
        console.log(caseJoueur1.contenu);
        console.log(caseJoueur1.positionY);
        console.log(caseJoueur1.decrire());
        nouvellePartie.premierJoueur = true;
        

      }
    }

        //JOUEUR2
        while (nouvellePartie.deuxiemeJoueur == false) {
          const celluleInitialeJ2 = this.selectionCelluleAleatoire();
          if (celluleInitialeJ2.typeCase == "cellulevide") {
            celluleInitialeJ2.typeCase = "joueur2";
            this.joueur2 = new Joueur;
            console.log(this.joueur2);
            nouvellePartie.deuxiemeJoueur = true;
            
    
          }
        }


    // ARMES
    const mapTypeArmes = new Map([[0, 'AnneauSimple'],
    [1, 'AnneauEpique'],
    [2, 'BouclierSimple'],
    [3, 'BouclierEpique'],
    [4, 'EpeeSimple'],
    [5, 'EpeeEpique'],
    [6, 'CasqueSimple'],
    [7, 'CasqueEpique'],

    ])



    while (this.nombreArmesPresentes < nouvellePartie.nombreArmes) {
            const celluleAleatoire = this.selectionCelluleAleatoire();
      if (celluleAleatoire.typeCase == "cellulevide") {
        celluleAleatoire.typeCase = mapTypeArmes.get(genererAleatoire(0, 7));
        switch (celluleAleatoire.typeCase) {
          case 'AnneauSimple':
            // créer l'objet AnneauSImple
            const testArme1 = new AnneauSimple();
            console.log(testArme1);
            break;
          case 'AnneauEpique':
            // créer l'objet AnneauEpique
            const testArme2 = new AnneauEpique();
            console.log(testArme2);
            break;
          case 'BouclierSimple':
            // créer l'objet BouclierSimple
            const testArme3 = new BouclierSimple();
            console.log(testArme3);
            break;
          // créer l'objet BouclierEpique
          case 'BouclierEpique':
            const testArme4 = new BouclierEpique();
            console.log(testArme4);
            break;
          case 'EpeeSimple':
            // créer l'objet EpeeSimple
            const testArme5 = new EpeeSimple();
            console.log(testArme5);
            break;
          case 'EpeeEpique':
            // créer l'objet EpeeEpique
            const testArme6 = new EpeeEpique();
            console.log(testArme6);
            break;
          case 'CasqueSimple':
            // créer l'objet CasqueSimple
            const testArme7 = new CasqueSimple();
            console.log(testArme7);
            break;
          case 'CasqueEpique':
            // créer l'objet CasqueEpique
            const testArme8 = new CasqueEpique();
            console.log(testArme8);
            break;

        }

        this.nombreArmesPresentes++;

      }

    }


    // CELLULE GRISE verification nombre et ajout si besoin

    while (this.nombreCellulesGrisesPresentes < nouvellePartie.nombreCellulesGrises) {
      const celluleAleatoire = this.selectionCelluleAleatoire();
      if (celluleAleatoire.typeCase === "cellulevide") {
        celluleAleatoire.typeCase = 'cellulegrise';
        this.nombreCellulesGrisesPresentes++;
      }
    }
  }

  //PLACEMENT DES CELLULES DANS LE TABLE HTML

  placerTableHTML() {
    for (let i = 0; i < this.nombreColonneTraduit; i++) {
      $('#plateaudejeu').append(`<tr class="rangeetablejeu" id="rangee${i}"></tr>`);
      for (let j = 0; j < this.nombreCelluleTraduit; j++) {
        $('#rangee' + i).append(`<td class="${this.tableauColonnes[i][j].typeCase}" id="cellule${i}${j}"></td>`);

      }
    }
  }
}
