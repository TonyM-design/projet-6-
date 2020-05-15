class Carte {
  constructor(nombreColonne, nombreCellule, nombreArmes, nombreCelluleGrise, listeJoueurs ) {
    this.nombreColonne = nombreColonne; 
    this.nombreCellule = nombreCellule; 
    this.nombreArmes = nombreArmes;
    this.nombreCelluleGrise = nombreCelluleGrise;
    this.nombreArmesPresentes = '';
    this.nombreCellulesGrisesPresentes = '';

    this.tableauColonnes = [];
    this.listeJoueurs = listeJoueurs;
  }

  genererCarteVierge() {
    // CREATION TABLEAU DEUX DIMENSIONS STOCKAGE OBJ CELLULEVIDE 
    this.tableauColonnes = new Array(this.nombreColonne);
    for (let i = 0; i < this.nombreColonne; i++) {
      this.tableauColonnes[i] = new Array(this.nombreCellule);
      for (let j = 0; j < this.nombreCellule; j++) {
        this.tableauColonnes[i][j] = new Cellule(i, j, "cellulevide", null, true);
      }
    }
  }

 ajouterVisuelJoueurActif() { 
   this.listeJoueurs.forEach(function(listeJoueur){
     if (listeJoueur.actif == true && listeJoueur.numeroJoueur == 1){
      $(".joueur1").addClass("actif");
      $(".joueur2").removeClass("actif");
     }

     else { $(".joueur2").addClass("actif");
     $(".joueur1").removeClass("actif"); }

   })

 }


  selectionCelluleAleatoire() {
    const positionX = genererAleatoire(0, this.nombreColonne);
    const positionY = genererAleatoire(0, this.nombreCellule);
    return this.tableauColonnes[positionX][positionY];


  }

  // PLACEMENT DES CASES SPECIALES
// boucler l'affichage la verification de la présence
ajouterJoueurCarte(){
this.listeJoueurs.forEach(function(listeJoueur){  
  const caseJoueur = nouvellePartie.carte.selectionCelluleAleatoire();
  if (caseJoueur.typeCase == "cellulevide"){
  caseJoueur.typeCase = `joueur${listeJoueur.numeroJoueur}`;
  caseJoueur.contenu = listeJoueur;
listeJoueur.positionX = caseJoueur.positionX;
listeJoueur.positionY = caseJoueur.positionY;
}
}
);
}

    

ajouterArmeCarte(){

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
    }
    


ajouterBlocGrisCarte() {          
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
    for (let i = 0; i < this.nombreColonne; i++) {
      $('#plateaudejeu').append(`<tr class="rangeetablejeu" id="rangee${i}"></tr>`);
      for (let j = 0; j < this.nombreCellule; j++) {
        $('#rangee' + i).append(`<td class="${this.tableauColonnes[i][j].typeCase}" id="cellule${i}${j}"></td>`);

      }
    }
  }

}


