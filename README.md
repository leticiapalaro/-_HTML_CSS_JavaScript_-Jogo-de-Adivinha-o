<div align="center">
<h1>
<img height="300vh" src="https://github.com/leticiapalaro/-_html-css-javascript_-jogo-de-adivinhacao/blob/main/imagens/van-mist%C3%A9rios.png?raw=true">
<br>Projeto: Jogo de Adivinhação.</h1>

Jogo de adivinhação criado usando a tríade do desenvolvimento web: HTML, CSS e Java Script.

<h2>Regras</h2>

★ Tente acertar o número misterioso!

★ Escolha um número em um intervalo de 0 a 10.

★ Você pode tentar quantas vezes quiser até acertar, será contabilizado seu número de tentativas. 

★ Tente conseguir com o menor número de tentativas possíveis.

★ Caso insira algo diferente do proposto será apresentada uma mensagem de erro dinâmica.

Para ver o projeto funcionando online, [CLIQUE AQUI](https://leticiapalaro.github.io/-_html-css-javascript_-jogo-de-adivinhacao/).

Faça o download do repositório, [CLIQUE AQUI](https://github.com/leticiapalaro/-_html-css-javascript_-jogo-de-adivinhacao/archive/refs/heads/main.zip).


<h2>Prévia</h2>

<img src="https://github.com/leticiapalaro/-_html-css-javascript_-jogo-de-adivinhacao/blob/main/imagens/pr%C3%A9via.png?raw=true">

</div>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://github.com/leticiapalaro/-_html-css-javascript_-jogo-de-adivinhacao/blob/main/style.css">
    
    <!-- Dados do Projeto -->
    <meta name="Project" content="Imersão Dev_ Alura">
    <meta name="Lesson" content="Aula 03: Mentalista">
    <meta name="Author" content="Letícia Palaro">
    
    <!-- Fontes -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet">
    
    <title>Revele o Mistério</title>
</head>

<body>
  <main>
    <div class="container">
      <h1><img src="https://gitlab.com/leticiapalaro/imersao-dev_5-alura/-/raw/main/Imagens/header.png" id="logo-projeto"></h1>
      <div class="substituir">
        <h2>Descubra o número secreto!</h2>
        <label for="numero-chute" id="label-numero-chute">Escolha um número entre 0 e 10: </label>
        <input type="number" id="numero-chute"> <!-- não será utilizado min, max ou required intencionalmente -->
        <button type="submit" id="chute-button">Chutar</button>
      </div>
      <div id="area-resultado">Esperando você tentar...</div>
    </div>
  </main>
  <script src="https://github.com/leticiapalaro/-_html-css-javascript_-jogo-de-adivinhacao/blob/main/main.js"></script>
</body>
</html>