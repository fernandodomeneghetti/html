document.addEventListener('DOMContentLoaded', function() {

    const urlbackend = "http://localhost:3000/livros";

    function carregarLivros() {
        fetch(urlbackend)
            .then(response => response.json())
            .then(data => {
                const livrosBody = document.getElementById('livros');
                livrosBody.innerHTML = '';

                data.forEach(livro => {
                    const disponibilidade = livro.disponivel ? 'Sim' : 'Não';
                    const row = `
                        <tr>
                            <td>${livro.nome}</td>
                            <td>${livro.autor}</td>
                            <td>${disponibilidade}</td>
                        </tr>
                        <td>
                            <button class="btn btn-danger btn-devolver" data-id="${livro.id}">Devovler Livro</button>
                            <button class="btn btn-success btn-retirar" data-id="${livro.id}">Retirar Livro</button>
                        </td>
                    `;

                    livrosBody.innerHTML += row;
                })
            })
            .catch(error => console.log('Erro ao carregar livros: ', error))
    }

    carregarLivros()
})