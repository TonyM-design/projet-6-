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
    // CREATION TABLEAU DEUX DIMENSIONS STOCKAGE OBJ CELLULEVIDE 
    this.tableauColonnes = new Array(this.nombreColonne);
    for (let i = 0; i < this.nombreColonne; i++) {
      this.tableauColonnes[i] = new Array(this.nombreCellule);
      for (let j = 0; j < this.nombreCellule; j++) {
        this.tableauColonnes[i][j] = new Cellule(i, j, "cellulevide", null, true);
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


/*
  // fonction pour determiner les cases adjacentes en utilisant verifierValeurPosition pour s'assurer que la valeur modifiee existe dans tableauColonnes
  // FONCTIONNE PAS 

  verifierCaseAdjacenteHaut(caseJoueurpositionX){ // caseJoueur.positionX

    if (this.tableauColonnes[caseJoueurpositionX + 1] === undefined){
      return this.verifierValeurPositionX(caseJoueurpositionX + 1);
    }
    else {
      return caseJoueurpositionX + 1
    }
  }

  verifierCaseAdjacenteBas(caseJoueurpositionX){ // caseJoueur.positionX

    if (this.tableauColonnes[caseJoueurpositionX - 1] === undefined){
      return this.verifierValeurPositionX(caseJoueurpositionX - 1)
    }
    else {
      return caseJoueurpositionX - 1
    }
  }

  verifierCaseAdjacenteDroite(caseJoueurpositionY){

    if (this.tableauColonnes[0][caseJoueurpositionY + 1] === undefined){
      return this.verifierValeurPositionY(caseJoueurpositionY + 1)
    }
    else {
      return caseJoueurpositionY + 1
    }
  }

  verifierCaseAdjacenteGauche(caseJoueurpositionY){

    if (this.tableauColonnes[0][caseJoueurpositionY - 1] === undefined){
      return this.verifierValeurPositionY(caseJoueurpositionY - 1)
    }
    else {
      return caseJoueurpositionY - 1
    }
  }


  verifierExistenceCasesAdjacentes(caseJoueur){
  
    if (this.verifierCaseAdjacenteHaut(caseJoueur.positionX) !== undefined && verifierCaseAdjacenteBas(caseJoueur.positionX) !== undefined && verifierCaseAdjacenteDroite(caseJoueur.positionY) !== undefined  &&   verifierCaseAdjacenteGauche(caseJoueur.positionY) !== undefined){
      return true
    }
  }
  

  verifierCaseAdjacente(caseJoueur){
    // haut
    const verifierCaseHaut = this.tableauColonnes[this.verifierValeurPositionX(caseJoueur.positionX + 1)];
    const caseHaut = this.tableauColonnes[verifierCaseHaut][caseJoueur.positionY];
    // bas
    const verifierCaseBas = this.tableauColonnes[this.verifierValeurPositionX(caseJoueur.positionX - 1)];
    const caseBas = this.tableauColonnes[verifierCaseBas][caseJoueur.positionY];
    //droite
    const verifierCaseDroite = this.tableauColonnes[0][this.verifierValeurPositionY(caseJoueur.positionY + 1)];
    const caseDroite = this.tableaucolonnes[caseJoueur.positionX][verifierCaseDroite];
    // gauche
    const verifierCaseGauche = this.tableauColonnes[0][this.verifierValeurPositionY(caseJoueur.positionY - 1)];
    const caseGauche = this.tableaucolonnes[caseJoueur.positionX][verifierCaseGauche];


    if (caseHaut.typeCase === "celluleVide " && caseBas.typeCase === "celluleVide" && caseDroite.typeCase === "celluleVide" && caseGauche.typeCase === "celluleVide" ){
      return true;
    }


  }
*/

// fais avec David mais non fonctionnel
verifierCase(caseJoueur){
 if(this.tableauColonnes[caseJoueur.positionX - 1] === undefined || this.tableauColonnes[caseJoueur.positionX - 1][caseJoueur.positionY].typeCase !== "celluleVide" ) {
   return false;

 } else if (this.tableauColonnes[caseJoueur.positionX][caseJoueur.positionY + 1].typeCase !== "celluleVide" ) {
  return false
   
 } else if (this.tableauColonnes[caseJoueur.positionX + 1] === undefined ||this.tableauColonnes[caseJoueur.positionX + 1][caseJoueur.positionY ].typeCase !== "celluleVide" ) {
  return false

 } else if (this.tableauColonnes[caseJoueur.positionX][caseJoueur.positionY - 1].typeCase !== "celluleVide" ) {
  return false
   
 }
 return true
}

// version decompose en ss fonctions
verifierCaseHaut(caseJoueur){
  if(this.tableauColonnes[caseJoueur.positionX - 1] === undefined ){ 
    return false;
  }
  else if(this.tableauColonnes[caseJoueur.positionX - 1][caseJoueur.positionY].typeCase !== "celluleVide" ) {
    return true;
  }
 }

 verifierCaseBas(caseJoueur){
  if(this.tableauColonnes[caseJoueur.positionX + 1] === undefined ){ 
    return false;
  }
  else if(this.tableauColonnes[caseJoueur.positionX + 1][caseJoueur.positionY].typeCase !== "celluleVide" ) {
    return true;
  }
 }

 verifierCaseDroite(caseJoueur){
  if(this.tableauColonnes[0][caseJoueur.positionX + 1] === undefined ){ 
    return false;
  }
  else if(this.tableauColonnes[caseJoueur.positionX][caseJoueur.positionY + 1].typeCase !== "celluleVide" ) {
    return true;
  }
 }

 verifierCaseGauche(caseJoueur){
  if(this.tableauColonnes[0][caseJoueur.positionX - 1] === undefined ){ 
    return false;
  }
  else if(this.tableauColonnes[caseJoueur.positionX][caseJoueur.positionY - 1].typeCase !== "celluleVide" ) {
    return true;
  }
 }

 verifierCasesAdjacentes(caseJoueur){
   if (this.verifierCaseHaut(caseJoueur) === true && this.verifierCaseBas(caseJoueur) === true && this.verifierCaseDroite(caseJoueur) === true && this.verifierCaseGauche(caseJoueur) === true){
   return true; 
}
else {
  return false;
}
 }

  // PLACEMENT DES CASES SPECIALES
// boucler l'affichage la verification de la présence
ajouterJoueurCarte(listeJoueurs){
  for (var i = 0; i < listeJoueurs.length; i++) {
    while(listeJoueurs[i].presenceValide == false){
        const caseJoueur = this.selectionCelluleAleatoire()   
        if (caseJoueur.typeCase == "cellulevide" && this.verifierCasesAdjacentes(caseJoueur) === true ){ // probleme this.verifierCase
            caseJoueur.typeCase = `joueur${listeJoueurs[i].numeroJoueur}`;
            caseJoueur.contenu = listeJoueurs[i];
            listeJoueurs[i].positionX = caseJoueur.positionX;
            listeJoueurs[i].positionY = caseJoueur.positionY;
            listeJoueurs[i].presenceValide = true;
            listeJoueurs[i].traversable = false;
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
    while (this.nombreCelluleGrisePresente < this.nombreCelluleGrise) {
     const caseBlocGris = this.selectionCelluleAleatoire(); 
        if (caseBlocGris.typeCase === "cellulevide") {
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


}