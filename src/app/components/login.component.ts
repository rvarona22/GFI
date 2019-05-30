import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Loginmain } from '../models/loginmain';

@Component({
  selector: 'app-login',
  templateUrl: '../views/login.html',
  styleUrls: ['../../assets/css/styles.css']
})
export class LoginComponent implements OnInit {

  public login: Loginmain;
  constructor(
      private _route: ActivatedRoute,
      private _router: Router
  ) {
    this.login = new Loginmain('', '');
  }

  ngOnInit() {
    // console.log('this.login');
  }
  onSubmit() {
    // console.log(this.login.nombre);
    // console.log(this.login.pass);
    this.guardar_local();
  }
    guardar_local() {
        let nombre: string = this.login.nombre;
        let pss: string = this.login.pass;
        sessionStorage.setItem( 'nombrelogin', nombre );
        sessionStorage.setItem( 'password', pss );
        // this._router.navigate(['../views/pelis']);
        this._router.navigate(['/pelis']);
    }
    obtener_local() {
        let nombre = sessionStorage.getItem('nombrelogin');
        let pss = sessionStorage.getItem('password');
    }

}
