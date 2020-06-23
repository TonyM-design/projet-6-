class Jeu {
  constructor() {
    this.nombreJoueurAttendu = 2;
    this.nombreJoueurPresent = 0;
    this.listeJoueurs = [];
    this.fileAttentes = this.listeJoueurs;
    this.joueurActif = null;
    this.nombreArmes = 15;
    this.nombreCellulesGrises = 5;
    this.initialiserParametreJeu();

    this.carte = new Carte(this.nombreColonne, this.nombreCellule, this.nombreArmes, this.nombreCellulesGrises, this.listeJoueurs);

  }




  ajouterJoueur(nombreJoueur) {
    this.nombreJoueurAttendu = nombreJoueur;
    for (let k = 0; k < nombreJoueur; k++) {
      const ajoutJoueur = new Joueur;
      this.listeJoueurs.push(ajoutJoueur);
      ajoutJoueur.numeroJoueur = k;
    }
  }






  parametrerNombreColonnes() {
    do {
      this.nombreColonne = prompt(Number.parseInt("entrez le nombre de colonne du plateau de jeu (entrez un chiffre) :", 10));
      if (this.nombreColonne <= 0 || isNaN(this.nombreColonne)) {
        alert("entrez un chiffre ;) ");
      }
    } while (this.nombreColonne <= 0 || isNaN(this.nombreColonne));
  }



  parametrerNombreCellules() {
    do {
      this.nombreCellule = prompt(Number.parseInt("entrez le nombre de colonne du plateau de jeu (entrez un chiffre) :", 10));
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






  // TOUR PAR TOUR ET FILE ATTENTE

  // tour par tour 

  determinerJoueurActif() {
    this.joueurActif = this.fileAttentes[0]; // le joueur actif est le premier element du tableau this.fileAttente
    this.joueurActif.actif = true;
    return this.joueurActif;
  }


  changerJoueurActif() {
    this.joueurActif.actif = false;
    const joueurActifSuivant = this.fileAttentes[1]; // on choisit le joueur ayant l'indice suivant du joueurActif donc 1
    joueurActifSuivant.actif = true; // valide etat actif
    this.fileAttentes.unshift(joueurActifSuivant); // on instance le joueur suivant et place en indice 0
        // on supprime instance initiale
    const cloneSupprimer = this.fileAttentes.indexOf(joueurActifSuivant, 1);
    this.fileAttentes.splice(this.fileAttentes.indexOf(cloneSupprimer, 2), 1);
    console.log(this.fileAttentes)
    return this.fileAttentes;

  }

  actualiserOrdreFileAttente(){
     // on supprime instance initiale
     const cloneSupprimer = this.fileAttentes.indexOf(this.fileAttentes[0], 1);
     this.fileAttentes.splice(cloneSupprimer, 1);
     console.log(this.fileAttentes);
     return this.fileAttentes;
  }

  choisirJoueurActifDepartAleatoire() {
    const joueurActifDepartAleatoire = this.fileAttentes[genererAleatoire(0, this.fileAttentes.length )]; // on choisit un joueur aleatoire dans la liste
    joueurActifDepartAleatoire.actif = true; // applique etat actif = true
    const cloneJoueur = joueurActifDepartAleatoire; // on instance le joueur
    console.log(this.fileAttentes);
    this.fileAttentes.unshift(cloneJoueur);//  on place une instance du joueur suivant en haut du tableau 
    console.log(this.fileAttentes);
    return this.fileAttentes;
  }

// tour par tour fonctionne 


// GESTION ARME
  recupererArme(caseAdjacenteChoixJoueurActif) {
      this.joueurActif.equipements.unshift(caseAdjacenteChoixJoueurActif.contenu);
    }
    
  

  deposerArme() { // A RETRAVAILLER
     if (this.joueurActif.equipements.length === 2) {
       this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY].contenu = this.joueurActif.equipements[1]; 
       this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY].typeCase = `${this.joueurActif.equipements[1].nom}`;
       this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY].traversable = true;
       console.log("test propriete deposerArme");

return true
     }  
  }



