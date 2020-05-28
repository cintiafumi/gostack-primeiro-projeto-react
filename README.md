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

---

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

Importar o `Switch` que vai permitir que apenas uma rota seja renderizada e o `Route` que vai redirecionar para a página dependendo da rota
```tsx
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository" component={Repository} />
  </Switch>
)

export default Routes;
```

E em `src/App.tsx`, importar o `BrowserRouter` que vai entender o `path` com `"/"` passado no navegador
```tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
```

### Utilizando Styled Components
Adicionar o pacote `styled-components` para estilizar o componente de maneira escopada
```bash
yarn add styled-components
yarn add -D @types/styled-components
```

Instalar a extensão do styled-components do VSCode.

Ao invés de usarmos um arquivo `.css` que acaba sendo global, iremos utilizar um arquivo `.ts` que deixara a estilização somente no escopo aplicado. Criamos então um arquivo `styles.ts` e estilizamos com `template literals`
```ts
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
`;
```

E utilizamos esse componente estilizado dessa forma
```tsx
import React from 'react';

import { Title } from './styles';

const Dashboard: React.FC = () => {
  return <Title>Dashboard</Title>
}

export default Dashboard;
```

O `style-components` permite usar a mesma sintaxe para React e React Native.

Para criar um estilo global, criar um arquivo `src/styles/global.ts`
```ts
import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
```

E importar no `src/App.tsx`
```tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global'
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
```

Importo a fonte Roboto do Google fonts e coloco na head do `index.html`

### Estilizando Dashboard
Conceito do styled-components é como dos pré-processadores, então é possível encadear internamente os estilos.

Adicionar o pacote `polished` para trabalhar com as cores
```bash
yarn add polished
```

Adicionar o pacote `react-icons`
```bash
yarn add react-icons
```

`src/pages/Dashboard/index.tsx`
```tsx
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="#">
        <img src="https://avatars1.githubusercontent.com/u/34029172?s=460&u=87514f974accb262acd3ed1f3cd9553684b4d926&v=4" alt="Cintia Fumi"/>

        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highlt scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="#">
        <img src="https://avatars1.githubusercontent.com/u/34029172?s=460&u=87514f974accb262acd3ed1f3cd9553684b4d926&v=4" alt="Cintia Fumi"/>

        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highlt scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="#">
        <img src="https://avatars1.githubusercontent.com/u/34029172?s=460&u=87514f974accb262acd3ed1f3cd9553684b4d926&v=4" alt="Cintia Fumi"/>

        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highlt scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
)

export default Dashboard;
```

`src/pages/Dashboard/styles.ts`
```ts
import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3A3A3A;

    &::placeholder {
      color: #a8b3b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04D361;
    border-radius: 0 5px 5px 0;
    border: 0;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04D361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }

      p {
        font-size: 18px;
        color: #A8A8B3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
```

### Conectando a API
Instalar o axios
```bash
yarn add axios
```

Criar o arquivo `src/services/api.ts`
```ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com'
})

export default api;
```

Importar `api` e `useState` em `src/pages/Dashboard/index.tsx` e criar a estrutura para receber os repositórios da api. Precisamos também criar a função `handleAddRepository` para adicionar um novo repositório.

Adicionar no `eslintrc.json`
```json
  "rules": {

    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true
      }
    ],

  }
```

Criar a tipagem somente do que iremos utilizar
```tsx
import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('');
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="#">
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard;
```

### Lidando com erros
Apresentar erro quando input estiver vazio ou quando não existir repositório com o nome buscado. Além disso, passar por props no component de `styled-components` e alterar o `css` a partir dessa props.
```tsx
import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca do repositório');
    }

  }

  return (
    <>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      { inputError && <Error>{inputError}</Error> }


    </>
  )
}

export default Dashboard;
```

```ts
import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3A3A3A;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) => props.hasError && css`
      border-color: #c53030;
    `}

    &::placeholder {
      color: #a8b3b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04D361;
    border-radius: 0 5px 5px 0;
    border: 0;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04D361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
```

### Salvando no Storage
```tsx

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem('@GithubExplorer:repositories');

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories))
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca do repositório');
    }
  }

}
```

### Navegando entre rotas
```tsx
import { Link } from 'react-router-dom';

  return (

        {repositories.map(repository => (
          <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>

  )
```

### Estilizando Detalhe


### Listando issues da API
