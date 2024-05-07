
## MODAL BOOTSTRAP
O modal é uma parte essencial do Bootstrap, uma estrutura de design front-end amplamente utilizada. Ele é um componente que cria uma janela modal sobreposta à página atual, oferecendo uma forma de exibir conteúdo de forma temporária e focada.

Vamos dar uma olhada nas principais partes do modal no exemplo que configurei:

1 - Botão de acionamento do modal:

Este é o botão que aciona a exibição do modal. Ele possui os atributos data-toggle="modal" e data-target="#modalAdicionarLivro". Isso indica ao Bootstrap que, quando este botão é clicado, ele deve abrir o modal com o ID especificado em data-target.

```html
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalAdicionarLivro">
    Adicionar Livro
</button>
```

2 - Estrutura do modal:

Essa é a estrutura básica do modal. Ele é composto por três elementos principais: modal-dialog, modal-content e modal-header. O atributo id define o identificador único do modal, que é usado para vincular o botão de acionamento ao modal. Quando o botão de acionamento é clicado, o modal com o ID correspondente é exibido.

```html
<div class="modal fade" id="modalAdicionarLivro" tabindex="-1" role="dialog" aria-labelledby="modalAdicionarLivroLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <!-- Conteúdo do modal vai aqui -->
        </div>
    </div>
</div>

```

3 - Conteúdo do modal:

O conteúdo do modal pode incluir um cabeçalho (modal-header), um corpo (modal-body) e um rodapé (modal-footer). No exemplo, temos um título no cabeçalho e um formulário no corpo. O botão com a classe close no cabeçalho permite fechar o modal quando clicado.

```html
<div class="modal-header">
    <h5 class="modal-title" id="modalAdicionarLivroLabel">Adicionar Livro</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
<div class="modal-body">
    <!-- Conteúdo do formulário para adicionar livro aqui -->
</div>

```

4 - Scripts do Bootstrap:

Para que o modal funcione corretamente, é necessário incluir os scripts do jQuery e do Bootstrap JavaScript no final do documento HTML.


```html
<!-- jQuery e Bootstrap JavaScript -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

```

Em resumo, o modal do Bootstrap oferece uma maneira elegante e responsiva de exibir conteúdo temporário e focado em uma página da web, e é amplamente utilizado em muitos projetos web modernos.

[Link Modal Boostrap](https://getbootstrap.com/docs/4.0/components/modal/)

## FETCH

O fetch é uma API do JavaScript usada para fazer requisições HTTP (como GET, POST, PUT, DELETE etc.) de forma assíncrona, ou seja, sem bloquear a execução do código subsequente. Ele oferece uma maneira mais moderna e flexível de fazer solicitações de rede em comparação com métodos mais antigos, como XMLHttpRequest (XHR).

Aqui está um exemplo básico de como usar o fetch para fazer uma requisição GET:

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    // Verifica se a resposta está ok (status HTTP 200-299)
    if (!response.ok) {
      throw new Error('Erro ao fazer a requisição: ' + response.status);
    }
    // Converte a resposta para JSON
    return response.json();
  })
  .then(data => {
    // Manipula os dados recebidos
    console.log(data);
  })
  .catch(error => {
    // Captura e trata erros de rede ou outros erros
    console.error('Erro:', error);
  });

```

- Usamos o fetch para fazer uma requisição GET para o URL especificado ('https://api.example.com/data').
- O método fetch retorna uma promessa que será resolvida quando a requisição for concluída, seja com sucesso ou com erro.
- Usamos o método .then() para lidar com a resposta da requisição. Se a resposta estiver ok (status HTTP 200-299), usamos o método .json() para extrair e analisar o corpo da resposta como JSON.
- Usamos outro .then() para manipular os dados recebidos da requisição. Neste exemplo, apenas os imprimimos no console, mas você pode fazer o que quiser com eles.
- Usamos .catch() para capturar e tratar qualquer erro que ocorra durante a requisição ou análise dos dados.

É importante notar que o fetch segue o modelo de promessas do JavaScript, o que significa que você pode encadear vários .then() para manipular diferentes etapas do processo de requisição. Isso torna o fetch muito flexível e poderoso para lidar com chamadas de API assíncronas.