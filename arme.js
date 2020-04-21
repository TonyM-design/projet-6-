class Arme {
    constructor(nom, bonusAttaque, bonusDefense, portee){
    this.nom = nom;
    this.bonusAttaque = bonusAttaque;
    this.bonusDefense = bonusDefense;
    this.portee = portee;
}
}


  class AnneauEpique extends Arme {
    constructor(nom, bonusAttaque, bonusDefense, portee) {
      super(nom,bonusAttaque, bonusDefense, portee);
  
      // specifique a AnneauEpique
      this.nom = "Anneau Epique";
      this.bonusAttaque = 50;
      this.bonusDefense = 40;
      this.portee = 4;
    }
  }

  class AnneauSimple extends Arme {
    constructor(nom, bonusAttaque, bonusDefense, portee) {
      super(nom,bonusAttaque, bonusDefense, portee);
  
      // specifique a AnneauSimple
      this.nom = "Anneau Simple";
      this.bonusAttaque = 10;
      this.bonusDefense = 20;
      this.portee = 2;
    }
  }

  class BouclierSimple extends Arme {
    constructor(nom, bonusAttaque, bonusDefense, portee) {
      super(nom,bonusAttaque, bonusDefense, portee);
  
      // specifique a BouclierSimple
      this.nom = "Bouclier Simple";
      this.bonusAttaque = 0;
      this.bonusDefense = 40;
      this.portee = 1;
    }
  }

  class BouclierEpique extends Arme {
    constructor(nom, bonusAttaque, bonusDefense, portee) {
      super(nom,bonusAttaque, bonusDefense, portee);
  
      // specifique a BouclierEpique
      this.nom = "Bouclier Epique";
      this.bonusAttaque = 20;
      this.bonusDefense = 40;
      this.portee = 1;
    }
  }

  class EpeeSimple extends Arme {
    constructor(nom, bonusAttaque, bonusDefense, portee) {
      super(nom,bonusAttaque, bonusDefense, portee);
  
      // specifique a EpeeSimple
      this.nom = "Epee Simple";
      this.bonusAttaque = 20;
      this.bonusDefense = 10;
      this.portee = 1;
  }
  }

  class EpeeEpique extends Arme {
    constructor(nom, bonusAttaque, bonusDefense, portee) {
      super(nom,bonusAttaque, bonusDefense, portee);
  
      // specifique a EpeeEpique
      this.nom = "Epee Epique";
      this.bonusAttaque = 60;
      this.bonusDefense = 30;
      this.portee = 1;
    }
  }

  class CasqueSimple extends Arme {
    constructor(nom, bonusAttaque, bonusDefense, portee) {
      super(nom,bonusAttaque, bonusDefense, portee);
  
      // specifique a CasqueSimple
      this.nom = "Casque Simple";
      this.bonusAttaque = 0;
      this.bonusDefense = 40;
      this.portee = 0;
    }
  }

  class CasqueEpique extends Arme {
    constructor(nom, bonusAttaque, bonusDefense, portee) {
      super(nom,bonusAttaque, bonusDefense, portee);
  
      // specifique a CasqueEpique
      this.nom = "Epee Epique";
      this.bonusAttaque = 60;
      this.bonusDefense = 30;
      this.portee = 1;
    }
  }

