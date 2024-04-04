import { Camiseta } from './models';

export const camisetas: Camiseta[] = [
  {
    id: 1,
    nome: 'Camiseta Azul',
    imagem: 'https://via.placeholder.com/300',
    preco: 29.99,
    tamanhos: ['S', 'M', 'L'],
    cores: ['Azul', 'Branco'],
  },
  {
    id: 2,
    nome: 'Camiseta Vermelha',
    imagem: 'https://via.placeholder.com/300',
    preco: 24.99,
    tamanhos: ['S', 'M', 'XL'],
    cores: ['Vermelho', 'Preto'],
  }
];