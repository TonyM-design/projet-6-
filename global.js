// GENERER ALEATOIRE

/**
 * generer un nombre aleatoire
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function genererAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  

// DEMANDE NOMBRE COLONNE

function parametrerNombreColonnes(){
  do {
        Jeu.nombreColonne = prompt("entrez le nombre de colonne du plateau de jeu (entrez un chiffre) :");
        Jeu.nombreColonneTraduit = Number.parseInt(Jeu.nombreColonne, 10);
        if (Jeu.nombreColonneTraduit <= 0 || isNaN(Jeu.nombreColonneTraduit)) {
          alert("entrez un chiffre ;) ");
        }
      } while (Jeu.nombreColonneTraduit <= 0 || isNaN(Jeu.nombreColonneTraduit));
      return Jeu.nombreColonneTraduit;
    }

// DEMANDE NOMBRE CELLULE PAR COLONNE

function parametrerNombreCellules(){
  do {
    nombreCellule = prompt("entrez le nombre de cellule par colonne du plateau de jeu (entrez un chiffre) :");
    Jeu.nombreCelluleTraduit = Number.parseInt(nombreCellule, 10);
    if (Jeu.nombreCelluleTraduit <= 0 || isNaN(Jeu.nombreCelluleTraduit)) {
      alert("entrez un chiffre ;) ");
    }
  } while (Jeu.nombreCelluleTraduit <= 0 || isNaN(Jeu.nombreCelluleTraduit));
  return Jeu.nombreCelluleTraduit;
}

