class Aluno {
  constructor(pN, sN, n1, n2) {
    this.primeiroNome = pN;
    this.segundoNome = sN;
    this.primeiraNota = n1;
    this.segundaNota = n2;
  }
  NomeCompleto() {
    return this.primeiroNome + this.segundoNome;
  }
  Media() {
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }
  Situacao() {
    if(this.Media() > 6)
      return "Aprovado"
    else
      return "Reprovado"
  }
}

var alunos = 
  [new Aluno ("João ", "da Silva", 7, 8.5),
  new Aluno ("Maria ", "de Souza", 6, 6.5),
  new Aluno ("José ", "Carvalho", 9, 10),
  new Aluno ("Thiago ", "Silvera", 10, 7.5),
  new Aluno ("Isabel ", "Bragança", 6.5, 5)];

function percorreAluno(alunos){
  alert("Nome completo: " + alunos.NomeCompleto() +
        "\nMédia: " + alunos.Media() +
        "\nSituação do aluno: " + alunos.Situacao());
}

alunos.forEach(percorreAluno);