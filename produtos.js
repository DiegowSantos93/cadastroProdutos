const prompt = require('prompt-sync')();

let ultimoId = 1;

const produtos = [];

const modelo = (id) => {

    const nome = prompt('Digite o nome do produto: ');
    const preco = parseFloat(prompt('Digite o valor do produto: '))

        let produto
        if (id == undefined){
            if (nome != "" && nome.length >= 3 && preco > 0){
                produto = {nome, preco, id: ultimoId}
                ultimoId++;
            } else {
                console.log('Dados inválidos, tente novamente.')
            }
        } else {
        produto = {nome, preco, id}
        }
    return produto
};

const criar = () => {
    const produto = modelo();

    if(produto != undefined){
        produtos.push(produto)
        console.log('Produto cadastrado com sucesso.')
    } 
};

const listar = () => {
    if (produtos.length == 0){
        console.log('Não existem produtos cadastrados.')
        return false
    } else {
        produtos.forEach((produto) => {
            console.log(`${produto.id}. Nome do produto: ${produto.nome} - Preço: ${produto.preco}`)
        });
        return true
    }
};

const editar = (produto) => {
    if (listar(true)){
        const id = prompt('Qual id de produto deseja editar: ')

        const novo = modelo(id)

        const indice = produtos.findIndex(produto => id == produto.id)

        if (indice != -1){
            produtos[indice] = novo
            console.log('Edição realizada com sucesso.')
        } else {
            console.log('Id não localizado.')
        }
    }
};

const remover = () => {
    if (listar(true)){
        const id = prompt('Qual id de produto deseja remover: ')

        const indice = produtos.findIndex(produto => id == produto.id)

        if (indice != -1){
            produtos.splice(indice,1);
            console.log('Remoção realizada com sucesso.')
        }
        } else {
        console.log('Id não localizado.')
        }
};

module.exports = {criar, listar, editar, remover}