# Introdução ao HTML

HTML (HyperText Markup Language) é a linguagem de marcação padrão para documentos projetados para serem exibidos em um navegador da web.

## Estrutura básica de um documento HTML
Um documento HTML básico tem uma estrutura específica que inclui várias tags necessárias. Aqui está a estrutura básica de um documento HTML:

Explicação das tags:

- `<!DOCTYPE html>`: Esta declaração define o documento para ser HTML5.
- `<html>`: Este é o elemento raiz de uma página HTML.
- `<head>`: Este elemento contém metainformações sobre o documento HTML, como seu título e links para scripts e folhas de estilo.
- `<title>`: Este elemento especifica o título do documento, que é exibido na barra de título do navegador ou na guia da página.
- `<body>`: Este elemento contém o conteúdo principal do documento HTML, como texto, imagens, links, tabelas, listas, etc.

Essa é a estrutura mais básica de um documento HTML. Você pode adicionar muitos outros elementos e atributos para criar uma página da web mais complexa e interativa.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Título da página</title>
    </head>
    <body>
        Conteúdo da página
    </body>
</html>
```

### Tags de Estrutura da Página



#### `<header> ` - Cabeçalho
A tag `<header>` em HTML é usada para definir a seção de cabeçalho de uma página da web ou de uma seção dentro da página. O cabeçalho geralmente contém um logotipo, o título do site e uma barra de navegação com links para diferentes partes do site. É importante notar que uma página da web pode ter vários elementos `<header>`, por exemplo, um para a página inteira e outros para diferentes seções da página. No entanto, não é apropriado colocar o elemento `<header>` dentro dos elementos `<footer>`, `<address>` ou outro `<header>`. Aqui está um exemplo de como ele pode ser usado:

```html
<header>
    <h1>Meu Site</h1>
    <nav>
        <ul>
            <li><a href="#">Página Inicial</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </nav>
</header>
```

#### `nav` - Navegação
A tag `<nav>` em HTML é usada para definir um conjunto de links de navegação. Geralmente, essa tag é usada dentro da tag <header>, mas também pode ser usada em outras partes da página. A tag `<nav>` é útil para a acessibilidade, pois permite que as tecnologias assistivas identifiquem onde estão os principais links de navegação.

Aqui está um exemplo de como a tag `<nav>` pode ser usada:
```html
<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
    </ul>
</nav>
```

#### `<footer> ` - Rodapé
A tag `<footer>` em HTML é usada para definir a seção de rodapé de uma página da web ou de uma seção dentro da página. O rodapé geralmente contém informações como o autor da página, direitos autorais, links para termos de uso, política de privacidade, informações de contato, etc. Assim como a tag `<header>`, uma página da web pode ter vários elementos `<footer>`, um para a página inteira e outros para diferentes seções da página.

Aqui está um exemplo de como a tag `<footer>` pode ser usada:
```html
<footer>
    <p>&copy; 2022 Meu Site. Todos os direitos reservados.</p>
</footer>
```

#### `<section> ` - Seção
A tag `<section>` em HTML é usada para definir uma seção em um documento HTML. Ela é usada para agrupar conteúdo temático, geralmente incluindo um cabeçalho de seção. Cada `<section>` deve ser identificável, normalmente começando com um elemento de cabeçalho (h1-h6).

A tag `<section>` é uma maneira semântica de dividir sua página em partes distintas. Ela pode ser usada com as tags `<header>`, `<footer>`, `<nav>`, e `<article>` para definir o layout da página.

Aqui está um exemplo de como a tag `<section>` pode ser usada:
```html
<section>
    <h2>Sobre</h2>
    <p>Esta é a seção sobre o meu site.</p>
</section>
```


#### `<article> ` - Artigo
A tag `<article>` em HTML é usada para encapsular um conteúdo autônomo em um documento HTML. Este conteúdo deve fazer sentido por si só e ser capaz de ser distribuído independentemente do restante do site. Exemplos comuns de uso da tag `<article>` incluem postagens de blog, notícias, comentários ou qualquer outro item de conteúdo independente.

Aqui está um exemplo de como a tag `<article>` pode ser usada:
```html
<article>
    <h2>Notícia</h2>
    <p>Esta é uma notícia recente.</p>
</article>
```

#### `<aside> ` - Lateral
A tag `<aside>` em HTML é usada para representar uma seção de uma página que consiste em conteúdo que é tangencialmente relacionado ao conteúdo ao redor da tag `<aside>`, e que pode ser considerado separado do conteúdo ao redor. Essa tag pode ser usada para coisas como barras laterais, inserções, ou conteúdo suplementar.

Aqui está um exemplo de como a tag `<aside>` pode ser usada:
```html
<aside>
    <h3>Anúncio</h3>
    <p>Confira nossa promoção especial!</p>
