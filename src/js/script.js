let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
let nextId = clientes.length > 0 ? Math.max(...clientes.map(c => c.id)) + 1 : 1;

function validarCPF(cpf) {
    // Remove non-digit characters
    cpf = cpf.replace(/[^\d]/g, '');
    
    // Check if CPF has 11 digits
    if (cpf.length !== 11) {
        return false;
    }
    
    // Check for repeated digits (invalid CPFs like 111.111.111-11)
    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }
    
    // Calculate first verification digit
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = 11 - (sum % 11);
    let digit1 = (remainder === 10 || remainder === 11) ? 0 : remainder;
    
    // Check first verification digit
    if (digit1 !== parseInt(cpf.charAt(9))) {
        return false;
    }
    
    // Calculate second verification digit
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = 11 - (sum % 11);
    let digit2 = (remainder === 10 || remainder === 11) ? 0 : remainder;
    
    // Check second verification digit
    if (digit2 !== parseInt(cpf.charAt(10))) {
        return false;
    }
    
    return true;
}

function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function verificarClienteExistente(email, cpf) {
    // Remove non-digit characters from CPF for comparison
    const cpfDigits = cpf.replace(/[^\d]/g, '');
    
    return clientes.some(cliente => 
        (cliente.email === email) || 
        (cliente.cpf.replace(/[^\d]/g, '') === cpfDigits)
    );
}

function salvarClientes() {
    localStorage.setItem('clientes', JSON.stringify(clientes));
}

document.getElementById('clientForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const cidade = document.getElementById('cidade').value;
    const status = document.getElementById('status').value;

    if (!nome) {
        showMessage('❌ Por favor, preencha o nome!', 'error');
        return;
    }

    if (!validarEmail(email)) {
        showMessage('❌ E-mail inválido!', 'error');
        return;
    }

    if (!validarCPF(cpf)) {
        showMessage('❌ CPF inválido!', 'error');
        return;
    }

    if (verificarClienteExistente(email, cpf)) {
        showMessage('❌ Cliente já cadastrado!', 'error');
        return;
    }

    const cliente = {
        id: nextId++,
        nome: nome,
        email: email,
        cpf: cpf,
        telefone: telefone,
        cidade: cidade,
        status: status,
        dataCadastro: new Date().toLocaleDateString()
    };

    clientes.push(cliente);
    salvarClientes();
    showMessage('✅ Cliente cadastrado com sucesso!', 'success');
    atualizarListaClientes();
    limparFormulario();
});

function atualizarListaClientes() {
    const container = document.getElementById('clientesCadastrados');
    container.innerHTML = '';

    if (clientes.length === 0) {
        container.innerHTML = '<p>Nenhum cliente cadastrado ainda.</p>';
        return;
    }

    clientes.forEach(cliente => {
        const div = document.createElement('div');
        div.className = 'client-item';
        div.innerHTML = `
            <strong>${cliente.nome}</strong> (${cliente.status})<br>
            📧 ${cliente.email} | 📞 ${cliente.telefone || 'Não informado'}<br>
            🆔 CPF: ${cliente.cpf} | 🏙️ ${cliente.cidade || 'Não informada'}<br>
            <small>Cadastrado em: ${cliente.dataCadastro}</small>
            <button onclick="editarCliente(${cliente.id})" style="background: #ffc107; margin-top: 5px;">✏️ Editar</button>
            <button onclick="excluirCliente(${cliente.id})" style="background: #dc3545; margin-top: 5px;">🗑️ Excluir</button>
        `;
        container.appendChild(div);
    });
}

function editarCliente(id) {
    const cliente = clientes.find(c => c.id === id);
    if (cliente) {
        // Store the original ID for updating
        document.getElementById('clientId').value = cliente.id;
        document.getElementById('nome').value = cliente.nome;
        document.getElementById('email').value = cliente.email;
        document.getElementById('cpf').value = cliente.cpf;
        document.getElementById('telefone').value = cliente.telefone || '';
        document.getElementById('cidade').value = cliente.cidade || '';
        document.getElementById('status').value = cliente.status;
        showMessage('⚠️ Modo edição - Atualize os dados e clique em "Cadastrar Cliente"', 'error');
    }
}

function atualizarCliente(id, dados) {
    const index = clientes.findIndex(c => c.id === id);
    if (index !== -1) {
        clientes[index] = { ...dados, id: id };
        salvarClientes();
        atualizarListaClientes();
        limparFormulario();
        showMessage('✅ Cliente atualizado com sucesso!', 'success');
    }
}

function excluirCliente(id) {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
        clientes = clientes.filter(cliente => cliente.id !== id);
        salvarClientes();
        showMessage('🗑️ Cliente excluído!', 'success');
        atualizarListaClientes();
    }
}

function limparFormulario() {
    document.getElementById('clientForm').reset();
    document.getElementById('clientId').value = '';
    document.getElementById('message').innerHTML = '';
}

function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `<div class="${type}">${text}</div>`;
    setTimeout(() => {
        messageDiv.innerHTML = '';
    }, 5000);
}

// Add input masks
document.getElementById('cpf').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.substring(0, 11);
    
    if (value.length > 9) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{1,3}).*/, '$1.$2.$3');
    } else if (value.length > 3) {
        value = value.replace(/(\d{3})(\d{1,3}).*/, '$1.$2');
    }
    
    e.target.value = value;
});

document.getElementById('telefone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.substring(0, 11);
    
    if (value.length > 6) {
        value = value.replace(/(\d{2})(\d{5})(\d{1,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
        value = value.replace(/(\d{2})(\d{1,5}).*/, '($1) $2');
    } else {
        value = value.replace(/(\d{1,2}).*/, '($1');
    }
    
    e.target.value = value;
});

// Handle form submission for both create and update
document.getElementById('clientForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = document.getElementById('clientId').value;
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const cidade = document.getElementById('cidade').value;
    const status = document.getElementById('status').value;

    if (!nome) {
        showMessage('❌ Por favor, preencha o nome!', 'error');
        return;
    }

    if (!validarEmail(email)) {
        showMessage('❌ E-mail inválido!', 'error');
        return;
    }

    if (!validarCPF(cpf)) {
        showMessage('❌ CPF inválido!', 'error');
        return;
    }

    // Check for duplicates only when creating new client
    if (!id && verificarClienteExistente(email, cpf)) {
        showMessage('❌ Cliente já cadastrado!', 'error');
        return;
    }

    const cliente = {
        nome: nome,
        email: email,
        cpf: cpf,
        telefone: telefone,
        cidade: cidade,
        status: status,
        dataCadastro: new Date().toLocaleDateString()
    };

    if (id) {
        // Update existing client
        atualizarCliente(parseInt(id), cliente);
    } else {
        // Create new client
        cliente.id = nextId++;
        clientes.push(cliente);
        salvarClientes();
        showMessage('✅ Cliente cadastrado com sucesso!', 'success');
        limparFormulario();
    }
    
    atualizarListaClientes();
});

// Initialize the client list
atualizarListaClientes();