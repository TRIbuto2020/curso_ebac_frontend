function Carta(nome, custo, desc, raridade){
    this.nome = nome;
    this.desc = desc;
    this.custo = custo;
    let _raridade = raridade;

    this.getRaridade = function(){
        return _raridade;
    };
    this.setRaridade = function(nr){
        _raridade = nr;
    }
};

function Magia(efeito, nome, custo, desc, raridade){
    Carta.call(this, nome, custo, desc, raridade);
    this.efeito = efeito;
};

function Item(stats , nome, custo, desc, raridade){
    Carta.call(this, nome, custo, desc, raridade);
    this.stats = stats;
}

const pedra = new Carta("Pedra", 1, "Uma pedra", "H");
console.log(pedra);
console.log(pedra.getRaridade());

const protecao = new Magia("Bloqueia um ataque inimigo", "Proteção", 15, "Uma barreira mágica", "S");
console.log(protecao);
console.log(protecao.getRaridade());

const escudo = new Item("1/5", "Escudo", 5, "Defenda com ação", "C");
console.log(escudo);
console.log(escudo.getRaridade());