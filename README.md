<h4 align="center"> 
	React Native: guardando informações localmente 
</h4>

<p align="center">
  <a href="#information_source-o-que-é-o-ficando-online">O que é o guardando informações localmente?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :information_source: O que é o AluraHub?

O React Native: guardando informações, é um projeto que foi desenvolvido na formação React Native da Alura. Nessa etapa foi desenvolvido um to do list.

Como ele funciona? O app consome inicialmenta informações do AsyncStorage, posteriormente foi alterado para consumi dados de um banco de dados feito em SQLite.

O APP tem as funcionalidades de  mostrar, salvar, editar e excluir notas.

<h1 align="center">
    <img alt="Demonstracao" title="Demonstracao" src=".images/ficando-online-newdesign.gif" width="400px" />
</h1>


## :rocket: Tecnologias

Esse projeto foi desenvolvido com a utilização das seguintes tecnologias:
- [React Native][rn]
- [Expo][expo]
- [AsyncStorage][AsyncStorage]
- [SQLite][SQLite]


## :information_source: Como usar

Para copiar e executar essa aplicação, você precisa de três pré-requisitos: [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] intalados no seu computador.

No terminal, digite os comandos a seguir:

### Baixar e instalar o projeto

```bash
# Clonar esse repositório
$ git clone https://github.com/deciofrancis/React-Native-info-local

# Vá para o ropositório
$ cd React Native info local

# Instale as dependências
$ npm install
```

### Executar o Mobile

```bash
# Execute em outro terminal (dentro da pasta AluraHub)
$ expo start
```

[nodejs]: https://nodejs.org/
[expo]: https://docs.expo.dev/
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[AsyncStorage]: https://docs.expo.dev/versions/latest/sdk/async-storage/
[SQLite]: https://docs.expo.dev/versions/latest/sdk/sqlite/
