import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(x) {
    this._sqft = x;
  }

  get floors() {
    return this._floors;
  }

  set floors(x) {
    this._floors = x;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

// On doit utiliser super avant d'utiliser this dans un constructeur
// d'une classe qui hérite
