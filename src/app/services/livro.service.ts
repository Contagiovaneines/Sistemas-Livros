import { Injectable } from '@angular/core';
import { Livro } from '../models/livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private livros: Livro[] = [
    {
      id: 1,
      nome: 'O Senhor dos Anéis',
      autor: 'J.R.R. Tolkien',
      editora: 'HarperCollins',
      capa: 'https://harpercollins.com.br/cdn/shop/products/9786555114355.jpg?v=1691738135',  // Capa do livro
      isbn10: '0261103570',
      isbn13: '9780261103573',
      dataPublicacao: '1954-07-29',
      dimensoes: '15 x 22 cm'
    },
    {
      id: 2,
      nome: 'Dom Casmurro',
      autor: 'Machado de Assis',
      editora: 'Editora Nacional',
      capa: 'https://m.media-amazon.com/images/I/61Z2bMhGicL._AC_UF1000,1000_QL80_.jpg',
      isbn10: '8520900857',
      isbn13: '9788520900850',
      dataPublicacao: '1899-10-15',
      dimensoes: '14 x 21 cm'
    },
    {
      id: 3,
      nome: 'O Pequeno Príncipe',
      autor: 'Antoine de Saint-Exupéry',
      editora: 'Agir',
      capa: 'https://m.media-amazon.com/images/I/81TmOZIXvzL._AC_UF1000,1000_QL80_.jpg',
      isbn10: '8501061983',
      isbn13: '9788501061984',
      dataPublicacao: '1943-04-06',
      dimensoes: '13 x 18 cm'
    },
    {
      id: 4,
      nome: '1984',
      autor: 'George Orwell',
      editora: 'Companhia das Letras',
      capa: 'https://m.media-amazon.com/images/I/819js3EQwbL._AC_UF1000,1000_QL80_.jpg',
      isbn10: '8535912204',
      isbn13: '9788535912205',
      dataPublicacao: '1949-06-08',
      dimensoes: '15 x 21 cm'
    },
    {
      id: 5,
      nome: 'A Revolução dos Bichos',
      autor: 'George Orwell',
      editora: 'Companhia das Letras',
      capa: 'https://m.media-amazon.com/images/I/91BsZhxCRjL._AC_UF1000,1000_QL80_.jpg',
      isbn10: '8535912182',
      isbn13: '9788535912182',
      dataPublicacao: '1945-08-17',
      dimensoes: '14 x 21 cm'
    },
    {
      id: 6,
      nome: 'A Arte da Guerra',
      autor: 'Sun Tzu',
      editora: 'Glenat',
      capa: 'https://m.media-amazon.com/images/I/51Fe45NGwkL._AC_UF1000,1000_QL80_.jpg',
      isbn10: '8531405818',
      isbn13: '9788531405812',
      dataPublicacao: '5 a.C.',
      dimensoes: '12 x 18 cm'
    },
    {
      id: 7,
      nome: 'O Código Da Vinci',
      autor: 'Dan Brown',
      editora: 'Sextante',
      capa: 'https://m.media-amazon.com/images/I/91QSDmqQdaL._AC_UF1000,1000_QL80_.jpg',
      isbn10: '859929626X',
      isbn13: '9788599296260',
      dataPublicacao: '2003-03-18',
      dimensoes: '15 x 22 cm'
    },
    {
      id: 8,
      nome: 'Harry Potter e a Pedra Filosofal',
      autor: 'J.K. Rowling',
      editora: 'Rocco',
      capa: 'https://m.media-amazon.com/images/I/81ibfYk4qmL._AC_UF1000,1000_QL80_.jpg',
      isbn10: '8532510918',
      isbn13: '9788532510918',
      dataPublicacao: '1997-06-26',
      dimensoes: '14 x 21 cm'
    },
    {
      id: 9,
      nome: 'Moby Dick',
      autor: 'Herman Melville',
      editora: 'Penguin Classics',
      capa: 'https://m.media-amazon.com/images/I/A1xWjc50fmL._AC_UF1000,1000_QL80_.jpg',
      isbn10: '0142437247',
      isbn13: '9780142437247',
      dataPublicacao: '1851-10-18',
      dimensoes: '16 x 24 cm'
    },
    {
      id: 10,
      nome: 'A Moreninha',
      autor: 'Joaquim Manuel de Macedo',
      editora: 'Saraiva',
      capa: 'https://m.media-amazon.com/images/I/61rqadtSs3S._AC_UF1000,1000_QL80_.jpg',
      isbn10: '8502101037',
      isbn13: '9788502101031',
      dataPublicacao: '1844-05-10',
      dimensoes: '12 x 18 cm'
    }
  ];

  constructor() { }

  getLivros(): Livro[] {
    return this.livros;
  }

  addLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  editarLivro(id: number, livro: Livro): void {
    const index = this.livros.findIndex(l => l.id === id);
    if (index !== -1) {
      this.livros[index] = livro;
    }
  }

  deletarLivro(id: number): void {
    const index = this.livros.findIndex(l => l.id === id);
    if (index !== -1) {
        this.livros.splice(index, 1);
    }
}

}
