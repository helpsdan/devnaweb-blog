---
title: Utilizando github emoji nos commits e pull requests
date: '2022-04-30'
tags: ['tips', 'github', 'git', 'emoji']
draft: false
summary: 'Voltando com os artigos a todo vapor, espero que esse mês de maio seja muito produtivo. Hoje vou falar sobre a lib do github `Gitmoji`.'
---

<TOCInline toc={props.toc} asDisclosure toHeading={3} />

![gitmoji](/static/images/gitmoji.gif)

### Fala devs, olha eu aqui de novo! Como cês tão?

Voltando com os artigos a todo vapor, espero que esse mês de maio seja muito produtivo. Hoje vou falar sobre a lib do github `Gitmoji`.

### O que é Gitmoji?

Gitmoji é uma iniciativa para padronizar e explicar o uso de emojis nas mensagens de commit do GitHub.

O uso de emojis em mensagens de commit fornece uma maneira fácil de identificar o propósito ou intenção de um commit apenas observando os emojis usados. Como existem muitos emojis diferentes, achei necessário criar um guia que possa ajudar a usar os emojis com mais facilidade.

### Exemplo de uso

Caso você precise de algumas ideias para integrar o gitmoji em seu projeto, aqui está uma maneira prática de usá-lo:

- **intenção**: um emoji da lista. (Vou passar a lista já já)
- **escopo**: uma string opcional que adiciona informações contextuais para o escopo da mudança.
- **mensagem**: Uma breve explicação da alteração.

```
<intenção> [escopo?][:?] <mensagem>
```

