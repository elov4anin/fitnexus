import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    loginFrom: FormGroup = new FormGroup({
          'email': new FormControl('', [Validators.required, Validators.email]),
          'password': new FormControl('', [Validators.required, Validators.min(3)]),
    });

    constructor(private _router: Router) {
    }

    ngOnInit(): void {
    }

    login(): void {
        this._router.navigate(['/get-started']);
    }
}
