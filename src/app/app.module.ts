import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LivroListComponent } from './components/livro-list/livro-list.component';
import { LivroFormComponent } from './components/livro-form/livro-form.component';
import { LivroService } from './services/livro.service';
import { FilterPipe } from './pipes/filter.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LivroListComponent,
    LivroFormComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
