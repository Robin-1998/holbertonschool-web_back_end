import Currency from "./3-currency.js";

export default class Pricing {
  constructor (amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }
  
  set amount(x) {
    return this._amount(x);
  }

  get currency() {
    return this._currency;
  }

  set currency(x) {
    return this._currency(x);
  }

  displayFullPrice() {
    return `${this._amount} (${this._currency_name}) (${this._currency_code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
