export interface Livro {
    id: number;
    nome: string;
    autor: string;
    editora: string;
    capa: string;
    isbn10: string;
    isbn13: string;
    dataPublicacao: string;
    dimensoes?: string;
    status?: string;  // Este campo pode ser 'Disponível' ou 'Indisponível'
  }
  