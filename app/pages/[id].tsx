import React from 'react';
import { useRouter } from 'next/router';
import { camisetas } from '../mockData';
import CamisetaDetalhes from '../components/CamisetaDetalhes';
import { Camiseta } from '../models';

const CamisetaPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const camiseta: Camiseta | undefined = camisetas.find((c: Camiseta) => c.id === parseInt(id as string));

  if (!camiseta) {
    return <div>Camiseta não encontrada</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <CamisetaDetalhes camiseta={camiseta} />
    </div>
  );
};

export default CamisetaPage;