import { Component, OnInit } from '@angular/core';
import { Pelismain } from '../models/pelismain';
import { PelisService } from '../services/pelis.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs';
// import {url} from "inspector";

@Component({
    selector: 'app-pelis',
    templateUrl: '../views/pelis.html',
    styleUrls: ['../../assets/css/styles.css'],
    providers: [PelisService]
})
export class PelisComponent implements OnInit {
    // public pelicula: Pelismain;

    public title: string;
    result: Pelismain;
    // private peliObservable : Observable<Pelismain[]> ;

    constructor(
        private peliService: PelisService
    ) {
        peliService.buscoPeliTitulo(this.title)
            .subscribe(result => {
                this.result = result;
                // console.log(result);
            });
        // this.pelicula = new Pelismain('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
    }
    ngOnInit() {
    }
    onSubmitPeli() {
        this.guardar_local();
    }
    buscoPeliTitulo(title) {
         this.peliService.buscoPeliTitulo(title)
            .subscribe(result => {
                this.result = result;
                console.log(result);
            });
    }
    guardar_local() {
        const peli: string = this.result.Title;
        const direc: string = this.result.Director;
        const ano: string = this.result.Year;
        const poster: string = this.result.Poster;
        localStorage.setItem( 'nombrepeli', peli );
        localStorage.setItem( 'nombredir', direc );
        localStorage.setItem( 'anopeli', ano );
        localStorage.setItem( 'imgpeli', poster );
    }
    obtener_local() {
        const peli = localStorage.getItem('nombrepeli');
        const direc = localStorage.getItem('nombredir');
        const ano = localStorage.getItem('anopeli');
        const poster = localStorage.getItem('imgpeli');
    }

}
