export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
// En ES6, une fonction fléchée (=>) ne crée pas son propre this, elle
// utilise le this du contexte dans lequel elle a été définie.

// Cela évite d’avoir à stocker this dans une variable comme self.
