import '../../assets/scss/components/home/index.scss';
import React, { FC, ReactElement } from 'react';
import Modal from '../../modules/kit/Modal';
import Layout from '../../modules/templates/Layuot';
import HomeModal from './HomeModal';

const Home: FC = function (): ReactElement {
  return (
    <Layout>
      <Layout.Head />
      <Layout.Body>
        <Modal>
          <HomeModal />
        </Modal>
      </Layout.Body>
    </Layout>
  );
};

export default Home;
