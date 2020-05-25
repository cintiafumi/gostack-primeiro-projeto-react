# Primeiro projeto com React

## Estrutura e padrões
### Criando projeto
```bash
create-react-app primeiro-projeto-react --template=typescript
cd primeiro-projet-react
```

Abrir o projeto no VSCode. Excluir os arquivos da pasta `src` que não iremos utilizar (README.md, App.css, App.test.tsx, index.css, logo.svg, serviceWorker.ts).

Ir no `index.tsx` e no `App.tsx` para remover o que não utilizaremos.

Na pasta `public` remover os arquivos favicon.ico, logos e manifest.json, e no index.html remover essas referências.

### EditorConfig
Na raiz do projeto, clicar com botão direito do mouse e `Generate .editorconfig`
```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
```

### ESLint
```bash
yarn add -D eslint@^6.8.0
```

Remover do `package.json` essa parte
```json
{
  "eslintConfig": {
    "extends": "react-app"
  },
}
```

Volta para o terminar e executa
```bash
yarn eslint --init

? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? React
? Does your project use TypeScript? Yes
? Where does your code run? Browser
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
? What format do you want your config file to be in? JSON
Checking peerDependencies of eslint-config-airbnb@latest
The config that you've selected requires the following dependencies:

eslint-plugin-react@^7.19.0 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 eslint-plugin-import@^2.20.1 eslint-plugin-jsx-a11y@^6.2.3 eslint-plugin-react-hooks@^2.5.0 || ^1.7.0 @typescript-eslint/parser@latest

? Would you like to install them now with npm? No
```

Copio essa parte `eslint-plugin-react@^7.19.0 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 eslint-plugin-import@^2.20.1 eslint-plugin-jsx-a11y@^6.2.3 eslint-plugin-react-hooks@^2.5.0 || ^1.7.0 @typescript-eslint/parser@latest` e adiciono na mão para remover a parte do eslint que já foi adicionada e removemos uma das versões do hooks.
```bash
yarn add -D eslint-plugin-react@^7.19.0 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint-plugin-import@^2.20.1 eslint-plugin-jsx-a11y@^6.2.3 eslint-plugin-react-hooks@^2.5.0 @typescript-eslint/parser@latest
```

Criar o arquivo `.eslintignore` e ignoro todos arquivos `.js`
```
**/*.js
node_modules
build
```

E no `eslintrc.json` alterar algumas configurações
```json
{
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "import/prefer-default-export": "off"
  }
}
```

No terminal, adicionar o pacote para entender as importações typescript
```bash
yarn add -D eslint-import-resolver-typescript
```

Adicionar no `.eslintrc.json` a última rule e os settings
```json
{
  "rules": {

    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}
```

### Prettier
Adicionar os pacotes
```bash
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

E no `eslintrc.json` adicionar mais 2 propriedades no `extends`, adicionar 1 propriedade em `plugins`, e em `rules`
```json
{
  "extends": [

    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "plugins": [

    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",

  }
}
```

Criar um arquivo `prettier.config.js`
```js
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  allowParens: 'avoid',
};
```

## Criando a aplicação
### Criando Rotas
Instalar o pacote `react-router-dom`
```bash
yarn add react-router-dom
```

Criar a pasta com arquivos das páginas `src/pages/Dashboard/index.tsx`
```tsx
import React from 'react';

const Dashboard: React.FC = () => {
  return <h1>Dashboard</h1>
}

export default Dashboard;
```

E `src/pages/Repository/index.tsx`
```tsx
import React from 'react';

const Repository: React.FC = () => {
  return <h1>Repository</h1>
}

export default Repository;
```

Criar o arquivo `src/routes/index.tsx` e adicionar o pacote de tipagem
```bash
yarn add -D @types/react-router-dom
```


### Utilizando Styled Components

### Estilizando Dashboard

### Conectando a API

### Lidando com erros

### Salvando no Storage

### Navegando entre rotas

### Estilizando Detalhe

### Listando issues da API
