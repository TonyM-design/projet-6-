class Jeu {
  constructor() {
    this.nombreJoueurAttendu = 2;
    this.nombreJoueurPresent = 0;
    this.listeJoueurs = [];
    this.fileAttentes = this.listeJoueurs;
    this.joueurActif = null;
    this.nombreArmes = 4;
    this.nombreCellulesGrises = 15;
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

  actualiserOrdreFileAttente() {
    // on supprime instance initiale
    const cloneSupprimer = this.fileAttentes.indexOf(this.fileAttentes[0], 1);
    this.fileAttentes.splice(cloneSupprimer, 1);
    console.log(this.fileAttentes);
    return this.fileAttentes;
  }

  choisirJoueurActifDepartAleatoire() {
    const joueurActifDepartAleatoire = this.fileAttentes[genererAleatoire(0, this.fileAttentes.length)]; // on choisit un joueur aleatoire dans la liste
    joueurActifDepartAleatoire.actif = true; // applique etat actif = true
    const cloneJoueur = joueurActifDepartAleatoire; // on instance le joueur
    console.log(this.fileAttentes);
    this.fileAttentes.unshift(cloneJoueur);//  on place une instance du joueur suivant en haut du tableau 
    console.log(this.fileAttentes);
    return this.fileAttentes;
  }

  // tour par tour fonctionne 




  gererExceptionDeplacement2(verifierCaseDirectionDeplacement, verifierCaseDirectionTraversable, carteCaseDirection, valeurDirectionDplacementJoueur) {
    // EXCEPTION PREMIER TOUR
    if (this.joueurActif.compteurDeplacement === 3) {
      if (verifierCaseDirectionDeplacement === false) {
        console.log("cette case n'existe pas");
        this.joueurActif.directionDeplacement = null;
      }
      else if (carteCaseDirection.typeCase === "cellulegrise") {
        console.log("cette case n'est pas traversable");
        this.joueurActif.directionDeplacement = null;
      }

    }
    // FIN EXCEPTION PREMIER TOUR

    // OCCURENCE CHANGEMENT DE DIRECTION DURANT DEPLACEMENT
    else if (this.joueurActif.directionDeplacement !== null && this.joueurActif.directionDeplacement !== valeurDirectionDplacementJoueur) {
      console.log("deplacement autorisé uniquement sur le même axe");
    }
    // OCCURENCE PRESENCE D'UN JOUEUR SUR LA CASE DE DESTINATION
    else if (verifierCaseDirectionDeplacement === true && verifierCaseDirectionTraversable === false && carteCaseDirection.typeCase !== "cellulegrise") {
      console.log("Un joueur est present sur la case, debut phase de combat");
      this.joueurActif.directionDeplacement = null;
      this.joueurActif.compteurDeplacement = 0;
      this.carte.enleverVisuelJoueurActif(this.joueurActif);
    }

    // OCCURENCE OBSTACLE OU CASE INEXISTANTE 
    else if ((verifierCaseDirectionDeplacement === false || verifierCaseDirectionTraversable === false) && this.joueurActif.compteurDeplacement <= 2) {
      this.joueurActif.compteurDeplacement = 0;
      this.carte.enleverVisuelJoueurActif(this.joueurActif);
      console.log("aucune case disponible au deplacement sur le même axe, fin du deplacement")
    }

  }


  majProprietesJoueurActif() {
    if (event.which == 37) {
      this.joueurActif.positionY--;
      this.joueurActif.compteurDeplacement--;
      this.joueurActif.directionDeplacement = "gauche";
    }
    else if (event.which == 38) {
      this.joueurActif.positionX--
      this.joueurActif.compteurDeplacement--;
      this.joueurActif.directionDeplacement = "haut";
    }
    else if (event.which == 39) {
      this.joueurActif.positionY++
      this.joueurActif.compteurDeplacement--;
      this.joueurActif.directionDeplacement = "droite";
    }
    else if (event.which == 40) {
      this.joueurActif.positionX++
      this.joueurActif.compteurDeplacement--;
      this.joueurActif.directionDeplacement = "bas";
    }
  }


  effectuerDeplacementJoueur(verifierCaseDirectionDeplacement, verifierCaseDirectionTraversable, carteCaseDirection, valeurDirectionDplacementJoueur) {
    if ((verifierCaseDirectionDeplacement === true) && (this.joueurActif.directionDeplacement === null || this.joueurActif.directionDeplacement === valeurDirectionDplacementJoueur) && (this.joueurActif.compteurDeplacement !== 0) && verifierCaseDirectionTraversable === true) {
      console.log("test gauche valide");

      // SI AU DEPLACEMENT PRECEDENT LE JOUEUR A RECUPERE UNE ARME
      if (this.joueurActif.equipements.length !== 1) {
        this.carte.creerStockageEmplacementOrigine(this.joueurActif);
        this.carte.remplacerParCaseArme(this.joueurActif); // la case arme est créer a l'adresse du contenu de stockageCaseJoueur
        this.joueurActif.deposerArme(); // on supprime l'arme de l'equipements[]
        this.carte.remplacerParCaseJoueur(carteCaseDirection);
        this.majProprietesJoueurActif();
        this.carte.rafraichirTableHTML();
      }


      // OCCURENCE CASE ARME
      else if (carteCaseDirection.typeCase !== "celluleVide") {
        this.carte.creerStockageEmplacementOrigine(this.joueurActif);
        this.joueurActif.recupererArme(carteCaseDirection);
        this.carte.remplacerParCelluleVide();
        this.carte.remplacerParCaseJoueur(carteCaseDirection);
        this.majProprietesJoueurActif();
        this.carte.rafraichirTableHTML();
      }

      // OCCURENCE CELLULE VIDE

      else if (carteCaseDirection.typeCase === "celluleVide") {
        this.carte.creerStockageEmplacementOrigine(this.joueurActif);
        this.carte.remplacerParCelluleVide();
        this.carte.remplacerParCaseJoueur(carteCaseDirection);
        this.majProprietesJoueurActif();
        this.carte.rafraichirTableHTML();

      }
    }


    this.gererExceptionDeplacement2(verifierCaseDirectionDeplacement, verifierCaseDirectionTraversable, carteCaseDirection, valeurDirectionDplacementJoueur)
    this.carte.ajouterVisuelJoueurActif2(this.joueurActif);

  }

  // DEPLACEMENT JOUEUR
  verifierSiChangementJoueur() {
    if (this.joueurActif.compteurDeplacement === 0) {
      console.log("verifierSiChangementJoueur test compteur deplacement = 0")
      this.changerJoueurActif();
      return true;
    }
  }

  deplacerJoueur() {
    $(document).keydown((event) => {
      if (this.verifierSiChangementJoueur() === true) {
        console.log("changement de joueur")
        this.joueurActif.compteurDeplacement = 3;
        this.joueurActif.directionDeplacement = null;
      };
      this.determinerJoueurActif();
      console.log("doit apparaitre a chaque appuie de touche ")
      this.carte.rafraichirTableHTML();



      // fleche gauche code ascii 37
      if (event.which == 37) {
        this.effectuerDeplacementJoueur(this.carte.verifierCaseGaucheDeplacement(this.joueurActif), this.carte.verifierCaseGaucheTraversable(this.joueurActif), this.carte.caseGauche(this.joueurActif), "gauche")
      }
      // fleche haut  code ascii 38
      if (event.which == 38) {
        this.effectuerDeplacementJoueur(this.carte.verifierCaseHautDeplacement(this.joueurActif), this.carte.verifierCaseHautTraversable(this.joueurActif), this.carte.caseHaut(this.joueurActif), "haut")
      }
      if (event.which == 39) { // fleche droite  code ascii 39
        this.effectuerDeplacementJoueur(this.carte.verifierCaseDroiteDeplacement(this.joueurActif), this.carte.verifierCaseDroiteTraversable(this.joueurActif), this.carte.caseDroite(this.joueurActif), "droite")
      }
      if (event.which == 40) { // fleche bas  code ascii 40
        this.effectuerDeplacementJoueur(this.carte.verifierCaseBasDeplacement(this.joueurActif), this.carte.verifierCaseBasTraversable(this.joueurActif), this.carte.caseBas(this.joueurActif), "bas")
      }
      if (event.which == 32) {
        this.joueurActif.compteurDeplacement = 0;
        console.log("vous avez choisi de terminer vos deplacement")
      }
    }

    );
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
















