---
title: Clean Code Introduction
date: '2022-02-08'
tags: ['code', 'programming', 'java']
draft: false
summary: 'Clean Code Explained - A hands-on introduction to clean coding for beginners!'
---

<TOCInline toc={props.toc} asDisclosure toHeading={3} />

## Hey devs, how is everything going? <a name="introduction"></a>

This is the `Introduction to Clean Code` post that every programmer should already know. In this post, we'll look at some of the most important principles for improving the quality of your code, and I'll give ~in code~ examples of each one.

Writing clean, understandable and maintainable code is a crucial skill for every developer to master.

> Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
>
> -- <cite>Martin Fowler</cite>

Most examples are taken from the book `Clean Code by Robert J. Martin`. This book is a programming classic and I bet you must have heard about it, right? I suggest you read the book when you have time.

**[back to top](#summary)**

### How to name variables (And other things) <a name="variables"></a>

> There are only two hard things in Computer Science: cache invalidation and naming things.
>
> -- <cite>Phil Karlton</cite>

It is important to know how to name things during programming. There's a reason we don't use memory addresses, instead we have names: It's much easier to remember a name, and more importantly, you can provide pertinent information that helps anyone else find meaning in the variable or anything else that you created.

This has definitely always been the hardest part for me, finding a name. Sometimes it can take some time for you to find a cool name, but it will save you and your team a lot of time in the future. And I'm sure most programmers have faced a situation where they visited code written only some time later and had a hard time understanding what they did before, so come up with good names.

#### Use searchable names

We usually create names that are easy to be searchable, so we can have some sort of reference. Avoid using magic numbers. Do not use single-letter names for constants, as they can appear in many places, so they are not easily searchable.

Bad:

```
if (student.classes.length < 7) {
  // Do something
}
```

Good:

```
private static final MAX_CLASSES_PER_STUDENT = 7;


if (student.classes.length < MAX_CLASSES_PER_STUDENT) {
    // Do something
}
```

This is much better because the `MAX_CLASSES_PER_STUDENT` constant can be used in many places in the code. If we need to change it to 6 in the future we would just need to change the value of the constant.

The bad example creates question marks in the reader's mind, such as what is the importance of 7?

`You should also use your language's constant naming and declaration conventions, such as private static final in Java or const in JavaScript.`

#### Use pronounceable names

This one I don't even need to talk about, right?

Bad:

```
private Date yyyymmdstr = moment().format("YYYY/MM/DD");
```

Good:

```
private Date currentDate = moment().format("YYYY/MM/DD");
```

#### Avoid disinformation

You should be careful and beware of words that mean something specific, don't refer to an account grouping as an `accountList` unless its type is actually a List. The word has a specific meaning and can sometimes lead to false conclusions.

Even though the type is a list, accounts is a simpler and better name.

Bad:

```
private List<Account> accountList;
```

Good:

```
private List<Account> accounts;
```

#### How to create meaningful names

It is not good practice to use comments to explain why a variable is used. If a variable requires a comment, you need to take the time to rename that variable rather than writing a comment.

> A name should tell you why it exists, what it does, and how it is used. If a name requires a comment, then the name does not reveal its intent.
>
> -- <cite>Clean Code</cite>

Bad:

```
private int d; // elapsed time in days
```

I've seen this type of code so many times. It's a common misconception that you should hide your mess with comments. Don't use letters like x, y, a or b as variable names unless there is a good reason (loop variables are an exception to this).

Good:

```
private int elapsedTimeInDays;
private int daysSinceCreation;
private int daysSinceModification;
```

Esses nomes s??o muito melhores. Eles dizem o que est?? sendo medido e a unidade dessa medida.

**[back to top](#summary)**

### How to write functions <a name="functions"></a>

#### Wrap conditionals in functions

Refactoring the condition and putting it in a named function is a good way to make your conditionals more readable.

Here is a piece of code that exemplifies this encapsulation.

The isValid method checks whether the user's status is null so that the insertion can be performed.

```
public void insertUser(User user) throws Exception {
  if (isValid(user.getStatus())) {
    insertUser(user);
  } else {
    throw new RuntimeException();
  }
}
```

Here is the code for isValid.

```
private boolean isValid(String status) {
    return status != null;
}
```

Interesting, right? I agree.

#### Keep them small

Functions should be small, really small. They should rarely be 20 lines long. The longer a function gets, it is more likely it is to do multiple things and have side effects.

#### Make sure they only do one thing

> Functions should do one thing. They should do it well. They should do it only.
>
> -- <cite>Clean Code</cite>

Your functions should do only one thing. If you follow this rule, it is guaranteed that they will be small. The only thing that function does should be stated in its name.

Sometimes it is hard to look at the function and see if it is doing multiple things or not. One good way to check is to try to extract another function with a different name. If you can find it, that means it should be a different function.

This is probably the most important concept in this article, and it will take some time to get used to. But once you get the hang of it, your code will look much more mature, and it will be more easily refactorable, understandable, and testable for sure. :)

#### Less arguments

Functions should have two or fewer arguments, the fewer the better. Avoid three or more arguments where possible.

Arguments make it harder to read and understand the function. They are even harder from a testing point of view, since they create the need to write test cases for every combination of arguments.

#### Don't be repetitive

Code repetition may be the root of all evil in software. Duplicate code means you need to change things in multiple places when there is a change in logic and it is very error prone.

Use your IDE's refactoring features and extract a method whenever you come across a repeated code segment.

**[back to top](#summary)**

### Bonus <a name="bonus"></a>

#### Don't leave deprecated commented code

I believe this is one of the most important ones because others who see the commented code will be afraid to delete it because they don't know if it's there for some specific reason. This code will stay there for a long time so when variable names or method names change it becomes irrelevant but still no one deletes it.

Just delete it. Even if it was important, there is version control for that. You can always find it.

#### Know the conventions of the language you are using

You should know your language conventions in terms of spacing, comments, and naming. There are style guides available for many languages.

For example, you should use camelCase in Java, but snake_case in Python. You put opening braces on a new line in C#, but you put them on the same line in Java and JavaScript.

These things change from language to language and there is no universal standard.

#### Here are some useful links for you:

[Python style guide](https://www.python.org/dev/peps/pep-0008/)
[Google's Javascript Style Guide](https://google.github.io/styleguide/jsguide.html)
[Google's Java Style Guide](https://google.github.io/styleguide/javaguide.html)

**[back to top](#summary)**

### Conclusion <a name="conclusion"></a>

Clean coding is not a skill that can be acquired overnight. It's a habit that needs to be developed by keeping these principles in mind and applying them whenever you write code.

Thank you for taking the time to read it and I hope it was helpful.

If you're interested in reading more articles like this, you can subscribe to my blog.

Thank you devs! Hug.

**[back to top](#summary)**
