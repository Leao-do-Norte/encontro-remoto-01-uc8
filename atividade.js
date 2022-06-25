var listaDePecas = ["amortecedor","motor","correia dentada","filtro de ar","pneu 14"];

if (listaDePecas.length > 5){
    console.log("Não é possível cadastrar por excesso de peças");
}else{
    console.log("Limite permitido");
}

let peso = 105; // exemplo de valor que seria aceito positivamente pela condicional

if(peso > 100){
    console.log("Peso permitido");
}else{
    console.log("O peso está abaixo do normal")
}

let peca = "farol";

if(peca.length < 3){
    console.log("O nome da peça é muito pequeno");
}else{
    console.log("O nome da peça é válido");
}