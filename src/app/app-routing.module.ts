import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroListComponent } from './components/livro-list/livro-list.component';
import { LivroFormComponent } from './components/livro-form/livro-form.component';

const routes: Routes = [
  { path: 'livros', component: LivroListComponent },
  { path: 'livro/create', component: LivroFormComponent },
  { path: 'livro/edit/:id', component: LivroFormComponent },
  { path: '', redirectTo: '/livros', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
