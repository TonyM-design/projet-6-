
// POO JOUEURS
  // modele joueurs 
  class Personnage {
    constructor() {
      this.nom = prompt("entrez le nom de votre personnage:");
      this.sante = 100;
      this.attaque = 20;
      this.defense = 15;
      this.equipements = [new Dague]; 
      this.actif = false;

    }
    // Renvoie la description du personnage
    decrirePersonnage() {
      return `${this.nom} a ${this.sante} points de vie, ${
        this.attaque
      } en force et ${this.defense} en defense`;
    }

  }

class Joueur extends Personnage {
  constructor(numeroJoueur,positionX,positionY) {
    super();
    this.numeroJoueur = numeroJoueur;
    this.positionX = positionX;
    this.positionY = positionY;
    this.presenceValide = false;
    this.compteurDeplacement = 3;
    this.directionDeplacement = null;
    this.armeADeposer = null;
    

    }
    
    
    obtenirPosition(){
      console.log(`${this.positionX} + ${this.positionY}`);
      return `${this.positionX} + ${this.positionY}`;
    }
    
    recupererArme(caseAdjacenteChoixJoueurActif) {
    this.equipements.unshift(caseAdjacenteChoixJoueurActif.contenu);
    }
  
  
  
    deposerArme() {
      this.equipements.pop();

}
}