majEquipements2 (){
  if (this.deposerArme() === true){  
    console.log("test propriete majEquipement");
 this.joueurActif.equipements.pop();
 this.carte.rafraichirTableHTML();
}}



  // DEPLACEMENT JOUEUR
  verifierSiChangementJoueur(){
    if (this.joueurActif.compteurDeplacement === 0){
      console.log("verifierSiChangementJoueur test compteur deplacement = 0")
      this.changerJoueurActif();
      return true;
    }
  }


  deplacerJoueur() {
    $(document).keydown((event) => {
     if(this.verifierSiChangementJoueur() === true){
console.log ("changement de joueur")
       this.joueurActif.compteurDeplacement = 3;
       this.joueurActif.directionDeplacement = null;
     };
     this.determinerJoueurActif();
     console.log ("doit apparaitre a chaque appuie de touche ")
      while (this.joueurActif.compteurDeplacement !== 0) { // a supprimer !
        this.carte.rafraichirTableHTML();

        // fleche gauche code ascii 37
        if (event.which == 37) { 
          if ((this.carte.verifierCaseGaucheDeplacement(this.joueurActif) === true) && (this.joueurActif.directionDeplacement === null || this.joueurActif.directionDeplacement === "gauche") && (this.joueurActif.compteurDeplacement !== 0) && this.carte.verifierCaseGaucheTraversable(this.joueurActif) === true ) {
              console.log("test gauche valide");
              // RECUPERATION ARME
              if (this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY - 1].typeCase !== "celluleVide" ) { // si cette case valide est une arme 
              this.recupererArme(this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY - 1]);
              }
              if (this.joueurActif.equipements.length === 1) {
                this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY].contenu = null;
                this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY].typeCase = "celluleVide";
                this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY].traversable = true;
              }

              this.majEquipements2();
              




              this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY - 1].contenu = this.joueurActif;
              this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY - 1].typeCase = `joueur${this.joueurActif.numeroJoueur}`;
              this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY - 1].traversable = false;
