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
        this.tableauColonnes[i][j] = new Cellule(i, j, "cellulevide", null, true);
      }
    }
  }

  placerCasesSpeciales() {
    //AJOUT DES CASES SPECIALES
    //JOUEUR1
    while (nouvellePartie.premierJoueur == false) {
      const caseJoueur1 = this.selectionCelluleAleatoire();
      if (caseJoueur1.typeCase == "cellulevide") {
        caseJoueur1.typeCase = "joueur1";
        caseJoueur1.contenu = new Joueur;
        nouvellePartie.nombreJoueur++;
        nouvellePartie.premierJoueur = true;
        
        console.log(caseJoueur1);
        console.log(caseJoueur1.contenu);
        console.log(caseJoueur1.positionY);
        console.log(caseJoueur1.decrire());
        
        

      }
    }

        //JOUEUR2
        while (nouvellePartie.deuxiemeJoueur == false) {
          const caseJoueur2 = this.selectionCelluleAleatoire();
          if (caseJoueur2.typeCase == "cellulevide") {
            caseJoueur2.typeCase = "joueur2";
            caseJoueur2.contenu = new Joueur;
            nouvellePartie.nombreJoueur++;
            nouvellePartie.deuxiemeJoueur = true;

            console.log(caseJoueur2);
            console.log(caseJoueur2.contenu);
            console.log(caseJoueur2.positionY);
            console.log(caseJoueur2.decrire());
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
            const caseArme = this.selectionCelluleAleatoire();
      if (caseArme.typeCase == "cellulevide") {
        caseArme.typeCase = mapTypeArmes.get(genererAleatoire(0, 7));
        switch (caseArme.typeCase) {
          case 'AnneauSimple':
            // créer l'objet AnneauSImple
            caseArme.contenu = new AnneauSimple();
            console.log(caseArme.contenu);
            break;
          case 'AnneauEpique':
            // créer l'objet AnneauEpique
            caseArme.contenu = new AnneauEpique();
            console.log(caseArme.contenu);
            break;
          case 'BouclierSimple':
            // créer l'objet BouclierSimple
            caseArme.contenu = new BouclierSimple();
            console.log(caseArme.contenu);
            break;
          // créer l'objet BouclierEpique
          case 'BouclierEpique':
            caseArme.contenu = new BouclierEpique();
            console.log(caseArme.contenu);
            break;
          case 'EpeeSimple':
            // créer l'objet EpeeSimple
             caseArme.contenu = new EpeeSimple();
            console.log(caseArme.contenu);
            break;
          case 'EpeeEpique':
            // créer l'objet EpeeEpique
            caseArme.contenu = new EpeeEpique();
            console.log(caseArme.contenu);
            break;
          case 'CasqueSimple':
            // créer l'objet CasqueSimple
            caseArme.contenu = new CasqueSimple();
            console.log(caseArme.contenu);
            break;
          case 'CasqueEpique':
            // créer l'objet CasqueEpique
            caseArme.contenu = new CasqueEpique();
            console.log(caseArme.contenu);
            break;

        }

        this.nombreArmesPresentes++;

      }

    }


    // CELLULE GRISE verification nombre et ajout si besoin

    while (this.nombreCellulesGrisesPresentes < nouvellePartie.nombreCellulesGrises) {
      const caseBlocGris = this.selectionCelluleAleatoire();
      if (caseBlocGris.typeCase === "cellulevide") {
        caseBlocGris.typeCase = 'cellulegrise';
        caseBlocGris.traversable = false; 
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
