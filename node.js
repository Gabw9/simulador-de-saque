function simuladorATM() {
    
    let saldo = 1000; 

    
    while (true) {
        
        let escolha = prompt(`Bem-vindo ao Simulador de Caixa Eletrônico!\n\nEscolha uma opção:\n\n1. Ver Saldo\n2. Depositar\n3. Sacar\n4. Sair`);

        
        escolha = parseInt(escolha);

                switch (escolha) {
            case 1:
                alert(`Seu saldo atual é R$ ${saldo.toFixed(2)}`);
                break;
            case 2:
               
                let deposito = parseFloat(prompt("Digite o valor a ser depositado:"));
                if (isNaN(deposito) || deposito <= 0) {
                    alert("Valor de depósito inválido.");
                } else {
                    saldo += deposito;
                    alert(`Depósito de R$ ${deposito.toFixed(2)} realizado com sucesso.\nSeu novo saldo é R$ ${saldo.toFixed(2)}`);
                }
                break;
            case 3:
        
                let saque = parseFloat(prompt("Digite o valor a ser sacado:"));
                if (isNaN(saque) || saque <= 0 || saque > saldo) {
                    alert("Valor de saque inválido ou saldo insuficiente.");
                } else {
                    saldo -= sa1que;
                    alert(`Saque de R$ ${saque.toFixed(2)} realizado com sucesso.\nSeu novo saldo é R$ ${saldo.toFixed(2)}`);
                }
                break;
            case 4:
                alert("Obrigado por utilizar o Simulador de Caixa Eletrônico. Volte sempre!");
                return;             default:
                alert("Opção inválida. Por favor, escolha uma opção válida.");
        }
    }
}

simuladorATM();
4
444343