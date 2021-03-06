---
title: Introdução ao código limpo
date: '2022-02-08'
tags: ['code', 'programming', 'java']
draft: false
summary: 'Código limpo explicado - uma introdução prática à codificação limpa para iniciantes!'
---

<TOCInline toc={props.toc} asDisclosure toHeading={3} />

## Fala devs, como cês tão? <a name="introduction"></a>

Esse aqui é o post `Introdução ao Código Limpo` que todo programador já deveria saber. Neste post veremos alguns dos princípios mais importantes para melhorar a qualidade do seu código e darei exemplos ~em código~ sobre cada um deles.

Escrever um código limpo, compreensível e sustentável é uma habilidade crucial para todo desenvolvedor dominar.

> Qualquer tolo pode escrever um código que um computador possa entender. Bons programadores escrevem código que humanos podem entender.
>
> -- <cite>Martin Fowler</cite>

A maioria dos exemplos são retirado do livro `Código Limpo de Robert J. Martin`. Esse livro é um clássico da programação e aposto que você já deve ter ouvido falar, não é mesmo? Sugiro que leia o livro quando tiver um tempo, pois agrega muito.

**[voltar para o topo](#summary)**

### Como nomear variáveis (E outras coisas) <a name="variables"></a>

> Existem apenas duas coisas difíceis em Ciência da Computação: invalidação de cache e nomeação de coisas.
>
> -- <cite>Phil Karlton</cite>

É importante sabermos nomear as coisas durante a programação. Há uma razão pela qual não usamos endereços de memória, em vez disso, temos nomes: É muito mais fácil lembrar um nome e mais importante, você pode fornecer informações pertinentes que ajudam a qualquer outra pessoa encontrar um significado na variável ou qualquer outra coisa que você criou.

Com certeza essa sempre foi a parte mais difícil pra mim, encontrar um nome. Às vezes pode levar algum tempo para que você encontre um nome bacana, mas pode ter certeza, você vai economizar muito tempo para você e sua equipe no futuro. E tenho certeza de que a maioria dos programadores já enfrentou uma situação em que visitou um código escrito apenas algum tempo depois e teve dificuldade de entender o que fez antes, portanto, crie bons nomes.

#### Use nomes pesquisáveis

Geralmente criamos nomes que sejam fáceis de serem pesquisáveis, para que possamos ter algum tipo de referência. Evite usar números mágicos. Não use nomes de uma única letra para contantes, pois elas podem aparecer em muitos lugares, portanto, não são facilmente pesquisáveis.

Ruim:

```
if (student.classes.length < 7) {
  // Do something
}
```

Bom:

```
private static final MAX_CLASSES_PER_STUDENT = 7;


if (student.classes.length < MAX_CLASSES_PER_STUDENT) {
    // Do something
}
```

Isso é muito melhor porque a constante `MAX_CLASSES_PER_STUDENT` pode ser utilizada em muitos lugares no código. Se precisarmos alterá-lo para 6 no futuro precisariamos apenas alterar o valor da constante.

O mau exemplo cria pontos de interrogação na mente do leitor, como qual é a importância do 7?

`Você também deve usar as convenções de nomenclatura e declaração constantes de sua linguagem, como private static final em Java ou const em JavaScript.`

#### Use nomes pronunciáveis

Esse aqui eu nem preciso falar né?

Ruim:

```
private Date yyyymmdstr = moment().format("YYYY/MM/DD");
```

Bom:

```
private Date currentDate = moment().format("YYYY/MM/DD");
```

#### Evite a desinformação

Você deve se preocupar e tomar cuidado com palavras que significam algo específico, não se refira a um agrupamento de contas como um `accountList`, a menos que seu tipo seja realmente um List. A palavra tem um significado específico e algumas vezes pode levar a conclusões falsas.

Mesmo que o tipo seja uma lista, accounts é um nome mais simples e melhor.

Ruim:

```
private List<Account> accountList;
```

Bom:

```
private List<Account> accounts;
```

#### Como criar nomes significativos

Não é uma boa prática utilizar comentários para explicar por que uma variável é usada. Se uma variável requer um comentário, você precisa reservar um tempo para renomear essa variável ao invés de escrever um comentário.

> Um nome deve dizer por que existe, o que faz e como é usado. Se um nome requer um comentário, então o nome não revela sua intenção.
>
> -- <cite>Código limpo</cite>

Ruim:

```
private int d; // tempo decorrido em dias
```

Já vi esse tipo de código tantas vezes. É um equívoco comum que você deve esconder sua bagunça com comentários. Não use letras como x, y, a ou b como nomes de variáveis, a menos que haja uma boa razão (variáveis ​​de loop são uma exceção a isso).

Bom:

```
private int elapsedTimeInDays;
private int daysSinceCreation;
private int daysSinceModification;
```

Esses nomes são muito melhores. Eles dizem o que está sendo medido e a unidade dessa medida.

**[voltar para o topo](#summary)**

### Como escrever funções <a name="functions"></a>

#### Encapsular condicionais em funções

Refatorar a condição e colocá-la em uma função nomeada é uma boa maneira de tornar suas condicionais mais legíveis.

Aqui está um pedaço de código que exemplifica esse encapsulamento.

O método isValid se encarrega de verificar se o status do usuário é null para poder ser feita a inserção.

```
public void insertUser(User user) throws Exception {
  if (isValid(user.getStatus())) {
    insertUser(user);
  } else {
    throw new RuntimeException();
  }
}
```

Aqui está o código para isValid.

```
private boolean isValid(String status) {
    return status != null;
}
```

Interessante, né? Eu concordo.

#### Mantenha-as pequenas

As funções devem ser pequenas, muito pequenas. Eles raramente devem ter 20 linhas. Quanto mais longa uma função fica, é mais provável que ela faça várias coisas e tenha efeitos colaterais.

#### Certifique-se de que elas fazem apenas uma coisa

> As funções devem fazer apenas uma coisa. Eles devem fazê-la bem. Devem fazer apenas isso.
>
> -- <cite>Código limpo</cite>

Suas funções devem fazer apenas uma coisa. Se você seguir essa regra, é garantido que elas serão pequenas. A única coisa que essa função faz deve ser declarada em seu nome.

Às vezes é difícil olhar para a função e ver se ela está fazendo várias coisas ou não. Uma boa maneira de verificar é tentar extrair outra função com um nome diferente. Se você conseguir extrair, isso significa que deve ser uma função diferente.

Este é provavelmente o conceito mais importante neste artigo, e levará algum tempo para se acostumar. Mas quando você pegar o jeito, seu código parecerá muito mais maduro e será mais facilmente refatorável, compreensível e testável, com certeza. :)

#### Menos argumentos

As funções devem ter dois ou menos argumentos/parâmetros, quanto menos, melhor. Evite três ou mais argumentos sempre que possível.

Os argumentos dificultam a leitura e a compreensão da função. Eles são ainda mais difíceis do ponto de vista de teste, pois criam a necessidade de escrever casos de teste para cada combinação de argumentos.

#### Não seja repetitivo

A repetição de código pode ser a raiz de todos os males do software. Código duplicado significa que você precisa alterar as coisas em vários lugares quando há uma mudança na lógica e é muito propenso a erros.

Use os recursos de refatoração da sua IDE e extraia um método sempre que encontrar um trecho de código repetido.

**[voltar para o topo](#summary)**

### Bônus <a name="bonus"></a>

#### Não deixe descontinuado código comentado

Acredito que este é um dos mais importantes porque outros que virem o código comentado terão medo de excluí-lo porque não sabem se ele está lá por algum motivo específico. Esse código permanecerá lá por um longo tempo então, quando os nomes das variáveis ou os nomes dos métodos mudam, torna-se irrelevante, mas ainda assim ninguém o exclui.

Basta excluí-lo. Mesmo que fosse importante, existe controle de versão para isso. Você sempre pode encontrá-lo.

#### Conheça as convenções da linguagem que você está utilizando

Você deve conhecer as convenções da sua linguagem em termos de espaçamento, comentários e nomenclatura. Existem guias de estilo disponíveis para muitos idiomas.

Por exemplo, você deve usar camelCase em Java, mas snake_case em Python. Você coloca chaves de abertura em uma nova linha em C#, mas você as coloca na mesma linha em Java e JavaScript.

Essas coisas mudam de linguagem para linguagem e não existe um padrão universal.

#### Aqui estão alguns links úteis para você:

[Guia de estilo Python](https://www.python.org/dev/peps/pep-0008/)
[Guia de estilo Javascript do Google](https://google.github.io/styleguide/jsguide.html)
[Guia de estilo Java do Google](https://google.github.io/styleguide/javaguide.html)

**[voltar para o topo](#summary)**

### Conclusão <a name="conclusion"></a>

A codificação limpa não é uma habilidade que pode ser adquirida da noite para o dia. É um hábito que precisa ser desenvolvido mantendo esses princípios em mente e aplicando-os sempre que você escreve código.

Obrigado por dedicar seu tempo para ler e espero que tenha sido útil.

Se você estiver interessado em ler mais artigos como este, você pode se inscrever no meu blog.

Obrigado devs! Abraço.

**[voltar para o topo](#summary)**
