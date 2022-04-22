---
title: Guia de markdown
date: '2022-02-05'
tags: ['guide']
draft: false
summary: 'Dicas do Markdown para todas as suas necessidades! Um guia ilustrado baseado no GitHub Flavored Markdown.'
---
<TOCInline toc={props.toc} asDisclosure toHeading={3} />

### Introdução <a name="introduction"></a>

A análise de Markdown e Mdx é suportada via `unified` e outros pacotes de observação e rehype. `next-mdx-remote` nos permite analisar arquivos `.mdx` e `.md` de uma maneira mais flexível sem tocar no webpack.

O markdown com sabor do GitHub é usado. `mdx-prism` fornece recursos de realce de sintaxe para blocos de código. Aqui está uma demonstração de como tudo parece.

As seguintes dicas de markdown foram adaptadas de: https://guides.github.com/features/mastering-markdown/

### O que é Markdown <a name="what-is"></a>

Markdown é uma maneira de estilizar o texto na web. Você controla a exibição do documento; formatar palavras em negrito ou itálico, adicionar imagens e criar listas são apenas algumas das coisas que podemos fazer com o Markdown. Principalmente, Markdown é apenas um texto normal com alguns caracteres não alfabéticos, como `#` ou `*`.

### Guia de sintaxe <a name="sintax"></a>

Aqui está uma visão geral da sintaxe do Markdown que você pode usar em qualquer lugar no GitHub.com ou em seus próprios arquivos de texto.

### Headers <a name="headers"></a>

```
# Isso é uma tag H1

## Isso é uma tag H2

#### Isso é uma tag H3
```

# Isso é uma tag H1 <a name="headers-h1"></a>

## Isso é uma tag H2 <a name="headers-h2"></a>

### Isso é uma tag H3 <a name="headers-h3"></a>

## Enfase <a name="emphasis"></a>

```
_Esse texto será itálico_

**Esse texto será negrito**

_Você **pode** combinar os dois_
```

_Esse texto será itálico_

**Esse texto será negrito**

_Você **pode** combinar os dois_

### Listas <a name="lists"></a>

##### Não ordenada <a name="lists-unordered"></a>

```
- Item 1
- Item 2
  - Item 2a
  - Item 2b
```

- Item 1
- Item 2
  - Item 2a
  - Item 2b

##### Ordenada <a name="lists-ordered"></a>

```
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b
```

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

### Imagens <a name="images"></a>

```
![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
Format: ![Alt Text](url)
```

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

### Links <a name="links"></a>

```
http://github.com - automático!
[GitHub](http://github.com)
```

http://github.com - automático!
[GitHub](http://github.com)

### Citações em bloco <a name="blockquotes"></a>

```
Kanye West disse:

> Estamos vivendo o futuro, então
> o presente é nosso passado.
```

Kanye West disse:

> Estamos vivendo o futuro, então
> o presente é nosso passado.

### Código <a name="inline-code"></a>

```
Acho que você deveria usar um
elemento `<addr>` aqui.
```

Acho que você deveria usar um
elemento `<addr>` aqui.

### Realce de sintaxe <a name="syntax-highlighting"></a>

Aqui está um exemplo de como você pode usar o realce de sintaxe com [GitHub Flavored Markdown](https://help.github.com/articles/basic-writing-and-formatting-syntax/):

````
```js:fancyAlert.js
function fancyAlert(arg) {
  if (arg) {
    $.facebox({ div: '#foo' })
  }
}
```
````

E aqui está como parece - bem colorido com títulos de código estilizados!

```js:fancyAlert.js
function fancyAlert(arg) {
  if (arg) {
    $.facebox({ div: '#foo' })
  }
}
```

### Notas de Rodapé <a name="footnotes"></a>

```
Aqui está uma simples nota de rodapé[^1]. Com algum texto adicional depois dele.

[^1]: Minha referência.
```

Aqui está uma simples nota de rodapé[^1]. Com algum texto adicional depois dele.

[^1]: Minha referência.

### Lista de Tarefas <a name="task-lists"></a>

```
- [x] sintaxe de lista necessária (qualquer lista não ordenada ou ordenada suportada)
- [x] este é um item completo
- [ ] este é um item incompleto
```

- [x] sintaxe de lista necessária (qualquer lista não ordenada ou ordenada suportada)
- [x] este é um item completo
- [ ] este é um item incompleto

### Tabelas <a name="tables"></a>

Você pode criar tabelas montando uma lista de palavras e dividindo-as com hífens `-` (para a primeira linha) e, em seguida, separando cada coluna com uma barra vertical `|`:

```
| Primeiro cabeçalho          | Segundo Cabeçalho            |
| --------------------------- | ---------------------------- |
| Conteúdo da célula 1        | Conteúdo da célula 2         |
| Conteúdo na primeira coluna | Conteúdo na segunda coluna   |
```

| Primeiro cabeçalho          | Segundo Cabeçalho          |
| --------------------------- | -------------------------- |
| Conteúdo da célula 1        | Conteúdo da célula 2       |
| Conteúdo na primeira coluna | Conteúdo na segunda coluna |

### Tachado <a name="strikethrough"></a>

Qualquer palavra envolvida com dois tils (como `~~this~~`) aparecerá ~~cruzada~~.