</aside>
```


### Tags de Componentes
A tag `<h1>` em HTML é usada para definir o título mais importante ou o título de nível mais alto em uma página da web. Geralmente, é usado para o título principal da página ou para o título de uma seção importante dentro da página.

É uma boa prática de SEO (Search Engine Optimization) usar a tag `<h1>` para o título principal da página, pois os motores de busca usam essa tag para entender do que se trata a página. Além disso, para uma boa estrutura de documento, deve haver apenas uma tag `<h1>` por página.

Aqui está um exemplo de como a tag `<h1>` pode ser usada:

#### `<h1> a <h6> ` - Títulos
```html
<h1>Título de nível 1</h1>
<h2>Título de nível 2</h2>
<h3>Título de nível 3</h3>
<h4>Título de nível 4</h4>
<h5>Título de nível 5</h5>
<h6>Título de nível 6</h6>
```

#### `<p> ` - Parágrafos
A tag `<p>` em HTML é usada para definir um parágrafo. O navegador automaticamente adiciona algum espaço antes e depois de cada elemento `<p>`. O texto dentro de um elemento `<p>` é considerado texto normal e não tem nenhuma formatação especial além das que são aplicadas através de CSS ou atributos globais como class ou id.

Aqui está um exemplo de como a tag `<p>` pode ser usada:
```html
<p>Este é um parágrafo de texto.</p>
```

#### `<a> ` - Links
A tag `<a>` em HTML é usada para criar hiperlinks, que permitem aos usuários navegar de uma página da web para outra. O atributo href da tag `<a>` define o URL para o qual o link aponta. O texto entre as tags de abertura e fechamento `<a> e </a>` é o texto que será clicável pelo usuário.

Aqui está um exemplo de como a tag `<a>` pode ser usada:
```html
<a href="https://www.example.com">Clique aqui</a> para visitar o site.
```

#### `<img> ` - Imagens
A tag `<img>` em HTML é usada para incorporar uma imagem em uma página da web. A tag `<img>` tem dois atributos obrigatórios:

src: Especifica o caminho para a imagem.
alt: Fornece um texto alternativo para a imagem, que será exibido se a imagem não puder ser carregada. Este atributo também é importante para a acessibilidade, pois é usado por tecnologias assistivas para descrever a imagem para usuários com deficiência visual.

Aqui está um exemplo de como a tag `<img>` pode ser usada:
```html
<img src="image.jpg" alt="Descrição da imagem">
```

#### `<video> ` - Vídeos
A tag `<video>` em HTML é usada para incorporar conteúdo de vídeo em uma página da web. A tag `<video>` tem vários atributos, mas o mais comum é o src, que especifica o caminho para o arquivo de vídeo.

Outros atributos comuns incluem:

controls: Este atributo adiciona controles de reprodução de vídeo, como play, pause e volume.
autoplay: Este atributo faz o vídeo começar a tocar assim que estiver pronto.
loop: Este atributo faz o vídeo começar novamente, do início, sempre que termina.
muted: Este atributo silencia o vídeo por padrão.

Aqui está um exemplo de como a tag `<video>` pode ser usada:
```html
<video src="video.mp4" controls></video>
```

#### `<audio> ` - Áudio
A tag `<audio>` em HTML é usada para incorporar conteúdo de áudio em uma página da web. A tag `<audio>` tem vários atributos, mas o mais comum é o src, que especifica o caminho para o arquivo de áudio.

Outros atributos comuns incluem:

- `controls`: Este atributo adiciona controles de reprodução de áudio, como play, pause e volume.
- `autoplay`: Este atributo faz o áudio começar a tocar assim que estiver pronto.
- `loop`: Este atributo faz o áudio começar novamente, do início, sempre que termina.
- `muted`: Este atributo silencia o áudio por padrão.

Aqui está um exemplo de como a tag `<audio>` pode ser usada:
```html
<audio src="audio.mp3" controls></audio>
```

#### `<ul> e <li> ` - Listas não ordenadas
As tags `<ul> e <li>` em HTML são usadas para criar listas não ordenadas.

A tag <ul> é usada para definir a lista em si e a tag `<li>` é usada para definir cada item da lista. O termo "não ordenada" significa que os itens da lista não são numerados ou ordenados de qualquer maneira específica, mas são geralmente marcados com um ponto de bala.

Aqui está um exemplo de como as tags `<ul> e <li>` podem ser usadas:
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

#### `<ol> e <li> ` - Listas ordenadas
As tags `<ol> e <li>` em HTML são usadas para criar listas ordenadas.

A tag `<ol>` é usada para definir a lista em si e a tag `<li>` é usada para definir cada item da lista. O termo "ordenada" significa que os itens da lista são numerados.

Aqui está um exemplo de como as tags `<ol> e <li>` podem ser usadas:
```html
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
```

Você pode alterar o tipo de marcador em uma lista ordenada (`<ol>`) usando o atributo type na tag `<ol>`. O atributo type pode ter os seguintes valores:

`1` para números (padrão)
`A` para letras maiúsculas
`a` para letras minúsculas
`I` para números romanos maiúsculos
`i` para números romanos minúsculos

Aqui está um exemplo de como você pode usar o atributo type para alterar o marcador de lista para letras maiúsculas:
```html
<ol type="A">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
```

Neste exemplo, os itens da lista serão marcados com `'A', 'B', 'C'`, etc.

#### `<table> ` - Tabelas
A tag `<table>` em HTML é usada para criar uma tabela. Uma tabela é definida com a tag `<table>` e consiste em linhas de tabela, que são definidas com a tag `<tr>`, e as células da tabela, que são definidas com as tags `<td>` ou `<th>`.

`<tr>`: Define uma linha em uma tabela.
`<td>`: Define uma célula em uma tabela. Esta tag é usada para inserir dados na tabela.

`<th>`: Define uma célula de cabeçalho em uma tabela. O texto dentro de `<th>` é negrito e centralizado por padrão.
Aqui está um exemplo de como a tag `<table>` pode ser usada:

```html
<table>
    <tr>
        <th>Nome</th>
        <th>Idade</th>
    </tr>
    <tr>
        <td>João</td>
        <td>25</td>
    </tr>
    <tr>
        <td>Maria</td>
        <td>30</td>
    </tr>
