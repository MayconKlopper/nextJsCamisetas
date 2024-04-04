import React from 'react';
import { camisetas } from '../mockData';
import CamisetaListagem from '../components/CamisetaListagem';

const IndexPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Lista de Camisetas</h1>
      <CamisetaListagem camisetas={camisetas} />
    </div>
  );
};

export default IndexPage;