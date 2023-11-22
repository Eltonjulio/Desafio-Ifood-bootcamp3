class formHero{
  constructor(name, age, tipo, ataque){
    this.name = name
    this.age = age
    this.tipo = tipo
    this.ataque = ataque
  };
  
  escrever(){
    console.log(`o ${this.name} com ${this.age} de idade usando estilo ${this.tipo} atacou ${this.ataque}`);
  }
};

let mago = new formHero("João", 10, "mago", "usando magia")
let guerreiro = new formHero("Lucas", 20, "guerreiro", "usando a espada")
let monge = new formHero("Jose", 30, "monge", "usando artes marciais")
let ninja = new formHero("Carlos", 40, "ninja", "usando shuriken")

mago.escrever()
guerreiro.escrever()
monge.escrever()
ninja.escrever()
