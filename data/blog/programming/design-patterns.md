---
title: Design Patterns Introdução
date: '2022-05-01'
tags: ['code', 'programming', 'design', 'design Patterns']
draft: false
summary: 'Explicação ultra simplificada para design patterns!'
---

<TOCInline toc={props.toc} asDisclosure toHeading={3} />

![design-patterns](/static/images/design-patterns.png)

## Fala devs, como cês tão?

O post de hoje é sobre Design Patterns, um tópico que pode facilmente fazer a mente de qualquer pessoa bugar. Aqui eu tento isso ficar na sua mente (e talvez na minha) explicando-os da maneira <i>mais simples</i> possível.

## Introdução

Design patterns são soluções para problemas recorrentes; **diretrizes sobre como lidar com determinados problemas**. Eles não são classes, pacotes ou bibliotecas que você pode conectar em seu aplicativo e esperar que a mágica aconteça. Estas são, antes, orientações sobre como lidar com certos problemas em determinadas situações.

> Design patterns são soluções para problemas recorrentes; orientações sobre como lidar com determinados problemas.

A Wikipedia os descreve como

> Na engenharia de software, um design patterns é uma solução geral reutilizável para um problema comum dentro de um determinado contexto de projeto de software. Não é um projeto acabado que pode ser transformado diretamente em código fonte ou máquina. É uma descrição ou modelo de como resolver um problema que pode ser usado em muitas situações diferentes.

## ⚠️ Tome cuidado

- Design patterns não é uma solução para todos os problemas.
- Não tente forçar isso, coisas não esperadas podem acontecer se você fizer isso.
- Tenha em mente que design patterns são suluções **para** problemas, não solução para **encontrar** problemas, então não pense demais.
- Se usados ​​no lugar correto de maneira correta, eles podem provar ser um salvador; ou então eles podem resultar em uma bagunça horrível de código.

> Observe também que os exemplos de código nos próximos artigos estão em Java 8, no entanto, isso não deve impedi-lo porque os conceitos são os mesmos de qualquer maneira.

## Tipos de Design Patterns

* [Creational](#creational-design-patterns)
* [Structural](#structural-design-patterns)
* [Behavioral](#behavioral-design-patterns)

### Creational Design Patterns

Em palavras simples
> Creational Design Patterns são focados em como instanciar um objeto ou grupo de objetos relacionados.

Wikipedia diz
> Na engenharia de software, Creational Design Patterns são padrões de design que lidam com mecanismos de criação de objetos, tentando criar objetos de maneira adequada à situação. A forma básica de criação de objetos pode resultar em problemas de design ou complexidade adicional ao design. Padrões de design criacional resolvem esse problema controlando de alguma forma a criação desse objeto.

 * Simple Factory
 * Factory Method
 * Abstract Factory
 * Builder
 * Prototype
 * Singleton

**[back to top](#introduction)**

### Structural Design Patterns

Em palavras simples
> Structural Design Patterns estão principalmente preocupados com a composição de objetos ou, em outras palavras, como as entidades podem usar umas às outras. Ou ainda outra explicação seria, eles ajudam a responder "Como construir um componente de software?"

Wikipedia diz
> Na engenharia de software, Structural Design Patterns são padrões de projeto que facilitam o projeto, identificando uma maneira simples de realizar relacionamentos entre entidades.

 * Adapter
 * Bridge
 * Composite
 * Decorator
 * Facade
 * Flyweight
 * Proxy

**[back to top](#introduction)**

### Behavioral Design Patterns

Em palavras simples
> Preocupa-se com a atribuição de responsabilidades entre os objetos. O que os torna diferentes dos padrões estruturais é que eles não apenas especificam a estrutura, mas também descrevem os padrões de passagem/comunicação de mensagens entre eles. Ou em outras palavras, eles auxiliam na resposta "Como executar um comportamento em um componente de software?"

Wikipedia diz
> Na engenharia de software, Behavioral Design Patterns são padrões de projeto que identificam padrões de comunicação comuns entre objetos e realizam esses padrões. Ao fazer isso, esses padrões aumentam a flexibilidade na realização dessa comunicação.

* Chain of Responsibility
* Command
* Iterator
* Mediator
* Memento
* Observer
* Visitor
* Strategy
* State
* Template Method

**[back to top](#introduction)**

## 🚦 Conclusão

E isso encerra esta parte. Vou continuar a melhorar isso e descrever cada padrão nos meus próximos posts. Além disso, tenho planos de escrever o mesmo sobre os padrões de arquitetura, fique atento a isso.

Obrigado por ler!

**[back to top](#introduction)**