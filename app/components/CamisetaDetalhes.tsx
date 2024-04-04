import React from 'react';
import { Camiseta } from '../models';

interface CamisetaDetalhesPropriedades {
  camiseta: Camiseta;
}

const CamisetaDetalhes = ({ camiseta }: CamisetaDetalhesPropriedades) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <img src={camiseta.imagem} alt={camiseta.nome} className="w-full mb-2" />
      <h2 className="text-lg font-semibold">{camiseta.nome}</h2>
      <p className="text-gray-600">${camiseta.preco}</p>
      <p className="text-gray-600">Tamanhos: {camiseta.tamanhos.join(', ')}</p>
      <p className="text-gray-600">Cores: {camiseta.cores.join(', ')}</p>
    </div>
  );
};

export default CamisetaDetalhes;