let caminhaoSelecionado = null;

document.getElementById("btnNovoCaminhao").addEventListener("click", abrirModal);
document.getElementById("fecharModal").addEventListener("click", fecharModal);
document.getElementById("cancelar").addEventListener("click", fecharModal);
document.getElementById("formCaminhao").addEventListener("submit", salvarCaminhao);

function abrirModal() {
  document.getElementById("formCaminhao").reset();
  caminhaoSelecionado = null;
  document.getElementById("modalCaminhao").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modalCaminhao").style.display = "none";
}

function salvarCaminhao(e) {
  e.preventDefault();
  const registro = document.getElementById("registro").value;
  const placa = document.getElementById("placa").value;
  const material = document.getElementById("material").value;
  const tipo = document.getElementById("tipo").value;

  if (caminhaoSelecionado) {
    caminhaoSelecionado.cells[0].innerText = registro;
    caminhaoSelecionado.cells[1].innerText = placa;
    caminhaoSelecionado.cells[2].innerText = material;
    caminhaoSelecionado.cells[3].innerText = tipo;
  } else {
    const tabela = document.getElementById("tabelaCaminhoes");
    const linha = tabela.insertRow();
    linha.insertCell(0).innerText = registro;
    linha.insertCell(1).innerText = placa;
    linha.insertCell(2).innerText = material;
    linha.insertCell(3).innerText = tipo;

    const acoes = linha.insertCell(4);
    acoes.innerHTML = `
      <button onclick="editarCaminhao(this)">Editar</button>
      <button onclick="excluirCaminhao(this)">Excluir</button>
    `;
  }

  fecharModal();
}

function editarCaminhao(botao) {
  caminhaoSelecionado = botao.parentElement.parentElement;
  document.getElementById("registro").value = caminhaoSelecionado.cells[0].innerText;
  document.getElementById("placa").value = caminhaoSelecionado.cells[1].innerText;
  document.getElementById("material").value = caminhaoSelecionado.cells[2].innerText;
  document.getElementById("tipo").value = caminhaoSelecionado.cells[3].innerText;

  abrirModal();
}

function excluirCaminhao(botao) {
  const linha = botao.parentElement.parentElement;
  linha.remove();
}