</table>
```

#### `<div> ` - Divisões
A tag `<div>` em HTML é usada para agrupar outros elementos HTML em um único bloco. Esta tag é frequentemente usada como um contêiner para outros elementos HTML para que eles possam ser formatados com CSS ou manipulados com scripts.

A tag `<div>` não tem significado semântico por si só, e é usada puramente para fins de estilo e estrutura. Ela não adiciona nenhuma apresentação visual por si só, mas pode ser estilizada usando CSS.

Aqui está um exemplo de como a tag `<div>` pode ser usada:
```html
<div>
    <h3>Seção 1</h3>
    <p>Conteúdo da seção 1</p>
</div>
```

#### `<span> ` - Span
A tag `<span>` em HTML é usada para agrupar um trecho de texto ou outros elementos inline para fins de estilo ou manipulação com JavaScript. Semelhante à tag `<div>`, a tag `<span>` não tem significado semântico por si só e não altera a apresentação do conteúdo dentro dela, a menos que seja estilizada com CSS ou manipulada com JavaScript.

Aqui está um exemplo de como a tag `<span>` pode ser usada:
```html
<p>Este é um <span style="color: red;">texto em vermelho</span>.</p>
```

#### `<strong> e <em> ` - Texto em negrito e itálico
As tags `<<strong> e <em>`< em HTML são usadas para dar ênfase ao texto.

`<strong>`<: Esta tag é usada para indicar que o texto é de grande importância. Por padrão, os navegadores geralmente exibem o texto dentro de uma tag `<strong>`< em negrito.

`<em>`<: Esta tag é usada para indicar ênfase. Por padrão, os navegadores geralmente exibem o texto dentro de uma tag `<em>`< em itálico.

Aqui está um exemplo de como as tags `<strong> e <em>`< podem ser usadas:


```html
<p>Este é um texto <strong>em negrito</strong> e este é um texto <em>em itálico</em>.</p>
```

#### `<code> ` - Código
A tag `<code>` em HTML é usada para exibir um trecho de código de computador. O texto dentro de uma tag `<code>` é exibido em uma fonte monoespaçada por padrão, que é a mesma fonte usada para exibir texto em um elemento `<pre>`.

Aqui está um exemplo de como a tag `<code>` pode ser usada:
```html
<p>Para imprimir uma mensagem no console, use o comando <code>console.log('Olá, mundo!');</code></p>
```

#### `<br> ` - Quebra de linha
A tag `<br>` em HTML é usada para inserir uma quebra de linha. Ela é uma tag vazia, o que significa que não tem uma tag de fechamento.

Aqui está um exemplo de como a tag `<br>` pode ser usada:
```html
<p>Este é um texto.<br>Este é outro texto.</p>
```

#### `<hr> ` - Linha horizontal
A tag `<hr>` em HTML é usada para inserir uma linha horizontal, que pode ser usada como uma quebra temática entre parágrafos de texto. A tag `<hr>` é uma tag vazia, o que significa que não tem uma tag de fechamento.

Aqui está um exemplo de como a tag `<hr>` pode ser usada:
```html
<p>Este é um parágrafo.</p>
<hr>
<p>Este é outro parágrafo.</p>
```

#### `<iframe> ` - Quadro embutido
A tag `<iframe>` em HTML é usada para incorporar outro documento HTML dentro do documento atual. O atributo src é usado para especificar o URL do documento que deve ser incorporado.

Aqui está um exemplo de como a tag `<iframe>` pode ser usada:
```html
<iframe src="https://www.example.com"></iframe>
```

#### `<input> ` - Campos de Entrada
A tag `<input>` em HTML é usada para criar campos de entrada interativos para entrada de dados do usuário. Existem vários tipos de campos de entrada que você pode criar usando a tag `<input>`, incluindo campos de texto, botões de rádio, caixas de seleção, campos de senha, botões, entre outros.

Os atributos mais comuns usados com a tag `<input>` são:

- `type`: Especifica o tipo de campo de entrada a ser criado. Pode ser `"text", "radio", "checkbox", "password", "button", "submit", "email", "number"`, entre outros.
- `name`: Especifica o nome do campo de entrada.
- `value`: Especifica o valor inicial do campo de entrada.
- `id`: Especifica um id único para o campo de entrada.


Aqui está um exemplo de como a tag `<input>` pode ser usada:
```html
<form>
    <label for="fname">Nome:</label><br>
    <input type="text" id="fname" name="fname"><br>
    <input type="submit" value="Enviar">
