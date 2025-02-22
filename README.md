<h1 align="center">
    <img alt="Curso Starter JS" src="https://github.com/lurafael/starter-es6-rocketseat/blob/master/images/logo-starter.svg" width="400px" />
</h1>

<h3 align="center">
  Curso Starter Rocketseat - ES6+
</h3>

<blockquote align="center">“Faça seu melhor, mas sempre com prazo de entrega!”</blockquote>

<p align="center">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%23F8952D">
  </a>

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

## 1. Desafio 1 - Conceitos

- [x] 1 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-es6-rocketseat/blob/master/01-conceitos/01-classes.js) :heavy_check_mark:
    
```
        Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
        extender uma segunda classe chamada "Usuario".

        A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
        em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
        repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
        true na classe.

        Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
        retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.
                
        const User1 = new Usuario('email@teste.com', 'senha123');
        const Adm1 = new Admin('email@teste.com', 'senha123');
        console.log(User1.isAdmin()) // false
        console.log(Adm1.isAdmin()) // true

```

<br>

- [x] 2 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-es6-rocketseat/blob/master/01-conceitos/02-arrays.js) :heavy_check_mark:
    
```
        A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):
                
        const usuarios = [
                { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
                { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
                { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
        ];


        2.1 Utilizando o map
                Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]


        2.2 Utilizando o filter
                Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com 
                mais de 18 anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]


        2.3 Utilizando o find
                Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined


        2.4 Unindo operações
                Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que
                possuem no máximo 50 anos:
                
                Resultado:
                
                [
                        { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
                        { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' }
                ];

```

<br>

- [x] 3 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-es6-rocketseat/blob/master/01-conceitos/03-conversao.js) :heavy_check_mark:
    
```
        Converta as funções nos seguintes trechos de código em Arrow Functions:
        
        3.1
                
                const arr = [1, 2, 3, 4, 5];

                arr.map(function(item) {
                        return item + 10;
                });

        3.2
                Dica: Utilize uma constante pra function
                        
                const usuario = { nome: 'Diego', idade: 23 };

                function mostraIdade(usuario) {
                        return usuario.idade;
                }
                
                mostraIdade(usuario);

        3.3
                Dica: Utilize uma constante pra function
                        
                const nome = "Diego";
                const idade = 23;
                
                function mostraUsuario(nome = 'Diego', idade = 18) {
                        return { nome, idade };
                }

                mostraUsuario(nome, idade);
                mostraUsuario(nome);

        3.4

                const promise = function() {
                        return new Promise(function(resolve, reject) {
                                return resolve();
                        })
                }

```

<br>

- [x] 4 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-es6-rocketseat/blob/master/01-conceitos/04-desestruturacao.js) :heavy_check_mark:
    
```

        4.1 Desestruturação simples
                A partir do seguinte objeto:

                const empresa = {
                        nome: 'Rocketseat',
                        endereco: {
                        cidade: 'Rio do Sul',
                        estado: 'SC',
                        }
                };

                Utilize a desestruturação para transformar as propriedades nome, cidade e estado em 
                variáveis, no fim deve ser possível fazer o seguinte:

                console.log(nome); // Rocketseat
                console.log(cidade); // Rio do Sul
                console.log(estado); // SC

        4.2 Desestruturação em parâmetros
                Na seguinte função:

                function mostraInfo(usuario) {
                        return `${usuario.nome} tem ${usuario.idade} anos.`;
                }

                mostraInfo({ nome: 'Diego', idade: 23 })

                Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
                separadamente e a função poder retornar apenas:
                return `${nome} tem ${idade} anos.`;
```

<br>

- [x] 5 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-es6-rocketseat/blob/master/01-conceitos/05-restSpread.js) :heavy_check_mark:
    
```

        5.1 Rest
                A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe
                a primeira posição do vetor e outra variável y que recebe todo restante dos dados.

                console.log(x); // 1
                console.log(y); // [2, 3, 4, 5, 6]

                Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
                
                // function soma...
                console.log(soma(1, 2, 3, 4, 5, 6)); // 21
                console.log(soma(1, 2)); // 3


        5.2 Spread
                A partir do objeto e utilizando o operador spread:
                
                const usuario = {
                        nome: 'Diego',
                        idade: 23,
                        endereco: {
                                cidade: 'Rio do Sul',
                                uf: 'SC',
                                pais: 'Brasil',
                        }
                };
                
                Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
                Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.

```

<br>

- [x] 6 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-es6-rocketseat/blob/master/01-conceitos/06-templateLiterals.js) :heavy_check_mark:
    
```
        Converta o seguinte trecho de código utilizando Template Literals:
        
        const usuario = 'Diego';
        const idade = 23;
        console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');

```

<br>

- [x] 7 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-es6-rocketseat/blob/master/01-conceitos/07-sintaxeCurta.js) :heavy_check_mark:
    
```

        Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
        
        const nome = 'Diego';
        const idade = 23;
        const usuario = {
                nome: nome,
                idade: idade,
                cidade: 'Rio do Sul',
        };

```

<br>

## 2. Desafio 2 - Webpack Server

- [x] 1 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-es6-rocketseat/blob/master/02-webpack/main.js) :heavy_check_mark:
    
```
        Crie um arquivo chamado functions.js com o seguinte conteúdo:
        export const idade = 23;
        export default class Usuario {
                static info() {
                        console.log('Apenas teste');
                }
        }

        1.1 
                Agora em seu arquivo principal import apenas a classe Usuario renomeando-a para
                ClasseUsuario e chame a funão info();


        1.2 
                Em seu arquivo principal importe a variável de idade e exiba a mesma em tela;


        1.3 
                Em seu arquivo principal importe tanto a classe quanto a variável idade e renomeie
                a variável idade para IdadeUsuario.

```

<br>

## 3. Desafio 3 - Async/await

- [x] 1 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-es6-rocketseat/blob/master/03-asyncAwait/asyncAwait.js) :heavy_check_mark:
    
```
        Todos os exercícios abaixo necessitam que você esteja com o plugin do Async/Await do Babel e o
        babel-polyfill devidamente configurados. Em alguns exercícios é necessário instalar o Axios.
        
        Exercício
        Transforme os seguintes trechos de código utilizando async/await:

        //1.1
        const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
        function umPorSegundo() {
                delay().then(() => {
                console.log('1s');
                        delay().then(() => {
                        console.log('2s');
                                delay().then(() => {
                                console.log('3s');
                                });
                         })
                });
        }
        umPorSegundo();

        //1.2
        import axios from 'axios';

        function getUserFromGithub(user) {
                axios.get(`https://api.github.com/users/${user}`)
                        .then(response => {
                                console.log(response.data);
                        })
                        .catch(err => {
                                console.log('Usuário não existe');
                        })
        }
        
        getUserFromGithub('diego3g');
        getUserFromGithub('diego3g124123');

```

<br>

## 4. Desafio 4 - Aplicação com ES6+

[Clique aqui para acessar o site](https://repositoryfinder.netlify.app/) :heavy_check_mark:

[Clique aqui para ver os arquivos do app](https://github.com/lurafael/starter-es6-rocketseat/blob/master/04-app-es6) :heavy_check_mark:

![Foto do app de To-dos](https://github.com/lurafael/starter-es6-rocketseat/blob/master/images/image-app.png)

<br>

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.

---

Feito com :purple_heart: by [Rocketseat](https://rocketseat.com.br) :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)

