import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be a Currency instance');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(x) {
    this._amount = x;
  }

  get currency() {
    return this._currency;
  }

  set currency(x) {
    this._currency = x;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency_name} (${this._currency_code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
