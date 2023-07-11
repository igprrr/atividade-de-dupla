const ul = document.querySelector('ul');
const input = document.querySelector('input');
const form = document.querySelector('form');

// Função que carrega o conteúdo da API
async function load() {
  // Faz uma requisição à API e obtém os dados em JSON
  const res = await fetch('http://localhost:3000/').then(data => data.json());
  // Para cada item retornado, chama a função para adicionar na lista
  res.urls.map(({ name, url, id }) => addElement({ name, url, id }));
}

load();

// Função para adicionar um elemento na lista
function addElement({ name, url, id }) {
  // Cria os elementos HTML necessários
  const li = document.createElement('li');
  li.id = id;

  const a = document.createElement("a");
  const editButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  // Define os atributos e conteúdo dos elementos
  a.href = url;
  a.innerHTML = name;
  a.target = "_blank";

  editButton.textContent = 'Editar';
  editButton.classList.add('edit-button'); // Adiciona a classe para estilizar como botão
  editButton.addEventListener('click', () => {
    updateElement({ name, url, id });
  });

  deleteButton.textContent = 'x';
  deleteButton.classList.add('delete-button'); // Adiciona a classe para estilizar como botão
  deleteButton.addEventListener('click', () => {
    removeElement(li);
    fetch(`http://localhost:3000/?name=${name}&url=${url}&del=1/`);
  });

  // Adiciona os elementos na lista
  ul.append(li);
  li.append(a);

  // Cria um contêiner para os botões "Editar" e "Excluir" e os adiciona ao contêiner
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');
  buttonContainer.append(editButton, deleteButton);

  li.append(buttonContainer);
}

// Função para remover um elemento da lista
function removeElement(element) {
  if (confirm('Tem certeza que deseja deletar?')) {
    element.remove();
  }
}

// Função para atualizar um elemento da lista
function updateElement({ name, url, id }) {
  const li = document.getElementById(id);
  const newName = prompt("Digite o novo nome:", name);
  const newUrl = prompt("Digite a nova URL:", url);

  if (!newName || !newUrl) {
    alert("Nome e URL devem ser preenchidos!");
    return;
  }

  li.children[0].innerHTML = newName;
  li.children[0].href = newUrl;
  li.children[1].onclick = () => {
    removeElement(li.children[1]);
    fetch(`http://localhost:3000/?name=${newName}&url=${newUrl}&del=1/`);
  };
}

// Event listener para o formulário de adicionar elementos
form.addEventListener('submit', (event) => {
  event.preventDefault();

  let { value } = input;

  if (!value)
    return alert('Preencha o campo!');

  const [name, url] = value.split(',');

  if (!url)
    return alert('O texto não está formatado da maneira correta.');

  if (!/^http/.test(url))
    return alert('Digite a URL corretamente.');

  addElement({ name, url });

  input.value = '';

  fetch(`http://localhost:3000/?name=${name}&url=${url}/`);
});
