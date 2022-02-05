---
title: Markdown Guides
date: '2022-02-05'
tags: ['guide']
draft: false
summary: 'Markdown cheatsheet for all your needs! An illustrated guide based on GitHub Flavored Markdown.'
---

### Table of Contents

- [Introduction](#introduction)
- [What is Markdown](#what-is)
- [Sintax Guide](#sintax)
- [Headers](#headers)
  - [H1 tag](#headers-h1)
  - [H2 tag](#headers-h2)
  - [H3 tag](#headers-h3)
- [Emphasis](#emphasis)
- [Lists](#lists)
  - [Unordered](#lists-unordered)
  - [Ordered](#lists-ordered)
- [Images](#images)
- [Links](#links)
- [Blockquotes](#blockquotes)
- [Inline code](#inline-code)
- [Syntax highlighting](#syntax-highlighting)
- [Footnotes](#footnotes)
- [Task Lists](#task-list)
- [Tables](#tables)
- [Strikethrough](#strikethrough)

---

### Introduction <a name="introduction"></a>

Markdown and Mdx parsing is supported via `unified`, and other remark and rehype packages. `next-mdx-remote` allows us to parse `.mdx` and `.md` files in a more flexible manner without touching webpack.

GitHub flavored markdown is used. `mdx-prism` provides syntax highlighting capabilities for code blocks. Here's a demo of how everything looks.

The following markdown cheatsheet is adapted from: https://guides.github.com/features/mastering-markdown/

### What is Markdown <a name="what-is"></a>

Markdown is a way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like `#` or `*`.

### Sintax Guide <a name="sintax"></a>

Here’s an overview of Markdown syntax that you can use anywhere on GitHub.com or in your own text files.

### Headers <a name="headers"></a>

```
# This is a h1 tag

## This is a h2 tag

#### This is a h3 tag
```

# This is a h1 tag <a name="headers-h1"></a>

## This is a h2 tag <a name="headers-h2"></a>

### This is a h3 tag <a name="headers-h3"></a>

## Emphasis <a name="emphasis"></a>

```
_This text will be italic_

**This text will be bold**

_You **can** combine them_
```

_This text will be italic_

**This text will be bold**

_You **can** combine them_

### Lists <a name="lists"></a>

##### Unordered <a name="lists-unordered"></a>

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

##### Ordered <a name="lists-ordered"></a>

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

### Images <a name="images"></a>

```
![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
Format: ![Alt Text](url)
```

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

### Links <a name="links"></a>

```
http://github.com - automatic!
[GitHub](http://github.com)
```

http://github.com - automatic!
[GitHub](http://github.com)

### Blockquotes <a name="blockquotes"></a>

```
As Kanye West said:

> We're living the future so
> the present is our past.
```

As Kanye West said:

> We're living the future so
> the present is our past.

### Inline code <a name="inline-code"></a>

```
I think you should use an
`<addr>` element here instead.
```

I think you should use an
`<addr>` element here instead.

### Syntax highlighting <a name="syntax-highlighting"></a>

Here’s an example of how you can use syntax highlighting with [GitHub Flavored Markdown](https://help.github.com/articles/basic-writing-and-formatting-syntax/):

````
```js:fancyAlert.js
function fancyAlert(arg) {
  if (arg) {
    $.facebox({ div: '#foo' })
  }
}
```
````

And here's how it looks - nicely colored with styled code titles!

```js:fancyAlert.js
function fancyAlert(arg) {
  if (arg) {
    $.facebox({ div: '#foo' })
  }
}
```

### Footnotes <a name="footnotes"></a>

```
Here is a simple footnote[^1]. With some additional text after it.

[^1]: My reference.
```

Here is a simple footnote[^1]. With some additional text after it.

[^1]: My reference.

### Task Lists <a name="task-lists"></a>

```
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```

- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

### Tables <a name="tables"></a>

You can create tables by assembling a list of words and dividing them with hyphens `-` (for the first row), and then separating each column with a pipe `|`:

```
| First Header                | Second Header                |
| --------------------------- | ---------------------------- |
| Content from cell 1         | Content from cell 2          |
| Content in the first column | Content in the second column |
```

| First Header                | Second Header                |
| --------------------------- | ---------------------------- |
| Content from cell 1         | Content from cell 2          |
| Content in the first column | Content in the second column |

### Strikethrough <a name="strikethrough"></a>

Any word wrapped with two tildes (like `~~this~~`) will appear ~~crossed out~~.
