class Cellule {
    constructor(positionX, positionY, typeCase, contenu, traversable){
        this.positionX = positionX;
        this.positionY = positionY;
        this.typeCase = typeCase;
        this.contenu = contenu;
        this.traversable = traversable;
    }
    decrire(){
      console.log(`${this.positionX} + ${this.positionY} / ${this.typeCase} / ${this.contenu}`);
    }
    celluleVide(){
        this.typeCase = 'cellulevide';
    }
    celluleJoueur1(){
        this.typeCase = 'joueur1';
    }
    celluleJoueur2(){
        this.typeCase = 'joueur2';
    }
    celluleGrise(){
        this.typeCase = 'cellulegrise';
    }
    celluleArme(){
        this.typeCase = new Arme.typeCase; 
    }

}

