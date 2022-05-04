---
title: Design Patterns - Creational
date: '2022-05-02'
tags: ['code', 'programming', 'design', 'design Patterns', 'creational']
draft: false
summary: 'Creational design patterns are design patterns that deal with object creation mechanisms'
---

<TOCInline toc={props.toc} asDisclosure toHeading={3} />

![design-patterns](/static/images/design-patterns.png)

## Introduction

Continuing the [Design Patterns](./design-patterns) article. Today's post is about Creational Design Patterns.

## Creational Design Patterns

In plain words
> Creational patterns are focused towards how to instantiate an object or group of related objects.

Wikipedia says
> In software engineering, creational design patterns are design patterns that deal with object creation mechanisms, trying to create objects in a manner suitable to the situation. The basic form of object creation could result in design problems or added complexity to the design. Creational design patterns solve this problem by somehow controlling this object creation.

 * [Simple Factory](#simple-factory)
 * [Factory Method](#factory-method)
 * [Abstract Factory](#abstract-factory)
 * [Builder](#builder)
 * [Prototype](#prototype)
 * [Singleton](#singleton)

### 🏠 Simple Factory

Real world example
> Consider, you are building a house and you need doors. You can either put on your carpenter clothes, bring some wood, glue, nails and all the tools required to build the door and start building it in your house or you can simply call the factory and get the built door delivered to you so that you don't need to learn anything about the door making or to deal with the mess that comes with making it.

In plain words
> Simple factory simply generates an instance for client without exposing any instantiation logic to the client

Wikipedia says
> In object-oriented programming (OOP), a factory is an object for creating other objects – formally a factory is a function or method that returns objects of a varying prototype or class from some method call, which is assumed to be "new".

**Programmatic Example**
First of all we have a door interface and the implementation
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
Then we have our door factory that makes the door and returns it
```java
public class DoorFactory {
    public static Door makeDoor(float width, float height){
        return new WoodenDoor(width, height);
    }
}
```
And then it can be used as
```java
// Make me a door of 100x200
final Door door = DoorFactory.makeDoor(100, 200);
System.out.println("Width: " + door.getWidth());
System.out.println("Height: " + door.getHeight());

// Make me a door of 50x100
final Door door2 = DoorFactory.makeDoor(50, 100);
```

**When to Use?**

When creating an object is not just a few assignments and involves some logic, it makes sense to put it in a dedicated factory instead of repeating the same code everywhere.

**[back to top](#introduction)**

### 🏭 Factory Method

Real world example
> Consider the case of a hiring manager. It is impossible for one person to interview for each of the positions. Based on the job opening, she has to decide and delegate the interview steps to different people.

In plain words
> It provides a way to delegate the instantiation logic to child classes.

Wikipedia says
> In class-based programming, the factory method pattern is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created. This is done by creating objects by calling a factory method—either specified in an interface and implemented by child classes, or implemented in a base class and optionally overridden by derived classes—rather than by calling a constructor.

 **Programmatic Example**

Taking our hiring manager example above. First of all we have an interviewer interface and some implementations for it

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

Now let us create our `HiringManager`

```java
public abstract class HiringManager {

    protected abstract Interviewer makeInterviewer();

    public void takeInterview(){
        final Interviewer interviewer = this.makeInterviewer();
        interviewer.askQuestions();
    }
}

```
Now any child can extend it and provide the required interviewer
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
and then it can be used as

```java
final DevelopmentManager developmentManager = new DevelopmentManager();
developmentManager.takeInterview(); // Output: Asking about design patterns

final MarketingManager marketingManager = new MarketingManager();
marketingManager.takeInterview(); // Output: Asking about community building.
```

**When to use?**

Useful when there is some generic processing in a class but the required sub-class is dynamically decided at runtime. Or putting it in other words, when the client doesn't know what exact sub-class it might need.

**[back to top](#introduction)**

### 🔨 Abstract Factory

Real world example
> Extending our door example from Simple Factory. Based on your needs you might get a wooden door from a wooden door shop, iron door from an iron shop or a PVC door from the relevant shop. Plus you might need a guy with different kind of specialities to fit the door, for example a carpenter for wooden door, welder for iron door etc. As you can see there is a dependency between the doors now, wooden door needs carpenter, iron door needs a welder etc.

In plain words
> A factory of factories; a factory that groups the individual but related/dependent factories together without specifying their concrete classes.

Wikipedia says
> The abstract factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes

**Programmatic Example**

Translating the door example above. First of all we have our `Door` interface and some implementation for it

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
Then we have some fitting experts for each door type

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

Now we have our abstract factory that would let us make family of related objects i.e. wooden door factory would create a wooden door and wooden door fitting expert and iron door factory would create an iron door and iron door fitting expert
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
And then it can be used as
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

As you can see the wooden door factory has encapsulated the `carpenter` and the `wooden door` also iron door factory has encapsulated the `iron door` and `welder`. And thus it had helped us make sure that for each of the created door, we do not get a wrong fitting expert.   

**When to use?**

When there are interrelated dependencies with not-that-simple creation logic involved

**[back to top](#introduction)**

### 👷 Builder
Real world example
> Imagine you are at Hardee's and you order a specific deal, lets say, "Big Hardee" and they hand it over to you without *any questions*; this is the example of simple factory. But there are cases when the creation logic might involve more steps. For example you want a customized Subway deal, you have several options in how your burger is made e.g what bread do you want? what types of sauces would you like? What cheese would you want? etc. In such cases builder pattern comes to the rescue.

In plain words
> Allows you to create different flavors of an object while avoiding constructor pollution. Useful when there could be several flavors of an object. Or when there are a lot of steps involved in creation of an object.

Wikipedia says
> The builder pattern is an object creation software design pattern with the intentions of finding a solution to the telescoping constructor anti-pattern.

Having said that let me add a bit about what telescoping constructor anti-pattern is. At one point or the other we have all seen a constructor like below:

```java
public Burger(2, true, true, false, true) {
}
```

As you can see; the number of constructor parameters can quickly get out of hand and it might become difficult to understand the arrangement of parameters. Plus this parameter list could keep on growing if you would want to add more options in future. This is called telescoping constructor anti-pattern.

**Programmatic Example**

The sane alternative is to use the builder pattern. First of all we have our burger that we want to make

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

And then we have the builder

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
And then it can be used as:

```java
final Burger burger = new BurgerBuilder(14)
                .addCheese()
                .addPepperoni()
                .addLettuce()
                .addTomato()
                .build();
```

**When to use?**

When there could be several flavors of an object and to avoid the constructor telescoping. The key difference from the factory pattern is that; factory pattern is to be used when the creation is a one step process while builder pattern is to be used when the creation is a multi step process.

**[back to top](#introduction)**

### 🐑 Prototype
Real world example
> Remember dolly? The sheep that was cloned! Lets not get into the details but the key point here is that it is all about cloning

In plain words
> Create object based on an existing object through cloning.

Wikipedia says
> The prototype pattern is a creational design pattern in software development. It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects.

In short, it allows you to create a copy of an existing object and modify it to your needs, instead of going through the trouble of creating an object from scratch and setting it up.

**Programmatic Example**

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
Then it can be cloned like below
```java
final Sheep original = new Sheep("Jolly", "Mountain Sheep");
System.out.println(original.getName()); // Jolly
System.out.println(original.getCategory()); // Mountain Sheep

final Sheep cloned = original;
cloned.setName("Dolly");
System.out.println(cloned.getName()); // Jolly
System.out.println(cloned.getCategory());  // Mountain Sheep
```

Also you could use the magic method `__clone` to modify the cloning behavior.

**When to use?**

When an object is required that is similar to existing object or when the creation would be expensive as compared to cloning.

**[back to top](#introduction)**

### 💍 Singleton
Real world example
> There can only be one president of a country at a time. The same president has to be brought to action, whenever duty calls. President here is singleton.

In plain words
> Ensures that only one object of a particular class is ever created.

Wikipedia says
> In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

Singleton pattern is actually considered an anti-pattern and overuse of it should be avoided. It is not necessarily bad and could have some valid use-cases but should be used with caution because it introduces a global state in your application and change to it in one place could affect in the other areas and it could become pretty difficult to debug. The other bad thing about them is it makes your code tightly coupled plus mocking the singleton could be difficult.

**Programmatic Example**

To create a singleton, make the constructor private, disable cloning, disable extension and create a static variable to house the instance
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

## Conclusion

That's it! Finished another post about design patterns and soon I'll post the next one. Thanks

**[back to top](#introduction)**