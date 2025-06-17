// Adiciona um efeito ao passar o mouse nas imagens da galeria
document.querySelectorAll('.espaco-foto').forEach(foto => {
    foto.addEventListener('mouseenter', () => {
        foto.style.transform = 'scale(1.1)';
    });
    foto.addEventListener('mouseleave', () => {
        foto.style.transform = 'scale(1)';
    });
});

//Efeito para adicionar a lista novos elementos
function adicionar(){
    //adicionar o prompt
    var UC = prompt("Adicione a UC");
    if (UC != null){
        //pega a lista pelo ID
        var list = document.getElementById('list');
        //cria um novo espaço na lista
        var itemNovo = document.createElement('li');
        //adciona no novo elemento o nome colocado no prompt
        itemNovo.innerHTML = UC;
        //"movimenta" o novo item até sua nova posição?
        list.appendChild(itemNovo); 
    }
}

// Função para mover o item para cima
function moveUp(button) {
  const listItem = button.closest('li');
  const previousItem = listItem.previousElementSibling;
  if (previousItem) {
    listItem.parentNode.insertBefore(listItem, previousItem);
  }
}

// Função para mover o item para baixo
function moveDown(button) {
  const listItem = button.closest('li');
  const nextItem = listItem.nextElementSibling;
  if (nextItem) {
    listItem.parentNode.insertBefore(nextItem, listItem);
  }
}