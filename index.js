const prompt = require("prompt-sync")();

const {criar, listar, editar, remover} = require('./produtos')

while(true){

    console.log('==Produtos==\nEscolha uma opção:\n1. Cadastrar produto\n2. Listar produtos cadastrados\n3. Editar um produto\n4. Remover um produto\n5. Sair do sistema')

    const opcao = Number(prompt('Escolha uma opção: '));

    switch (opcao) {
        case 1:
            criar();
            break;
        case 2:
            listar();
            break;
        case 3:
            editar();
            break;
        case 4:
            remover();
            break;
        case 5:
            console.log('Saindo do sistema, até mais!');
            process.exit();
        default:
            console.log('Opção inválida, tente novamente.')
            break;
    }
};