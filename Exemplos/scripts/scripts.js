console.log("JAVASCRIPT CONECTADO!");

// CLASSE - MOLDE PARA CRIAR OBJETOS
class Veiculo {
  // CONSTRUCTOR - É UM MÉTODO ESPECIAL DO JAVASCRIPT
  constructor(marca, modelo) {
    // THIS - É UMA PALAVRA-CHAVE ESPECIAL, QUE SE REFERE AO PRÓPRIO OBJETO CRIADO.
    this.marca = marca;
    this.modelo = modelo;
  }
}

// OBJETO - É UMA INSTÂNCIA DA CLASSE
const carro = new Veiculo("Honda", "Civic");
console.log(carro.marca);

/* ----------------------------------------------------------------------- */

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

const celular = new Produto("Celular", 1500);
const noteboook = new Produto("Notebook", 5000);

console.log(
  `Nome do produto: ${
    celular.nome
  } - Preço do produto: R$${celular.preco.toFixed(2)}`
);
console.log(noteboook.nome);

/* ----------------------------------------------------------------------- */

class contaBancaria {
  constructor(saldoInicial) {
    this.saldo = saldoInicial;
  }

  // MÉTODOS - SÃO FUNÇÕES DENTRO DE UMA CLASSE, SERVEM PARA EXECUTAR AÇÕES
  // OU MANIPULAR ATRIBUTOS!
  depositar(valor) {
    // this.saldo = this.saldo + valor;
    this.saldo += valor;
  }

  getSaldo() {
    return `Seu saldo é: R$${this.saldo.toFixed(2)}`;
  }
}
const minhaConta = new contaBancaria(2000);
console.log(minhaConta.getSaldo());
minhaConta.depositar(1000);
console.log(minhaConta.getSaldo());

/* ----------------------------------------------------------------------- */

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  // MÉTODOS - SÃO FUNÇÕES DENTRO DE UMA CLASSE, SERVEM PARA EXECUTAR AÇÕES
  // OU MANIPULAR ATRIBUTOS!
  apresentacao() {
    return `Olá meu nome é ${this.nome}, tenho ${this.idade} anos!`;
  }
}

const minhaApresentacao = new Pessoa("Otávio", 17);
console.log(minhaApresentacao.apresentacao());

/* ----------------------------------------------------------------------- */

class Steam {
  // ATRIBUTO ENCAPSULADO - TRADUZINDO, PRIVADO
  // APENAS CLASSE E OS MÉTODOS DENTRO DA CLASSE TEM ACESSO!
  #saldo;

  constructor(saldoInicialSteam) {
    this.#saldo = saldoInicialSteam;
  }

  depositarValorSteam(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    } else {
      console.log("O depósito é inválido!");
    }
  }

  getSaldoSteam() {
    return `Seu daldo atual na steam é ${this.#saldo}`;
  }
}

const steam = new Steam(1000);
steam.depositarValorSteam(300);
console.log(steam.getSaldoSteam());

/* ----------------------------------------------------------------------- */

class Usuario {
  constructor(senha) {
    // this.senha = "12345678"
    this.senha = senha;
  }

  // MÉTODO verificarForcaSenha ENCAPSULADO - TRADUZINDO, ELE ESTA PRIVADO,
  // APENAS OS ATRIBUTOS DENTRO DESTA CLASSE TEM ACESSO A ELE!
  #verificarForcaSenha(senha) {
    return senha.length > 9 ? true : false;
  }

  criarConta() {
    if (this.#verificarForcaSenha(this.senha)) {
      return console.log("Conta Criada!");
    }

    return console.log("Senha Fraca! Precisa conter 10 caractéres ou mais!");
  }
}

const user = new Usuario("1234567890");
user.criarConta();

/* ----------------------------------------------------------------------- */

// EXTENDS - PALAVRA-CHAVE UTILIZADA EM JAVASCRIPT PARA CRIAR UMA CLASSE FILHA
// QUE HERDA UMA CLASSE PAI, NESTE CASO CARRO(FILHA) HERDA VEICULO(PAI)
class Carro extends Veiculo {
  constructor(marca, modelo, portas) {
    // SUPER - UTILIZADO PARA CHAMAR O CONSTRUTOR DA CLASSE PAI
    // E REUTILIZAR SEUS ATRIBUTOS
    super(marca, modelo);
    this.portas = portas;
  }

  info() {
    console.log(
      `A marca do carro é: ${this.marca}, seu modelo é: ${this.modelo} e ele possui ${this.portas} portas`
    );
  }
}

const meuCarro = new Carro("Honda", "Civic", 4);
meuCarro.info();

/* ----------------------------------------------------------------------- */

class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  mostrarDados() {
    console.log(
      `Funcionário: ${this.nome}, salário: R$${this.salario.toFixed(2)}`
    );
  }
}

// EXTENDS - PALAVRA-CHAVE UTILIZADA EM JAVASCRIPT PARA CRIAR UMA CLASSE FILHA
// QUE HERDA UMA CLASSE PAI, NESTE CASO GERENTE(FILHA) HERDA FUNCIONARIO(PAI)
class Gerente extends Funcionario {
  // SUPER - UTILIZADO PARA CHAMAR O CONSTRUTOR DA CLASSE PAI
  // E REUTILIZAR SEUS ATRIBUTOS
  constructor(nome, salario, tipo) {
    super(nome, salario);
    this.tipo = tipo;
  }

  mostrarSetor() {
    console.log(`${this.nome} é gerente do setor ${this.tipo}`);
  }
}

const gerente = new Gerente("Otávio", 25000, "Econômico");
gerente.mostrarDados();
gerente.mostrarSetor();
