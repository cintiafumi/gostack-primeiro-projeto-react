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
