import React from 'react';
import { Camiseta } from '../models';
import Link from 'next/link';

interface CamisetaListagemPropiedades {
  camisetas: Camiseta[];
}

const CamisetaListagem = ({ camisetas }: CamisetaListagemPropiedades) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {camisetas.map(camiseta => (
        <div key={camiseta.id} className="bg-white p-4 rounded shadow-md">
          <img src={camiseta.imagem} alt={camiseta.nome} className="w-full mb-2" />
          <h2 className="text-lg font-semibold">{camiseta.nome}</h2>
          <p className="text-gray-600">${camiseta.preco}</p>
          <p className="text-gray-600">Tamanhos: {camiseta.tamanhos.join(', ')}</p>
          <p className="text-gray-600">Cores: {camiseta.cores.join(', ')}</p>
          <p><Link href={`/camisetas/${camiseta.id}`}>Ver Detalhes</Link></p>
        </div>
      ))}
    </div>
  );
};

export default CamisetaListagem;