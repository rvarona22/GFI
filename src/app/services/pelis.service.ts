import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelismain } from '../models/pelismain';
import { Observable } from 'rxjs';

@Injectable()
export class PelisService {
    public url: string;
    public title: string;
    // tslint:disable-next-line:variable-name
    constructor(private _http: HttpClient) {}
    public buscoPeliTitulo(title): Observable<Pelismain> {
        const url = 'http://www.omdbapi.com/?t=' + title + '&apikey=f12ba140';
        return this._http.get<Pelismain>(url);
    }
 }
