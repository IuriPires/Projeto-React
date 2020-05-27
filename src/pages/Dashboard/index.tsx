import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './style'

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/24615675?s=460&u=0baced351bc8899d14f0afcaa3e18f2396a8d607&v=4"
            alt="Iuri Pires"
          />
          <div>
            <strong>IuriPires/ProjetoReact</strong>
            <p>Primeiro projeto real com React</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;
