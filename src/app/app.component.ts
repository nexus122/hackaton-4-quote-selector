import { Component } from '@angular/core';
import { PhraseService } from './services/phrase.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // Variables en nuestra aplicación.
  title: string = 'hackaton-4-quote-selector';
  apptitle: string = 'Quote Gen | Find your daily Quote';
  quote: string = 'The best way to predict the future is to create it.';
  author: string = 'Abraham Lincoln';
  tags: any = ["life","future", "inspire", "management", "sports", "funny", "love", "art", "students"];

  constructor(private ps: PhraseService) { }

  // Función que me devuelve una frase aleatoria.
  getQuote() {
    this.ps.getPhrase().subscribe(
      (data: any) => {        
        // Cargamos frase y autor.
        this.quote = data.contents.quotes[0].quote;
        this.author = data.contents.quotes[0].author;

        // Cargamos las etiquetas de la frase.
        let largo = Object.keys(data.contents.quotes[0].tags).length - 1;
        for (let i = 0; i < largo; i++) {
          this.tags.push(data.contents.quotes[0].tags[i]);
        }
      }
    );
  }

  // Función que me devuelve una frase aleatoria de una categoria.
  getQuoteCategoryFilter(category: string) {
    this.ps.getPhraseCategoryFilter(category).subscribe(
      (data: any) => {
        console.log('Data: ', data);
        this.quote = data.contents.quotes[0].quote;
        this.author = data.contents.quotes[0].author;

        let largo = Object.keys(data.contents.quotes[0].tags).length - 1;
        for (let i = 0; i < largo; i++) {
          this.tags.push(data.contents.quotes[0].tags[i]);
        }        
      }
    );
  }

  // Al iniciarse la aplicación me devuelve una frase
  ngOnInit() {
    this.getQuote();
  }
}
