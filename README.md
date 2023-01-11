# Contador

Esse é um contador feito com _**HTML, CSS e JS**_

## O porquê desse projeto

Esse é um mini-projeto criado para focar no meu aprendizado de git e github. Desde o básico até o avançado

### Funcionalidades

- [x] Botões de adicionar '1' e Subtrair '1' da contagem

#### Linguagens do projeto

* HTML
* CSS
* JS

#### Funcionalidades a desenvolver

- [] 1. Botão de resetar contagem
- [] 2. Botão de salvar contagem
- [] 3. Link das minhas redes-sociais
    1. instagram
    2. github
    3. e-mail

#### Scripts usados
```javascript
let input = document.getElementById("value");

let maisUm = () => {
    let value = parseInt(input.textContent);
    input.innerText = value + 1;
    console.log(value)
}
let menosUm = () => {
    let value = parseInt(input.textContent);
    input.innerText = value - 1;
    console.log(value)
}
```