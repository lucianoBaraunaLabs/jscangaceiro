// Model
class Negociacoes {
  constructor() {
    this._negociacoes = [];
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao)
  }

  paraArray() {
    // retorna uma nova referência criada com os itens de this._negociacoes
    // deixando a lista imutável ou seja protegida para nã0 ser alterada em
    // qualquer ponto no código.
    return [].concat(this._negociacoes)
  }
}