// MODIFICATION A EFFECTUE
              this.joueurActif.positionY--;
              this.joueurActif.compteurDeplacement--;
              this.joueurActif.directionDeplacement = "gauche";
              this.carte.rafraichirTableHTML();
              //this.carte.ajouterVisuelJoueurActif(this.fileAttentes);

              break;

            }
            // 1er tour de chaque joueur, droit a erreur de direction
            else if (this.carte.verifierCaseGaucheDeplacement(this.joueurActif) !== true && this.joueurActif.compteurDeplacement === 3 ){
              console.log("cette case n'existe pas");
              this.joueurActif.directionDeplacement = null;
              break;
            }
            else if (this.carte.verifierCaseGaucheTraversable(this.joueurActif) !== true && this.joueurActif.compteurDeplacement === 3 &&this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY - 1].typeCase === "cellulegrise" ){
              console.log("cette case n'est pas traversable");
              this.joueurActif.directionDeplacement = null;
              break;
            }


            // presence d'un joueur sur la case adjacente -> demarrer phase de combat automatique
            else if (this.carte.verifierCaseGaucheDeplacement(this.joueurActif) === true && this.carte.verifierCaseGaucheTraversable(this.joueurActif) !== true && this.carte.tableauColonnes[this.joueurActif.positionX ][this.joueurActif.positionY - 1].typeCase !== "cellulegrise"){
              console.log("Un joueur est present sur la case, debut phase de combat");
              this.joueurActif.directionDeplacement = null;
              this.joueurActif.compteurDeplacement = 0;
              break;
            }
            // occurence d'un obstacle ou case inexistante pendant le deplacement 
            else if(this.joueurActif.compteurDeplacement <= 2 && (this.carte.verifierCaseGaucheDeplacement(this.joueurActif) !== true || this.carte.verifierCaseGaucheTraversable(this.joueurActif) !== true) ){
              this.joueurActif.compteurDeplacement = 0;
              console.log("aucune case disponible au deplacement sur le même axe, fin du deplacement")
              break;
            }   
            // occurence d'un changement de direction pendant le deplacement
            else if (this.joueurActif.directionDeplacement !== null || this.joueurActif.directionDeplacement !== "gauche") {
              console.log("deplacement autorisé uniquement sur le même axe");
              break;
            }
        }


        // fleche haut  code ascii 38
        if (event.which == 38) {
            if ((this.joueurActif.directionDeplacement === null || this.joueurActif.directionDeplacement === "haut") &&(this.carte.verifierCaseHautDeplacement(this.joueurActif) === true) &&(this.joueurActif.compteurDeplacement !== 0) && this.carte.verifierCaseHautTraversable(this.joueurActif) === true ) {
              console.log("test haut valide");
              // RECUPERATION ARME
              if (this.carte.tableauColonnes[this.joueurActif.positionX - 1][this.joueurActif.positionY].typeCase !== "celluleVide" && this.carte.verifierCaseHautTraversable(this.joueurActif) === true) { // si cette case valide est une arme 
                this.recupererArme(this.carte.tableauColonnes[this.joueurActif.positionX - 1][this.joueurActif.positionY]);
                }


                if (this.joueurActif.equipements.length === 1) {
                this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY].contenu = null;
                this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY].typeCase = "celluleVide";
                this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY].traversable = true;
              }
              this.majEquipements2();
              this.carte.tableauColonnes[this.joueurActif.positionX - 1][this.joueurActif.positionY].contenu = this.joueurActif;
              this.carte.tableauColonnes[this.joueurActif.positionX - 1][this.joueurActif.positionY].typeCase = `joueur${this.joueurActif.numeroJoueur}`;
              this.carte.tableauColonnes[this.joueurActif.positionX - 1][this.joueurActif.positionY].traversable = false;

              this.joueurActif.positionX--
              this.joueurActif.compteurDeplacement--;
              this.joueurActif.directionDeplacement = "haut";
              this.carte.rafraichirTableHTML();
              //this.carte.ajouterVisuelJoueurActif(this.fileAttentes);

              break;

            }
            // 1er tour de chaque joueur, droit a erreur de direction
            else if (this.carte.verifierCaseHautDeplacement(this.joueurActif) !== true && this.joueurActif.compteurDeplacement === 3 ){
              console.log("cette case n'existe pas");
              this.joueurActif.directionDeplacement = null;
              break;
            }
            else if (this.carte.verifierCaseHautTraversable(this.joueurActif) !== true && this.joueurActif.compteurDeplacement === 3&& this.carte.tableauColonnes[this.joueurActif.positionX - 1][this.joueurActif.positionY].typeCase === "cellulegrise" ){
              console.log("cette case n'est pas traversable");
              this.joueurActif.directionDeplacement = null;
              break;
            }


            // presence d'un joueur sur la case adjacente -> demarrer phase de combat automatique
            else if (this.carte.verifierCaseHautDeplacement(this.joueurActif) === true && this.carte.verifierCaseHautTraversable(this.joueurActif) !== true && this.carte.tableauColonnes[this.joueurActif.positionX - 1][this.joueurActif.positionY].typeCase !== "cellulegrise"){
              console.log("Un joueur est present sur la case, debut phase de combat");
              this.joueurActif.directionDeplacement = null;
              this.joueurActif.compteurDeplacement = 0;
              break;
            }
            // occurence d'un obstacle ou case inexistante pendant le deplacement 
            else if(this.joueurActif.compteurDeplacement <= 2 && (this.carte.verifierCaseHautDeplacement(this.joueurActif) !== true || this.carte.verifierCaseHautTraversable(this.joueurActif) !== true) ){
              this.joueurActif.compteurDeplacement = 0;
              console.log("aucune case disponible au deplacement sur le même axe, fin du deplacement")
              break;
            }   
            // occurence d'un changement de direction pendant le deplacement
            else if (this.joueurActif.directionDeplacement !== null || this.joueurActif.directionDeplacement !== "haut") {
              console.log("deplacement autorisé uniquement sur le même axe");
              break;
            }
        }




        if (event.which == 39) { // fleche droite  code ascii 39
          
            if ((this.joueurActif.directionDeplacement === null || this.joueurActif.directionDeplacement === "droite") && (this.carte.verifierCaseDroiteDeplacement(this.joueurActif) === true)&&(this.joueurActif.compteurDeplacement !== 0) && this.carte.verifierCaseDroiteTraversable(this.joueurActif) === true) {
              console.log("test droite valide");
              // RECUPERATION ARME
              if (this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY + 1].typeCase !== "celluleVide" && this.carte.verifierCaseDroiteTraversable(this.joueurActif) === true) { // si cette case valide est une arme 
              this.recupererArme(this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY + 1]);
              }


              if (this.joueurActif.equipements.length === 1) {
                this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY].contenu = null;
                this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY].typeCase = "celluleVide";
                this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY].traversable = true

              }

              this.majEquipements2();

              this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY + 1].contenu = this.joueurActif;
              this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY + 1].typeCase = `joueur${this.joueurActif.numeroJoueur}`;
              this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY + 1].traversable = false;


              this.joueurActif.positionY++
              this.joueurActif.compteurDeplacement--;
              this.joueurActif.directionDeplacement = "droite";
              this.carte.rafraichirTableHTML();
              //this.carte.ajouterVisuelJoueurActif(this.fileAttentes);

              break;

            }
            // 1er tour de chaque joueur, droit a erreur de direction
            else if (this.carte.verifierCaseDroiteDeplacement(this.joueurActif) !== true && this.joueurActif.compteurDeplacement === 3 ){
              console.log("cette case n'existe pas");
              this.joueurActif.directionDeplacement = null;
              break;
            }
            else if (this.carte.verifierCaseDroiteTraversable(this.joueurActif) !== true && this.joueurActif.compteurDeplacement === 3 && this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY + 1].typeCase ==="cellulegrise" ){
              console.log("cette case n'est pas traversable");
              this.joueurActif.directionDeplacement = null;
              break;
            }


            // presence d'un joueur sur la case adjacente -> demarrer phase de combat automatique
            else if (this.carte.verifierCaseDroiteDeplacement(this.joueurActif) === true && this.carte.verifierCaseDroiteTraversable(this.joueurActif) !== true && this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY + 1].typeCase !== "cellulegrise"){
              console.log("Un joueur est present sur la case, debut phase de combat");
              this.joueurActif.directionDeplacement = null;
              this.joueurActif.compteurDeplacement = 0;
              break;
            }
            // occurence d'un obstacle ou case inexistante pendant le deplacement 
            else if(this.joueurActif.compteurDeplacement <= 2 && (this.carte.verifierCaseDroiteDeplacement(this.joueurActif) !== true || this.carte.verifierCaseDroiteTraversable(this.joueurActif) !== true) ){
              this.joueurActif.compteurDeplacement = 0;
              console.log("aucune case disponible au deplacement sur le même axe, fin du deplacement")
              break;
            }   
            // occurence d'un changement de direction pendant le deplacement
            else if (this.joueurActif.directionDeplacement !== null || this.joueurActif.directionDeplacement !== "droite") {
              console.log("deplacement autorisé uniquement sur le même axe");
              break;
            }
        }



        if (event.which == 40) { // fleche bas  code ascii 40
          
            if ((this.joueurActif.directionDeplacement === null || this.joueurActif.directionDeplacement === "bas") && (this.carte.verifierCaseBasDeplacement(this.joueurActif) === true) && (this.joueurActif.compteurDeplacement !== 0) && this.carte.verifierCaseBasTraversable(this.joueurActif) === true) {
              console.log("verification compteur deplacement ")
              
              console.log("test bas valide");
              // RECUPERATION ARME
              if (this.carte.tableauColonnes[this.joueurActif.positionX + 1][this.joueurActif.positionY].typeCase !== "celluleVide" && this.carte.verifierCaseBasTraversable(this.joueurActif) === true) { // si cette case valide est une arme 
                this.recupererArme(this.carte.tableauColonnes[this.joueurActif.positionX + 1][this.joueurActif.positionY]);
                }



                if (this.joueurActif.equipements.length === 1) {
                this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY].contenu = null;
                this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY].typeCase = "celluleVide";
                this.carte.tableauColonnes[this.joueurActif.positionX][this.joueurActif.positionY].traversable = true;
              }

              this.majEquipements2();
              this.carte.tableauColonnes[this.joueurActif.positionX + 1][this.joueurActif.positionY].contenu = this.joueurActif;
              this.carte.tableauColonnes[this.joueurActif.positionX + 1][this.joueurActif.positionY].typeCase = `joueur${this.joueurActif.numeroJoueur}`;
              this.carte.tableauColonnes[this.joueurActif.positionX + 1][this.joueurActif.positionY].traversable = false;



              this.joueurActif.positionX++
              this.joueurActif.compteurDeplacement--;
              this.joueurActif.directionDeplacement = "bas";
              this.carte.rafraichirTableHTML();
              //this.carte.ajouterVisuelJoueurActif(this.fileAttentes);

              break;

            }
            // 1er tour de chaque joueur, droit a erreur de direction
            else if (this.carte.verifierCaseBasDeplacement(this.joueurActif) !== true && this.joueurActif.compteurDeplacement === 3 ){
              console.log("cette case n'existe pas");
              this.joueurActif.directionDeplacement = null;
              break;
            }
            else if (this.carte.verifierCaseBasTraversable(this.joueurActif) !== true && this.joueurActif.compteurDeplacement === 3 && this.carte.tableauColonnes[this.joueurActif.positionX + 1][this.joueurActif.positionY].typeCase === "cellulegrise" ){
              console.log("cette case n'est pas traversable");
              this.joueurActif.directionDeplacement = null;
              break;
            }


            // occurence d'un joueur sur la case adjacente -> demarrer phase de combat automatique
            else if (this.carte.verifierCaseBasDeplacement(this.joueurActif) === true && this.carte.verifierCaseBasTraversable(this.joueurActif) !== true && this.carte.tableauColonnes[this.joueurActif.positionX + 1][this.joueurActif.positionY].typeCase !== "cellulegrise"){
              console.log("Un joueur est present sur la case, debut phase de combat");
              this.joueurActif.directionDeplacement = null;
              this.joueurActif.compteurDeplacement = 0;
              break;
            }
            // occurence d'un obstacle ou case inexistante pendant le deplacement 
            else if(this.joueurActif.compteurDeplacement <= 2 && (this.carte.verifierCaseBasDeplacement(this.joueurActif) !== true || this.carte.verifierCaseBasTraversable(this.joueurActif) !== true) ){
              this.joueurActif.compteurDeplacement = 0;
              console.log("aucune case disponible au deplacement sur le même axe, fin du deplacement")
              break;
            }   
            // occurence d'un changement de direction pendant le deplacement
            else if (this.joueurActif.directionDeplacement !== null || this.joueurActif.directionDeplacement !== "bas") {
              console.log("deplacement autorisé uniquement sur le même axe");
              break;
            }
        }

      }


    });
    if (this.joueurActif.compteurDeplacement === 0) {
      console.log("fin phase deplacement");
      console.log("changement de joueurActif");
    }
}


  placerCasesSpeciales() {


    this.carte.ajouterJoueurCarte(this.listeJoueurs);
    console.log(this.carte.tableauColonnes);
    this.carte.ajouterArmeCarte();
    this.carte.ajouterBlocGrisCarte();
    this.carte.placerTableHTML()


  }

  initialiserJeu() {

    this.ajouterJoueur(2);
    this.carte.genererCarteVierge();
    this.placerCasesSpeciales();
    this.choisirJoueurActifDepartAleatoire();
    this.actualiserOrdreFileAttente();
    this.determinerJoueurActif();
    }


  tourParTour() {
    
    //this.carte.ajouterVisuelJoueurActif2();  // NON FONCTIONNEL
    this.deplacerJoueur();
    // phase de combat

   
  }

}


// lancement du jeu
const nouvellePartie = new Jeu;

nouvellePartie.initialiserJeu(); 
nouvellePartie.tourParTour();
















