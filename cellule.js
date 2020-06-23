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


}

