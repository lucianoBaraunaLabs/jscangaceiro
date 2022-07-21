class DateConverter {
  constructor() {
    // Emite um erro quando a classe for instanciada
    throw new Error('Esta classe não pode ser instanciada');
  }
  // Static - cria um método sem precisar de uma instancia
  // Converte data para o formato 00/00/0000
  static paraTexto(data) {
    return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;

  }
  // Converte data para o formato DateTime
  static  paraData(texto){
    if(!/\d{4}-\d{2}-\d{2}$/.test(texto))
      throw new Error('Deve estar no formato aaaa-mm-dd');

    return new Date(
      ...texto
      .split('-')
      .map((item, indice) => item - indice % 2));
  }
}