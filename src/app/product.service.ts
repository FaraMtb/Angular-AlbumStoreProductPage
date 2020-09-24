
import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ProductService {
  _albumUrl='../assets/album.jso';

  constructor(private _http: Http) {

  }

  getAlbum(id:Number){

    return this._http.get(this._albumUrl).pipe(map(response => {

      return response.json();

    }));



  }


}
