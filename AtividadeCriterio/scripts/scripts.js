class Funcionario {
  constructor(nome, salario, dataAdmissao, bonus) {
    this.nome = nome;
    this.salario = salario;
    this.dataAdmissao = dataAdmissao;
    this.bonus = bonus;
  }

  // FUNÇÃO PARA DEFINIR O VALOR DO BONUS
  calcularBonus() {
    return this.salario * this.bonus;
  }

  // FUNÇÃO PARA A DESCRIÇÃO DOS FUNCIONÁRIOS
  exibirDetalhes() {
    console.log(
      `Funcionário: ${this.nome}, salário: R$${this.salario.toFixed(
        2
      )}, data de admissão do funcionário: ${
        this.dataAdmissao
      }, bônus: R$${this.calcularBonus().toFixed(2)}`
    );
  }
}

// EXTENDS - PALAVRA-CHAVE UTILIZADA EM JAVASCRIPT PARA CRIAR UMA CLASSE FILHA
// QUE HERDA UMA CLASSE PAI, NESTE CASO GERENTE(FILHA) HERDA FUNCIONARIO(PAI)
class Gerente extends Funcionario {
  // SUPER - UTILIZADO PARA CHAMAR O CONSTRUTOR DA CLASSE PAI
  // E REUTILIZAR SEUS ATRIBUTOS!
  constructor(nome, salario, dataAdmissao, bonus, departamento) {
    super(nome, salario, dataAdmissao, bonus);
    this.departamento = departamento;
  }

  // FUNÇÃO PARA A DESCRIÇÃO DO GERENTE
  detalhesGerente() {
    console.log(
      `${this.nome} é gerente do setor ${
        this.departamento
      }, seu salário é: R$${this.salario.toFixed(2)}, sua data de admissão é ${
        this.dataAdmissao
      } e seu bônus é de: R$${this.calcularBonus().toFixed(2)}`
    );
  }
}

const funcionario = new Funcionario("Testildo", 10000, "25/02/2025", 0.1);
const gerente = new Gerente("Otávio", 25000, "02/07/2007", 0.2, "Econômico");
funcionario.exibirDetalhes();
gerente.detalhesGerente();
