import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LivroService } from '../../services/livro.service';
import { Livro } from '../../models/livro.model';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css']
})
export class LivroFormComponent implements OnInit {
  livro: Livro = {
    id: 0,
    nome: '',
    autor: '',
    editora: '',
    capa: '',
    isbn10: '',
    isbn13: '',
    dataPublicacao: '',
    dimensoes: '',
  };

  editMode: boolean = false;

  constructor(
    public router: Router,
    private livroService: LivroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      const livroId = Number(id);
      const livro = this.livroService.getLivros().find(l => l.id === livroId);

      if (livro) {
        this.livro = { ...livro };
      } else {
        console.error('Livro não encontrado');
        this.router.navigate(['/livros']);
      }
    }
  }

  salvarLivro(): void {
    if (this.editMode) {
      if (this.livro.id !== 0) {
        this.livroService.editarLivro(this.livro.id, this.livro);
      } else {
        console.error('ID do livro inválido para edição');
      }
    } else {
      this.livro.id = this.livroService.getLivros().length + 1;
      this.livroService.addLivro(this.livro);
    }
    this.router.navigate(['/livros']);
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.livro.capa = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
