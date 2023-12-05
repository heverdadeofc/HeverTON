window.onload = function() {
    carregarNovosClientes();
  };
  
  function cadastrarCliente() {
    const nome = document.getElementById("Nome").value;
    const negocio = document.getElementById("Tipo de negócio").value;
    const fat = document.getElementById("Faturamento Mensal").value;
  
    if (nome && negocio && fat) {
      const novoCliente = {
        nome: nome,
        negocio: negocio,
        fat: fat,
      };
  
      salvarCliente(novoCliente);
      adicionarClienteNaLista(novoCliente);
  
      // Limpa o formulário após o cadastro
      document.getElementById("Nome").value = "";
      document.getElementById("Tipo de Negócio").value = "";
      document.getElementById("Faturamento Mensal").value = "";
    } else {
      alert("Preencha todos os campos do formulário");
    }
  }
  
  function adicionarClienteNaLista(cliente) {
    const listaClientes = document.getElementById("listaClientes");
    const novoCliente = document.createElement("li");
    novoCliente.textContent = `<strong>${cliente.nome}</strong>: ${cliente.negocio}`;
    listaClientes.appendChild(novoCliente);
  }
  
  function salvarCliente(cliente) {
    // Recupera os clientes salvos no localStorage
    const clientesSalvos = JSON.parse(localStorage.getItem("clientes") || []);
  
    // Adiciona o novo cliente a lista de clientes
    clientesSalvos.push(cliente);
  
    // Salva a lista de clientes no localStorage
    localStorage.setItem("clientes", JSON.stringify(clientesSalvos));
  }
  
  function carregarClientesSalvos() {
    // Recupera os clientes salvas no localStorage
    const clientesSalvos = JSON.parse(localStorage.getItem("clientes") || []);
  
    // Adiciona os clientes a lista na interface
    clientesSalvos.forEach(adicionarClienteNaLista);
  }