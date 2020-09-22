<h1 align="center">
    <img alt="Curso Starter JS" src="https://raw.githubusercontent.com/lurafael/starter-javascript-rocketseat/335d2b52f54109736e95226e949d6877e697f742/images/logo-starter.svg" width="400px" />
</h1>

<h3 align="center">
  Curso Starter Rocketseat - JavaScript
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

- [x] 1.2 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-es6-rocketseat/blob/master/01-conceitos/02-arrays.js) :heavy_check_mark:
    
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
        Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
        anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

        2.3 Utilizando o find
        Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

        2.4 Unindo operações
        Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
        no máximo 50 anos:
        
        Resultado:
        
                [
                        { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
                        { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' }
                ];

```

<br>

- [x] 1.3 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-es6-rocketseat/blob/master/01-conceitos/03-conversao.js) :heavy_check_mark:
    
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

- [x] 1.4 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-javascript-rocketseat/blob/master/01-conceitos/04-desestruturacao.js) :heavy_check_mark:
    
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

        Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
        fim deve ser possível fazer o seguinte:

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

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.

---

Feito com :purple_heart: by [Rocketseat](https://rocketseat.com.br) :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)

