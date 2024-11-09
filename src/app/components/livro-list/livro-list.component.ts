import { Component, OnInit } from '@angular/core';
import { LivroService } from '../../services/livro.service';
import { Router } from '@angular/router';
import { Livro } from '../../models/livro.model';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.css']
})
export class LivroListComponent implements OnInit {
  livros: Livro[] = [];
  pesquisa: string = '';
  mostrarAlerta: boolean = false;
  confirmarId: number = 0;

  constructor(private livroService: LivroService, private router: Router) {}

  ngOnInit(): void {
    this.livros = this.livroService.getLivros();
  }

  adicionarLivro(): void {
    this.router.navigate(['/livro/create']);
  }

  onFileChange(event: any, livro: Livro): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        livro.capa = reader.result as string;
        this.livroService.editarLivro(livro.id, livro);
      };
      reader.readAsDataURL(file);
    }
  }

  confirmarDelecao(id: number): void {
    this.confirmarId = id;
    this.mostrarAlerta = true;
  }

  deletarLivro(id: number): void {
    this.livroService.deletarLivro(id);
    this.livros = this.livroService.getLivros();
    this.mostrarAlerta = false;
  }

  cancelarDelecao(): void {
    this.mostrarAlerta = false;
  }

  editarLivro(livro: Livro): void {
    this.router.navigate([`/livro/edit/${livro.id}`]);
  }

  emprestarLivro(livro: Livro): void {
    livro.status = 'Emprestado';
    this.livroService.editarLivro(livro.id, livro);
  }

  devolverLivro(livro: Livro): void {
    livro.status = 'Disponível';
    this.livroService.editarLivro(livro.id, livro);
  }
}
