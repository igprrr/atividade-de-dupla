const ul = document.querySelector('ul');
const input = document.querySelector('input');
const form = document.querySelector('form');

// Função que carrega o conteúdo da API.
async function load() {
  const res = await fetch('http://localhost:3000/').then(data => data.json());
  res.urls.map(({ name, url, id }) => addElement({ name, url, id }));
}

load();

function addElement({ name, url, id }) {
  const li = document.createElement('li');
  li.id = id;

  const a = document.createElement("a");
  const trash = document.createElement("span");
  const editButton = document.createElement('button');

  a.href = url;
  a.innerHTML = name;
  a.target = "_blank";

  trash.innerHTML = "x";
  trash.onclick = () => {
    removeElement(li);
    fetch(`http://localhost:3000/?name=${name}&url=${url}&del=1/`);
  };

  editButton.textContent = 'Editar';
  editButton.addEventListener('click', () => {
    updateElement({ name, url, id });
  });

  ul.append(li);
  li.append(a);
  li.append(trash);
  li.append(editButton);
}

function removeElement(element) {
  if (confirm('Tem certeza que deseja deletar?')) {
    element.remove();
  }
}

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
