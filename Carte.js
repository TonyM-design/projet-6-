class Carte {
  constructor(nombreColonne, nombreCellule, nombreArmes, nombreCelluleGrise ) {
    this.nombreColonne = nombreColonne; 
    this.nombreCellule = nombreCellule; 
    this.nombreArmes = nombreArmes;
    this.nombreCelluleGrise = nombreCelluleGrise;
    this.nombreArmesPresentes = 0;
    this.nombreCelluleGrisePresente = 0;
    this.tableauColonnes = [];
    this.nombreJoueurPresent = 0;
    this.caseAVerifier= "" ;
  }

  genererCarteVierge() {
    // CREATION TABLEAU DEUX DIMENSIONS STOCKAGE OBJ celluleVide 
    this.tableauColonnes = new Array(this.nombreColonne);
    for (let i = 0; i < this.nombreColonne; i++) {
      this.tableauColonnes[i] = new Array(this.nombreCellule);
      for (let j = 0; j < this.nombreCellule; j++) {
        this.tableauColonnes[i][j] = new Cellule(i, j, "celluleVide", null, true);
      }
    }
  }




  selectionCelluleAleatoire() {
    const positionX = genererAleatoire(0, this.nombreColonne);
    const positionY = genererAleatoire(0, this.nombreCellule);
    return this.tableauColonnes[positionX][positionY];


  }

  // deux fonctions pour verifier l'existence dans tableau colonne de la valeur X ou Y qu'on va modifier pour generer la case adjacente
  // OK
  verifierValeurPositionX(valeurAVerifier){  // valeur a vérifier = positionX ++ , positionX --
    if (this.tableauColonnes[valeurAVerifier] !== undefined){
      return valeurAVerifier;
    }
else {
  if (valeurAVerifier < 0){
    valeurAVerifier ++;
    return valeurAVerifier;
  }
  if (valeurAVerifier > this.tableauColonnes.length){
    valeurAVerifier = this.tableauColonnes.length
    return valeurAVerifier;
  }

}
  }

// OK
  verifierValeurPositionY(valeurAVerifier){  // valeur a vérifier =  position Y++, position Y--
    if (this.tableauColonnes[0][valeurAVerifier] !== undefined){
      return valeurAVerifier;
    }
else {
  if (valeurAVerifier < 0){
    valeurAVerifier ++;
    return valeurAVerifier;
  }
  if (valeurAVerifier > this.tableauColonnes[0].length){
    valeurAVerifier = this.tableauColonnes[0].length
  return valeurAVerifier
  }

}
  } 



// SECTION DEPLACEMENT 

verifierCaseHautDeplacement(caseJoueur){
  if(this.tableauColonnes[caseJoueur.positionX - 1] === undefined ){ 
    console.log("cette case n'existe pas");
    return false;
  }
  else {return true}
 }

 verifierCaseHautTraversable(caseJoueur){
   if(this.verifierCaseHautDeplacement(caseJoueur) === true){
  if(this.tableauColonnes[caseJoueur.positionX - 1][caseJoueur.positionY].traversable === false ) {
    console.log("cette case n'est pas traversable");
    return false;
  }
  else {return true}
 }
}

 

 verifierCaseBasDeplacement(caseJoueur){
 if(this.tableauColonnes[caseJoueur.positionX + 1] === undefined ){ 
  console.log("cette case n'existe pas");
  return false;
}
else {return true}
}

verifierCaseBasTraversable(caseJoueur){
  if(this.verifierCaseBasDeplacement(caseJoueur) === true){
  if(this.tableauColonnes[caseJoueur.positionX + 1][caseJoueur.positionY].traversable === false ) {
    console.log("cette case n'est pas traversable");
    return false;
  }
  else {return true}
  }
}


 verifierCaseDroiteDeplacement(caseJoueur){
  if(this.tableauColonnes[0][caseJoueur.positionY + 1] === undefined ){ 
    console.log("cette case n'existe pas");
    return false;
  }
  else {return true}
}


 verifierCaseDroiteTraversable(caseJoueur){
  if(this.verifierCaseDroiteDeplacement(caseJoueur) === true){
  if(this.tableauColonnes[caseJoueur.positionX][caseJoueur.positionY + 1].traversable === false ) {
    console.log("cette case n'est pas traversable");
    return false;
  }
  else {return true}
 }
 }
 

 verifierCaseGaucheDeplacement(caseJoueur){
  if(this.tableauColonnes[0][caseJoueur.positionY - 1] === undefined ){ 
    console.log("cette case n'existe pas");
    return false;
  }
  else {return true}
 }

 verifierCaseGaucheTraversable(caseJoueur){
  if(this.verifierCaseGaucheDeplacement(caseJoueur) === true){
  if(this.tableauColonnes[caseJoueur.positionX][caseJoueur.positionY - 1].traversable === false ) {
    console.log("cette case n'est pas traversable");
    return false;
  }
  else {return true}
 }
 }
 
 // VERIFICATION CASE APPARITION JOUEUR
 verifierCasesAdjacentes(caseJoueur){
    if(this.tableauColonnes[caseJoueur.positionX - 1] !== undefined && this.tableauColonnes[caseJoueur.positionX - 1][caseJoueur.positionY].typeCase!== "celluleVide" ) {
      return false;
    } else if (this.tableauColonnes[caseJoueur.positionX][caseJoueur.positionY + 1] !== undefined && this.tableauColonnes[caseJoueur.positionX][caseJoueur.positionY + 1].typeCase !== "celluleVide" ) {
     return false;
    } else if (this.tableauColonnes[caseJoueur.positionX + 1] !== undefined && this.tableauColonnes[caseJoueur.positionX + 1][caseJoueur.positionY ].typeCase !== "celluleVide" ) {
     return false;
    } else if (this.tableauColonnes[caseJoueur.positionX][caseJoueur.positionY - 1] !== undefined && this.tableauColonnes[caseJoueur.positionX][caseJoueur.positionY - 1].typeCase !== "celluleVide" ) {
     return false;    
    }
    return true;
   }

  // PLACEMENT DES CASES SPECIALES
ajouterJoueurCarte(listeJoueurs){
  for (var i = 0; i < listeJoueurs.length; i++) {
    while(listeJoueurs[i].presenceValide == false){
        const caseJoueur = this.selectionCelluleAleatoire()   
        if (caseJoueur.typeCase == "celluleVide" && this.verifierCasesAdjacentes(caseJoueur) === true ){ // probleme this.verifierCase
            caseJoueur.typeCase = `joueur${listeJoueurs[i].numeroJoueur}`;
            caseJoueur.contenu = listeJoueurs[i];
            listeJoueurs[i].positionX = caseJoueur.positionX;
            listeJoueurs[i].positionY = caseJoueur.positionY;
            listeJoueurs[i].presenceValide = true;
            caseJoueur.traversable = false;
        }
    };
    }
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
        while (this.nombreArmesPresentes < this.nombreArmes) {  
        const caseArme = this.selectionCelluleAleatoire();
      if (caseArme.typeCase == "celluleVide") {
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
    while (this.nombreCelluleGrisePresente < this.nombreCelluleGrise) {
     const caseBlocGris = this.selectionCelluleAleatoire(); 
        if (caseBlocGris.typeCase === "celluleVide") {
          caseBlocGris.typeCase = 'cellulegrise';
          caseBlocGris.traversable = false; 
          this.nombreCelluleGrisePresente++;
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

rafraichirTableHTML(){

      $($('#plateaudejeu tr td')).remove('td');
      for (let i = 0; i < this.nombreColonne; i++) {
        $('#plateaudejeu').append(`<tr class="rangeetablejeu" id="rangee${i}"></tr>`);
        for (let j = 0; j < this.nombreCellule; j++) {
          $('#rangee' + i).append(`<td class="${this.tableauColonnes[i][j].typeCase}" id="cellule${i}${j}"></td>`);
  
        }
      }
    }
  

    ajouterVisuelJoueurActif2(){
      for ( let i = 0; i<nouvellePartie.fileAttentes.length; i++){
        if (nouvellePartie.fileAttentes[i].actif == true){
        $(`.joueur${i}`).addClass("actif");    
    }
  }

/*
ajouterVisuelJoueurActif(listeJoueurs) { 
for ( let i = 0; i<listeJoueurs.length; i++){
  if (listeJoueurs[i].actif == true)
  $(`.joueur${i}`).addClass("actif");
  console.log(`.joueur${i}`);
}
}

enleverVisuelJoueurActif(listeJoueurs) { 
  for ( let i = 0; i<listeJoueurs.length; i++){
    if (listeJoueurs[i].actif == false)
    $(`.joueur${i+1}`).removeClass("actif");
    console.log(`.joueur${i}`);
  }
  }
*/

}}