</form>
```

#### `<button> ` - Botões
A tag `<button>` em HTML é usada para criar um botão clicável. O texto entre as tags de abertura e fechamento `<button>` é o rótulo do botão.

Aqui está um exemplo de como a tag `<button>` pode ser usada:
```html
<button>Clique aqui</button>
```

#### `<select> e <option> ` - Listas suspensas
As tags `<select>` e `<option>` em HTML são usadas para criar uma lista suspensa de opções que o usuário pode selecionar.

A tag `<select>` é usada para criar o contêiner da lista suspensa, e cada tag `<option>` dentro do `<select>` representa uma opção que o usuário pode escolher.

Cada tag `<option>` pode ter um atributo value, que é o valor que é enviado quando o formulário é submetido. O texto entre a tag de abertura `<option>` e a tag de fechamento `</option>` é o que o usuário vê na lista suspensa.

Aqui está um exemplo de como as tags `<select> e <option>` podem ser usadas:
```html
<select>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
</select>
```

#### `<datalist> e <option> ` - Listas de sugestões
Os elementos `<datalist>` e `<option>` em HTML são usados para fornecer uma lista de sugestões para um campo de entrada.

A tag `<datalist>` é usada em conjunto com um elemento `<input>` que tem um atributo list, que deve ser o mesmo que o atributo id do `<datalist>`.

Cada tag `<option>` dentro do `<datalist>` representa uma opção que o usuário pode escolher.

Aqui está um exemplo de como as tags `<datalist> e <option>` podem ser usadas:
```html
<input list="browsers">
<datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
</datalist>
```

#### `<textarea> ` - Áreas de texto
O elemento `<textarea>` em HTML é usado para criar uma área de texto para entrada de texto de várias linhas. É útil quando você deseja que os usuários forneçam informações mais longas, como comentários, revisões ou qualquer entrada que possa exceder uma única linha.

Os atributos mais comuns usados com a tag `<textarea>` são:

- `rows`: Especifica o número de linhas visíveis na área de texto.
- `cols`: Especifica o número de caracteres visíveis por linha na área de texto.
- `name`: Especifica o nome da área de texto.

Aqui está um exemplo de como a tag `<textarea>` pode ser usada:
```html
<textarea rows="4" cols="50">
Digite algo aqui...
</textarea>
```

#### `<label>` - Rótulos
O elemento `<label>` em HTML é usado para fornecer um rótulo para elementos de entrada como `<input>, <meter>, <progress>, <select>, ou <textarea>`.

O atributo for na tag `<label>` associa o rótulo a um elemento de entrada específico. O valor do atributo for deve ser o mesmo que o valor do atributo id do elemento de entrada ao qual o rótulo está associado.

Aqui está um exemplo de como a tag `<label>` pode ser usada:
```html
<label for="fname">Nome:</label>
<input type="text" id="fname" name="fname">

```

### Tags de Formulário

#### `<form>` - Formulário
A tag `<form>` em HTML é usada para criar um formulário para entrada do usuário. Um formulário pode conter elementos de entrada como campos de texto, caixas de seleção, botões de rádio, botões de envio e muito mais.

Os atributos mais comuns usados com a tag `<form>` são:

- `action`: Especifica a URL para onde os dados do formulário devem ser enviados quando o formulário é submetido.
- `method`: Especifica o método HTTP usado ao enviar os dados do formulário. Pode ser "get" (padrão) ou "post".

Aqui está um exemplo de como a tag `<form>` pode ser usada:
```html
<form action="/submit_form" method="post">
    <label for="fname">Nome:</label><br>
    <input type="text" id="fname" name="fname"><br>
    <input type="submit" value="Enviar">
</form>
```
