---
title: Design Patterns - Creational
date: '2022-05-02'
tags: ['code', 'programming', 'design', 'design Patterns', 'creational']
draft: false
summary: 'Creational Design Patterns são padrões de design que lidam com mecanismos de criação de objetos'
---

<TOCInline toc={props.toc} asDisclosure toHeading={3} />

![design-patterns](/static/images/design-patterns.png)

## Introdução <a name="introduction"></a>

Continuando o artigo [Design Patterns](./design-patterns). O post de hoje é sobre Creational Design Patterns.

## Creational Design Patterns

Em palavras simples
> Creational Design Patterns são focados em como instanciar um objeto ou grupo de objetos relacionados.

Wikipedia diz
> Na engenharia de software, Creational Design Patterns são padrões de design que lidam com mecanismos de criação de objetos, tentando criar objetos de maneira adequada à situação. A forma básica de criação de objetos pode resultar em problemas de design ou complexidade adicional ao design. Padrões de design criacional resolvem esse problema controlando de alguma forma a criação desse objeto.

 * [Simple Factory](#simple-factory)
 * [Factory Method](#factory-method)
 * [Abstract Factory](#abstract-factory)
 * [Builder](#builder)
 * [Prototype](#prototype)
 * [Singleton](#singleton)

### 🏠 Simple Factory

Exemplo do mundo real
> Considere que você está construindo uma casa e precisa de portas. Você pode vestir suas roupas de carpinteiro, trazer madeira, cola, pregos e todas as ferramentas necessárias para construir a porta e começar a construí-la em sua casa ou simplesmente ligar para a fábrica e receber a porta construída para que você não precisa aprender nada sobre a fabricação de portas ou lidar com a bagunça que vem com isso.

Em palavras simples
> Simple factory simplesmente gera uma instância para o cliente sem expor nenhuma lógica de instanciação ao cliente

Wikipedia diz
> Na programação orientada a objetos (OOP), uma fábrica é um objeto para criar outros objetos – formalmente uma fábrica é uma função ou método que retorna objetos de um protótipo ou classe variável de alguma chamada de método, que é considerada "nova".

**Exemplo programático**
Em primeiro lugar, temos uma interface de porta e a implementação

```java
public interface Door {
    float getWidth();
    float getHeight();
}

public class WoodenDoor implements Door {

    // variables
    private float width;
    private float height;

    // constructor
    public WoodenDoor(float width, float height) {
        this.width = width;
        this.height = height;
    }

    //functions
    @Override
    public float getWidth() {
        return this.width;
    }

    @Override
    public float getHeight() {
        return this.height;
    }
}
```
Depois temos a nossa fábrica de portas que faz a porta e devolve
```java
public class DoorFactory {
    public static Door makeDoor(float width, float height){
        return new WoodenDoor(width, height);
    }
}
```
E então pode ser usado como
```java
// Make me a door of 100x200
final Door door = DoorFactory.makeDoor(100, 200);
System.out.println("Width: " + door.getWidth());
System.out.println("Height: " + door.getHeight());

// Make me a door of 50x100
final Door door2 = DoorFactory.makeDoor(50, 100);
```

**Quando usar?**

Quando a criação de um objeto não é apenas algumas atribuições e envolve alguma lógica, faz sentido colocá-lo em uma fábrica dedicada ao invés de repetir o mesmo código em todos os lugares.

**[back to top](#introduction)**

### 🏭 Factory Method

Exemplo do mundo real
> Considere o caso de um gerente de contratação. É impossível para uma pessoa entrevistar para cada uma das posições. Com base na vaga, ela deve decidir e delegar as etapas da entrevista a diferentes pessoas.

Em palavras simples
> Ele fornece uma maneira de delegar a lógica de instanciação para classes filhas.

Wikipedia diz
> Na programação baseada em classes, o padrão de Factory Method é um padrão de criação que usa métodos de fábrica para lidar com o problema de criar objetos sem precisar especificar a classe exata do objeto que será criado. Isso é feito criando objetos chamando um Factory Method - especificado em uma interface e implementado por classes filhas ou implementado em uma classe base e opcionalmente substituído por classes derivadas - em vez de chamar um construtor.

 **Exemplo programático**

Tomando nosso exemplo de gerente de contratação acima. Em primeiro lugar, temos uma interface de entrevistador e algumas implementações para isso

```java
public interface Interviewer {
    void askQuestions();
}

public class Developer implements Interviewer{
    @Override
    public void askQuestions() {
        System.out.println("Asking about design patterns!");
    }
}

public class CommunityExecutive implements Interviewer{
    @Override
    public void askQuestions() {
        System.out.println("Asking about community building");
    }
}

```

Agora vamos criar nosso `HiringManager`

```java
public abstract class HiringManager {

    protected abstract Interviewer makeInterviewer();

    public void takeInterview(){
        final Interviewer interviewer = this.makeInterviewer();
        interviewer.askQuestions();
    }
}

```
Agora qualquer criança pode estendê-lo e fornecer o entrevistador necessário
```java
public class DevelopmentManager extends HiringManager{
    @Override
    protected Interviewer makeInterviewer() {
        return new Developer();
    }
}

public class MarketingManager extends HiringManager{
    @Override
    protected Interviewer makeInterviewer() {
        return new CommunityExecutive();
    }
}
```
e então pode ser usado como

```java
final DevelopmentManager developmentManager = new DevelopmentManager();
developmentManager.takeInterview(); // Output: Asking about design patterns

final MarketingManager marketingManager = new MarketingManager();
marketingManager.takeInterview(); // Output: Asking about community building.
```

**Quando usar?**

Útil quando há algum processamento genérico em uma classe, mas a subclasse necessária é decidida dinamicamente em tempo de execução. Ou colocando em outras palavras, quando o cliente não sabe de qual subclasse exata ele pode precisar.

**[back to top](#introduction)**

### 🔨 Abstract Factory

Exemplo do mundo real
> Estendendo nosso exemplo de porta da Simple Factory. Com base em suas necessidades, você pode obter uma porta de madeira em uma loja de portas de madeira, uma porta de ferro em uma loja de ferro ou uma porta de PVC na loja relevante. Além disso, você pode precisar de um cara com diferentes tipos de especialidades para encaixar a porta, por exemplo um carpinteiro para porta de madeira, soldador para porta de ferro etc. Como você pode ver, há uma dependência entre as portas agora, porta de madeira precisa de carpinteiro, porta de ferro precisa de um soldador etc.

Em palavras simples
> Uma fábrica de fábricas; uma fábrica que agrupa as fábricas individuais, mas relacionadas/dependentes, sem especificar suas classes concretas.

Wikipedia diz
> O padrão de fábrica abstrata fornece uma maneira de encapsular um grupo de fábricas individuais que possuem um tema comum sem especificar suas classes concretas

**Exemplo programático**

Traduzindo o exemplo da porta acima. Primeiro de tudo temos nossa interface `Door` e alguma implementação para ela

```java
public interface Door {
    String getDescription();
}


public class WoodenDoor implements Door {
    @Override
    public String getDescription() {
        return "I am a wooden door";
    }
}


public class IronDoor implements Door{
    @Override
    public String getDescription() {
        return "I am an iron door";
    }
}

```
Então temos alguns especialistas em montagem para cada tipo de porta

```java
public interface DoorFittingExpert {
    String getDescription();
}

public class Welder implements DoorFittingExpert{
    @Override
    public String getDescription() {
        return "I can only fit iron doors";
    }
}


public class Carpenter implements DoorFittingExpert{
    @Override
    public String getDescription() {
        return "I can only fit wooden doors";
    }
}

```
Agora temos nossa fábrica abstrata que nos permitiria fazer uma família de objetos relacionados, ou seja, a fábrica de portas de madeira criaria uma porta de madeira e um especialista em portas de madeira e uma fábrica de portas de ferro criaria uma porta de ferro e um especialista em portas de ferro

```java
public interface DoorFactory {
    Door makeDoor();
    DoorFittingExpert makeFittingExpert();
}


// Wooden factory to return carpenter and wooden door
public class WoodenDoorFactory implements DoorFactory{
    @Override
    public Door makeDoor() {
        return new WoodenDoor();
    }

    @Override
    public DoorFittingExpert makeFittingExpert() {
        return new Carpenter();
    }
}


// Iron door factory to get iron door and the relevant fitting expert
public class IronDoorFactory implements DoorFactory{
    @Override
    public Door makeDoor() {
        return new IronDoor();
    }

    @Override
    public DoorFittingExpert makeFittingExpert() {
        return new Welder();
    }
}

```
E então pode ser usado como
```java
final WoodenDoorFactory woodenDoorFactory = new WoodenDoorFactory();
final Door door = woodenDoorFactory.makeDoor();
final DoorFittingExpert doorFittingExpert = woodenDoorFactory.makeFittingExpert();

door.getDescription(); // Output: I am a wooden door
doorFittingExpert.getDescription(); // Output: I can only fit wooden doors

final IronDoorFactory ironDoorFactory = new IronDoorFactory();
final Door door1 = ironDoorFactory.makeDoor();
final DoorFittingExpert doorFittingExpert1 = ironDoorFactory.makeFittingExpert();

door1.getDescription(); // Output: I am an iron door
doorFittingExpert1.getDescription();  // Output: I can only fit iron doors
```

Como você pode ver a fábrica de portas de madeira encapsularam o `carpinteiro` e a `porta de madeira` também a fábrica de portas de ferro encapsularam a `porta de ferro` e o `soldador`. E assim nos ajudou a garantir que, para cada uma das portas criadas, não tenhamos um especialista em encaixe errado.

**Quando usar?**

Quando há dependências inter-relacionadas com lógica de criação não tão simples envolvida

**[back to top](#introduction)**

### 👷 Builder
Exemplo do mundo real
> Imagine que você está no Hardee's e faz um pedido específico, digamos, "Big Hardee" e eles entregam para você sem *nenhuma pergunta*; este é o exemplo de fábrica simples. Mas há casos em que a lógica de criação pode envolver mais etapas. Por exemplo, você quer um acordo personalizado do Subway, você tem várias opções de como o seu hambúrguer é feito, por exemplo, que pão você quer? que tipos de molhos você gostaria? Qual queijo você gostaria? etc. Nesses casos, o padrão do construtor vem em socorro.

Em palavras simples
> Permite criar diferentes sabores de um objeto, evitando a poluição do builder. Útil quando pode haver vários sabores de um objeto. Ou quando há muitas etapas envolvidas na criação de um objeto.

Wikipedia diz
> O padrão builder é um padrão de projeto de software de criação de objetos com a intenção de encontrar uma solução para o antipadrão builder telescópico.

Dito isso, deixe-me acrescentar um pouco sobre o que é o antipadrão do builder telescópico. Em um ponto ou outro, todos nós vimos um construtor como abaixo:

```java
public Burger(2, true, true, false, true) {
}
```

Como você pode ver; o número de parâmetros do construtor pode rapidamente sair do controle e pode se tornar difícil entender o arranjo dos parâmetros. Além disso, essa lista de parâmetros pode continuar crescendo se você quiser adicionar mais opções no futuro. Isso é chamado de antipadrão do construtor telescópico.

**Exemplo programático**

A alternativa sã é usar o padrão do construtor. Em primeiro lugar temos o nosso hambúrguer que queremos fazer

```java
public class Burger {
    private int size;
    private boolean cheese, pepperoni, lettuce, tomato = false;

    public Burger(int size, boolean cheese, boolean pepperoni, boolean lettuce, boolean tomato) {
        this.size = size;
        this.cheese = cheese;
        this.pepperoni = pepperoni;
        this.lettuce = lettuce;
        this.tomato = tomato;
    }
}
```

E então temos o construtor

```java
public class BurgerBuilder {
    private int size;
    private boolean cheese, pepperoni, lettuce, tomato = false;

    public void construct(int size){
        this.size = size;
    }

    public BurgerBuilder addPepperoni(){
        this.pepperoni = true;
        return this;
    }

    public BurgerBuilder addLettuce(){
        this.lettuce = true;
        return this;
    }

    public BurgerBuilder addCheese(){
        this.cheese = true;
        return this;
    }

    public BurgerBuilder addTomato(){
        this.tomato = true;
        return this;
    }

    public Burger build(){
        return new Burger(this.size, this.cheese, this.pepperoni, this.lettuce, this.tomato);
    }
}
```
E então pode ser usado como:

```java
final Burger burger = new BurgerBuilder(14)
                .addCheese()
                .addPepperoni()
                .addLettuce()
                .addTomato()
                .build();
```

**Quando usar?**

Quando pode haver vários tipos de um objeto e para evitar a telescopia do construtor. A principal diferença do padrão de fábrica é que; O padrão de fábrica deve ser usado quando a criação é um processo de uma etapa, enquanto o padrão de construtor deve ser usado quando a criação é um processo de várias etapas.

**[back to top](#introduction)**

### 🐑 Prototype
Exemplo do mundo real
> Lembra da boneca? A ovelha que foi clonada! Não vamos entrar em detalhes, mas o ponto chave aqui é que é tudo sobre clonagem

Em palavras simples
> Criar objeto com base em um objeto existente por meio de clonagem.

Wikipedia diz
> O padrão de protótipo é um padrão de design criacional no desenvolvimento de software. É usado quando o tipo de objeto a ser criado é determinado por uma instância prototípica, que é clonada para produzir novos objetos.

Em suma, ele permite que você crie uma cópia de um objeto existente e modifique-o de acordo com suas necessidades, em vez de se dar ao trabalho de criar um objeto do zero e configurá-lo.

**Exemplo programático**
```java
public class Sheep {
    private String name;
    private String category;

    public Sheep(String name, String category) {
        this.name = name;
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}

```
Então ele pode ser clonado como abaixo
```java
final Sheep original = new Sheep("Jolly", "Mountain Sheep");
System.out.println(original.getName()); // Jolly
System.out.println(original.getCategory()); // Mountain Sheep

final Sheep cloned = original;
cloned.setName("Dolly");
System.out.println(cloned.getName()); // Jolly
System.out.println(cloned.getCategory());  // Mountain Sheep
```

**Quando usar?**

Quando é necessário um objeto semelhante ao objeto existente ou quando a criação seria cara em comparação com a clonagem.

**[back to top](#introduction)**

### 💍 Singleton
Exemplo do mundo real
> Só pode haver um presidente de um país por vez. O mesmo presidente deve ser acionado, sempre que o dever chamar. O presidente aqui é solteiro.

Em palavras simples
> Garante que apenas um objeto de uma determinada classe seja criado.

Wikipedia diz
> Na engenharia de software, o padrão singleton é um padrão de projeto de software que restringe a instanciação de uma classe a um objeto. Isso é útil quando é necessário exatamente um objeto para coordenar ações em todo o sistema.

O padrão singleton é realmente considerado um antipadrão e o uso excessivo dele deve ser evitado. Não é necessariamente ruim e pode ter alguns casos de uso válidos, mas deve ser usado com cautela porque introduz um estado global em seu aplicativo e alterá-lo em um local pode afetar outras áreas e pode se tornar muito difícil de depurar. A outra coisa ruim sobre eles é que torna seu código fortemente acoplado, além de zombar do singleton pode ser difícil.

**Exemplo programático**

Para criar um singleton, torne o construtor privado, desative a clonagem, desative a extensão e crie uma variável estática para hospedar a instância
```java
public final class President {

    private President instance;

    private President() {
    }

    public President getInstance() {
        if(this.instance == null){
            this.instance = new President();
        }
        return instance;
    }

    private void wakeUp(){

    }

    private void clone(){

    }
}
```
**[back to top](#introduction)**

## Conclusão

É isso! Terminei mais um post sobre padrões de design e em breve postarei o próximo. Obrigado

**[back to top](#introduction)**