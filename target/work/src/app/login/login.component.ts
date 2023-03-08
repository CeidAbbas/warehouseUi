import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public connection: boolean = false;
  public user: string = "";
  public password: string = "";

  constructor(private router: Router,
              private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    this.loginService.checkConnection().subscribe(login => {
        login ? this.connection = true : this.connection = false;
      }
    );
  }

  login() {
    this.router.navigate(['/dashboard']).then(r => {
    });
  }
}
