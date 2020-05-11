<h1 align="center">
    <img alt="Desafio UmHelp" src="https://res.cloudinary.com/marcelojrfarias/image/upload/v1589133507/1help_vfpr84.jpg" />
    <br>
    UmHelp
</h1>
<h2 align="center">
    Serviço de Descontos Individuais
</h2>
<h4 align="center">
  Serviço responsável por cadastrar, atualizar, deletar e buscar os descontos designados para cada usuário.
</h4>

<p align="center">
  <a href="#toolbox-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#filecabinet-entidades">Entidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :toolbox: Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:
- [NodeJS][nodejs]
- [Express][express]
- [Typescript][typescript]
- [Docker][docker]
- [PostgreSQL][postgresql]
- [TypeORM][typeorm]
- [Eslint][eslint]
- [Prettier][prettier]
- [Editor Config][editor-config]
- [Visual Studio Code][vscode]
- E alguns outros pacotes...

## :rocket: Como rodar

Para clonar e rodar essa aplicação, você irá precisar do [Git][git], [Node.js v10.16][nodejs] (ou superior) + [Yarn v1.13][yarn] (ou superior) instalados em seu computador. Rode em seu terminal:

```bash
# Clone this repository
$ git clone https://github.com/marcelojrfarias/1help

# Go into the repository
$ cd 1help/discounts

# Install dependencies
$ yarn

# Run the app
$ yarn dev:server
```

## :file_cabinet: Entidades
### Desconto
| Descrição                 | Campo   | Tipo                            |
|---------------------------|---------|---------------------------------|
| Identificação do desconto | id      | uuid                            |
| Nome do desconto          | name    | varchar                         |
| Tipo do desconto*         | type    | enum ['absolute', 'percentage'] |
| Valor do desconto*        | value   | integer                         |
| Identificação do usuário* | user_id | uuid                            |

**requisito do projeto.*

## :memo: Licença
Este projeto está sob a licença MIT. Olhe o [LICENSE](https://github.com/marcelojrfarias/1help/blob/master/LICENSE) para maiores informações.

---

Feito com 💗 por Marcelo Farias 👋 [Entre em contato!](https://www.linkedin.com/in/marcelojrfarias/)

[nodejs]: https://nodejs.org/
[gostack]: https://rocketseat.com.br/bootcamp
[express]: https://expressjs.com/
[git]: https://git-scm.com
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[axios]: https://github.com/axios/axios
[reactjs]: https://reactjs.org/
[react-native]: https://reactnative.dev/
[editor-config]: https://editorconfig.org/
[typescript]: https://www.typescriptlang.org/
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
[typeorm]: https://typeorm.io/
[docker]: https://www.docker.com/
[postgresql]: https://www.postgresql.org/
