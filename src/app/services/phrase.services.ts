
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

export class PhraseService {

    constructor(private http: HttpClient) { };

    getPhrase() { // Esta función devuelve una frase aleatoria.
        let categorys = ['inspire','management', 'sports', 'life','funny','love','art','students']
        let category = categorys[Math.floor(Math.random() * categorys.length)];
        let url = `https://quotes.rest/qod?${category}=life&language=en`;

        // Hacemos la peticion a la API y devolvemos los datos.
        return this.http.get(url);
    }

    getPhraseCategoryFilter(category: string) {
        let url = `https://quotes.rest/qod?category=${category}&language=en`;

        // Hacemos la peticion a la API y devolvemos los datos.
        return this.http.get(url);
    }

}