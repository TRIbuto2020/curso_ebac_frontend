function Aluno(nome, nota){
    this.nome = nome;
    this.nota = nota;
};

const aluno1 = new Aluno("Pedro", 7);
const aluno2 = new Aluno("Bruna", 8);
const aluno3 = new Aluno("Renato", 5);
const aluno4 = new Aluno("Julia", 6);
const aluno5 = new Aluno("Alex", 4);
const aluno6 = new Aluno("Sofia", 6);

let turma1 = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6];

let aprovados = new Set();

function quemPassou(turma){
    for (let aluno of turma){
        if (aluno.nota >= 6){
            aprovados.add(aluno.nome);
        }
    };
};

quemPassou(turma1);

console.log(aprovados);