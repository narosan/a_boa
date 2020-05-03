import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-config-deslogado',
  templateUrl: './config-deslogado.component.html',
  styleUrls: ['./config-deslogado.component.scss'],
})
export class ConfigDeslogadoComponent implements OnInit {

  public singInForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.singInForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.maxLength(16)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    });
  }

  public submitSingIn() {
    
  }

  singInWithFacebook() {
    FB.login(this.responseFacebookSingIn.bind(this));
  }

  responseFacebookSingIn(response: fb.StatusResponse) {
    console.log(response);
  }
}
