// model

class Negociacao {
  constructor(_data, _quantidade, _valor) {

    // Criando os valores das propriedades nas classe mas de
    // uma forma mais elegante e mantendo a imutabilidade sendo
    // indentificada pelo nome.
    Object.assign(this, { _quantidade, _valor });
    this._data = new Date(_data.getTime());

    Object.freeze(this); // não permite que os valores sejam alterados.

  }

  get volume() {
    return this._quantidade * this._valor;
  }

  get data() {
    return new Date(this._data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
}