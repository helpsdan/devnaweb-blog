---
title: Using github emoji in commits and pull requests
date: '2022-04-30'
tags: ['tips', 'github', 'git', 'emoji']
draft: false
summary: 'Coming back with the articles, I hope that this month of May will be very productive...'
---

<TOCInline toc={props.toc} asDisclosure toHeading={3} />

![gitmoji](/static/images/gitmoji.gif)

### Hey devs! How are you?

Coming back with the articles, I hope that this month of May will be very productive. Today I'm going to talk about the github lib `Gitmoji`.

### What is Gitmoji?

Gitmoji is an emoji guide for GitHub commit messages. Aims to be a standarization cheatsheet - guide for using emojis on GitHub's commit messages.

Using emojis on commit messages provides an easy way of identifying the purpose or intention of a commit with only looking at the emojis used. As there are a lot of different emojis I found the need of creating a guide that can help to use emojis easier.

### Example of usage

In case you need some ideas to integrate gitmoji in your project, here's a practical way to use it:

- **intention**:: An emoji from the list.
- **scope**:: An optional string that adds contextual information for the scope of the change.
- **message**:: A brief explanation of the change.

```
<intention> [scope?][:?] <message>
```

to learn more visit the website [gitmoji.dev](https://gitmoji.dev/)

### Examples of emoji and their uses

1. 🎨

```
:art:

Improve structure / format of the code.
```

2. ⚡️
```
:zap:

Improve performance.
```

3. 🔥

```
:fire:

Remove code or files.
```

4. 🐛

```
:bug:

Fix a bug.
```

5. 🚑️

```
:ambulance:

Critical hotfix.
```

6. ✨

```
:sparkles:

Introduce new features.
```

7. 📝

```
:memo:

Add or update documentation.
```

8. 🚀

```
:rocket:

Deploy stuff.
```

9. 💄

```
:lipstick:

Add or update the UI and style files.
```

10. 🎉

```
:tada:

Begin a project.
```
11. ✅

``` 
:white_check_mark:

Add, update, or pass tests.
```

12. 🔒️

```
:lock:

Fix security issues.
```

13. 🔐

```
:closed_lock_with_key:

Add or update secrets.
```

14. 🔖

```
:bookmark:

Release / Version tags.
```

15. 🚨

```
:rotating_light:

Fix compiler / linter warnings.
```

16. 🚧

```
:construction:

Work in progress.
```

17. 💚

```
:green_heart:

Fix CI Build.
```

18. ⬇️

```
:arrow_down:

Downgrade dependencies.
```

19. ⬆️

```
:arrow_up:

Upgrade dependencies.
```

20. 📌

```
:pushpin:

Pin dependencies to specific versions.
```

21. 👷

```
:construction_worker:

Add or update CI build system.
```

22. 📈

```
:chart_with_upwards_trend:

Add or update analytics or track code.
```

23. ♻️

```
:recycle:

Refactor code.
```

24. ➕

```
:heavy_plus_sign:

Add a dependency.
```

25. ➖

```
:heavy_minus_sign:

Remove a dependency.
```

26. 🔧

```
:wrench:

Add or update configuration files.
```

27. 🔨

```
:hammer:

Add or update development scripts.
```

28. 🌐

```
:globe_with_meridians:

Internationalization and localization.
```

29. ✏️

```
:pencil2:

Fix typos.
```

30. 💩

```
:poop:

Write bad code that needs to be improved.
```

31. ⏪️

```
:rewind:

Revert changes.
```

32. 🔀

```
:twisted_rightwards_arrows:

Merge branches.
```

33. 📦️

```
:package:

Add or update compiled files or packages.
```

34. 👽️

```
:alien:

Update code due to external API changes.
```

35. 🚚

```
:truck:

Move or rename resources (e.g.: files, paths, routes).
```

36. 📄

```
:page_facing_up:

Add or update license.
```

37. 💥

```
:boom:

Introduce breaking changes.
```

38. 🍱

```
:bento:

Add or update assets.
```

39. ♿️

```
:wheelchair:

Improve accessibility.
```

40. 💡

```
:bulb:

Add or update comments in source code.
```

41. 🍻

```
:beers:

Write code drunkenly.
```

42. 💬

```
:speech_balloon:

Add or update text and literals.
```

43. 🗃️

```
:card_file_box:

Perform database related changes.
```

44. 🔊

```
:loud_sound:

Add or update logs.
```

45. 🔇

```
:mute:

Remove logs.
```

46. 👥

```
:busts_in_silhouette:

Add or update contributor(s).
```

47. 🚸

```
:children_crossing:

Improve user experience / usability.
```

48. 🏗️

```
:building_construction:

Make architectural changes.
```

49. 📱

```
:iphone:

Work on responsive design.
```

50. 🤡

```
:clown_face:

Mock things.
```

51. 🥚

```
:egg:

Add or update an easter egg.
```

52. 🙈

```
:see_no_evil:

Add or update a .gitignore file.
```

53. 📸

```
:camera_flash:

Add or update snapshots.
```

54. ⚗️

```
:alembic:

Perform experiments.
```

55. 🔍️

```
:mag:

Improve SEO.
```

56. 🏷️

```
:label:

Add or update types.
```

57. 🌱

```
:seedling:

Add or update seed files.
```

58. 🚩

```
:triangular_flag_on_post:

Add, update, or remove feature flags.
```

59. 🥅

```
:goal_net:

Catch errors.
```

60. 💫

```
:dizzy:

Add or update animations and transitions.
```

61. 🗑️

```
:wastebasket:

Deprecate code that needs to be cleaned up.
```

62. 🛂

```
:passport_control:

Work on code related to authorization, roles and permissions.
```

63. 🩹

```
:adhesive_bandage:

Simple fix for a non-critical issue.
```

64. 🧐

```
:monocle_face:

Data exploration/inspection.
```

65. ⚰️

```
:coffin:

Remove dead code.
```

66. 🧪

```
:test_tube:

Add a failing test.
```

67. 👔

```
:necktie:

Add or update business logic
```

68. 🩺

```
:stethoscope:

Add or update healthcheck.
```

69. 🧱

```
:bricks:

Infrastructure related changes.
```

70. 🧑‍💻

```
:technologist:

Improve developer experience
```

### Now it's up to you

Whenever you make a commit and want to identify it with an emoji in order to make it easier to review, use this library :).