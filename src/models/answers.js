
 class Answers {
  constructor(){}

  static ancientWisdom() {
    let wisdom = [
      'A resposta está sob o teu nariz!',
      'Isto que procuras já tens!',
      'A verdade sobre a tua questão é indescritível em meras palavras!',
      'Estás a procurar algo intangível!',
      "Don't Fuck-me, my friend!",
      'A tua questão é intragável e me recuso a respondê-la!',
      'Ah, quer saber de uma coisa? Foda-se, cansei deste planet de m**** !!!'

    ];

    return wisdom[Math.floor(Math.random() * Math.floor(wisdom.length))];
  }
}

export {Answers};