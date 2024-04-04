import React from 'react';
import { camisetas } from '../../mockData';
import CamisetaDetalhes from '../../components/CamisetaDetalhes';
import { Camiseta } from '../../models';

const CamisetaPage = ({ params }: { params: { id: string } }) => {
  const camiseta: Camiseta | undefined = camisetas.find((c: Camiseta) => c.id === parseInt(params.id));

  if (!camiseta) {
    return <div>Camiseta não encontrada</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <CamisetaDetalhes camiseta={camiseta} />
      </div>
    </div>
  );
};

export default CamisetaPage;