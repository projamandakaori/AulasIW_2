document.addEventListener("DOMContentLoaded", function() {
    const dadosCliente = {
        nome: "Amanda Cecília",
        login: "amandacecilia",
        senha: "etec2024",
        email: "amandacecilia@gmail.com",
        endereco: "Rua Etec",
        telefone: "91111-1111"
    };

    function salvarDados() {
        const cliente = {
            nome: document.getElementById('nome').value || dadosCliente.nome,
            login: document.getElementById('login').value || dadosCliente.login,
            senha: document.getElementById('senha').value || dadosCliente.senha,
            email: document.getElementById('email').value || dadosCliente.email,
            endereco: document.getElementById('endereco').value || dadosCliente.endereco,
            telefone: document.getElementById('telefone').value || dadosCliente.telefone
        };

        localStorage.setItem('cliente', JSON.stringify(cliente));

        const clienteSalvo = JSON.parse(localStorage.getItem('cliente'));
        console.log(clienteSalvo); 

        if (clienteSalvo && clienteSalvo.nome === cliente.nome) {
            alert('Dados salvos com sucesso!');
        } else {
            alert('Falha ao salvar os dados.');
        }
    }

    document.getElementById('btnEnviar').onclick = function(event) {
        event.preventDefault(); 
        console.log('Botão clicado!');
        salvarDados();
    };
});
