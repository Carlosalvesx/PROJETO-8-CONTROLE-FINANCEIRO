let moneyValue = parseFloat(prompt('Digite seu dinheiro inicial'))
let option

do {
    option = prompt(`Saldo atual: R$${moneyValue.toFixed(2)}
Digite:
1. Caso queira adicionar dinheiro.
2. Caso queira retirar dinheiro.
3. Caso deseje sair.`)

    switch(option) {
        case '1':
            let valueAdition = parseFloat(prompt('Digite o valor que deseja adicionar.'));
            if (!isNaN(valueAdition) && valueAdition > 0) {
                moneyValue += valueAdition;
            } else {
                alert('Por favor, insira um valor válido maior que zero.');
            }
            break
        case '2':
            let valueRemove = parseFloat(prompt('Digite o valor que deseja retirar.'));
            if (!isNaN(valueRemove) && valueRemove > 0) {
                if (valueRemove <= moneyValue) {
                    moneyValue -= valueRemove
                } else {
                    alert('Saldo insuficiente para realizar a retirada.')
                }
            } else {
                alert('Por favor, insira um valor válido maior que zero.')
            }
            break
        case '3':
            alert('Encerrando programa.')
            break
        default:
            alert('Opção inválida. Por favor, escolha uma opção válida.')
            break;
    }
} while (option !== '3')