para saber mais acesse o site [gitmoji.dev](https://gitmoji.dev/)

### Exemplos de emoji e suas utilidades

1. 🎨

```
:art:

Melhorar a estrutura/formato do código.
```

2. ⚡️
```
:zap:

Melhorar o desempenho.
```

3. 🔥

```
:fire:

Remova o código ou os arquivos.
```

4. 🐛

```
:bug:

Corrija um erro.
```

5. 🚑️

```
:ambulance:

Correção crítica.
```

6. ✨

```
:sparkles:

Introduzir novos recursos.
```

7. 📝

```
:memo:

Adicione ou atualize a documentação.
```

8. 🚀

```
:rocket:

Implante coisas.
```

9. 💄

```
:lipstick:

Adicione ou atualize a interface do usuário e os arquivos de estilo.
```

10. 🎉

```
:tada:

Comece um projeto.
```
11. ✅

``` 
:white_check_mark:

Adicione, atualize ou passe nos testes.
```

12. 🔒️

```
:lock:

Corrigir problemas de segurança.
```

13. 🔐

```
:closed_lock_with_key:

Adicione ou atualize segredos.
```

14. 🔖

```
:bookmark:

Marcações de lançamento/versão.
```

15. 🚨

```
:rotating_light:

Corrige os avisos do compilador/linter.
```

16. 🚧

```
:construction:

Trabalho em progresso.
```

17. 💚

```
:green_heart:

Corrigir a compilação de CI.
```

18. ⬇️

```
:arrow_down:

Faça o downgrade das dependências.
```

19. ⬆️

```
:arrow_up:

Dependências de atualização.
```

20. 📌

```
:pushpin:

Fixe dependências em versões específicas.
```

21. 👷

```
:construction_worker:

Adicione ou atualize o sistema de compilação de CI.
```

22. 📈

```
:chart_with_upwards_trend:

Adicione ou atualize análises ou código de rastreamento.
```

23. ♻️

```
:recycle:

Refatorar código.
```

24. ➕

```
:heavy_plus_sign:

Adicione uma dependência.
```

25. ➖

```
:heavy_minus_sign:

Remova uma dependência.
```

26. 🔧

```
:wrench:

Adicione ou atualize arquivos de configuração.
```

27. 🔨

```
:hammer:

Adicione ou atualize scripts de desenvolvimento.
```

28. 🌐

```
:globe_with_meridians:

Internacionalização e localização.
```

29. ✏️

```
:pencil2:

Corrigir erros de digitação.
```

30. 💩

```
:poop:

Escreva código ruim que precisa ser melhorado.
```

31. ⏪️

```
:rewind:

Reverter alterações.
```

32. 🔀

```
:twisted_rightwards_arrows:

Mesclar ramos.
```

33. 📦️

```
:package:

Adicione ou atualize arquivos ou pacotes compilados.
```

34. 👽️

```
:alien:

Código de atualização devido a alterações externas da API.
```

35. 🚚

```
:truck:

Mova ou renomeie recursos (por exemplo: arquivos, caminhos, rotas).
```

36. 📄

```
:page_facing_up:

Adicione ou atualize a licença.
```

37. 💥

```
:boom:

Introduzir mudanças de ruptura.
```

38. 🍱

```
:bento:

Adicione ou atualize ativos.
```

39. ♿️

```
:wheelchair:

Melhorar a acessibilidade.
```

40. 💡

```
:bulb:

Adicione ou atualize comentários no código-fonte.
```

41. 🍻

```
:beers:

Escreva código bêbado.
```

42. 💬

```
:speech_balloon:

Adicione ou atualize texto e literais.
```

43. 🗃️

```
:card_file_box:

Execute alterações relacionadas ao banco de dados.
```

44. 🔊

```
:loud_sound:

Adicione ou atualize logs.
```

45. 🔇

```
:mute:

Remova os registros.
```

46. 👥

```
:busts_in_silhouette:

Adicione ou atualize o(s) colaborador(es).
```

47. 🚸

```
:children_crossing:

Melhorar a experiência/usabilidade do usuário.
```

48. 🏗️

```
:building_construction:

Faça alterações arquitetônicas.
```

49. 📱

```
:iphone:

Trabalhe em design responsivo.
```

50. 🤡

```
:clown_face:

Coisas de zombaria.
```

51. 🥚

```
:egg:

Adicione ou atualize um ovo de páscoa.
```

52. 🙈

```
:see_no_evil:

Adicione ou atualize um arquivo .gitignore.
```

53. 📸

```
:camera_flash:

Adicione ou atualize instantâneos.
```

54. ⚗️

```
:alembic:

Faça experimentos.
```

55. 🔍️

```
:mag:

Melhore o SEO.
```

56. 🏷️

```
:label:

Adicionar ou atualizar tipos.
```

57. 🌱

```
:seedling:

Adicione ou atualize arquivos de semente.
```

58. 🚩

```
:triangular_flag_on_post:

Adicione, atualize ou remova sinalizadores de recursos.
```

59. 🥅

```
:goal_net:

Pegar erros.
```

60. 💫

```
:dizzy:

Adicione ou atualize animações e transições.
```

61. 🗑️

```
:wastebasket:

Descontinuar o código que precisa ser limpo.
```

62. 🛂

```
:passport_control:

Trabalhar no código relacionado à autorização, funções e permissões.
```

63. 🩹

```
:adhesive_bandage:

Correção simples para um problema não crítico.
```

64. 🧐

```
:monocle_face:

Exploração/inspeção de dados.
```

65. ⚰️

```
:coffin:

Remova o código morto.
```

66. 🧪

```
:test_tube:

Adicione um teste com falha.
```

67. 👔

```
:necktie:

Adicionar ou atualizar a lógica de negócios
```

68. 🩺

```
:stethoscope:

Adicione ou atualize a verificação de integridade.
```

69. 🧱

```
:bricks:

Mudanças relacionadas à infraestrutura.
```

70. 🧑‍💻

```
:technologist:

Melhore a experiência do desenvolvedor
```

### Agora é com você 

Sempre que fizer um commit e quiser identificá-lo com um emoji a fim de deixar mais fácil a revisão, utilize essa biblioteca :).