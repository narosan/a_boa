import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';
import { User } from 'src/app/model/User';
import { LoginProviderService } from 'src/app/services/api/login-provider.service';
import { HttpResponseBase } from '@angular/common/http';

@Component({
  selector: 'app-config-deslogado',
  templateUrl: './config-deslogado.component.html',
  styleUrls: ['./config-deslogado.component.scss'],
})
export class ConfigDeslogadoComponent implements OnInit {

  public singInForm: FormGroup;

  public user: User;

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private loginProvider: LoginProviderService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.singInForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.maxLength(16)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    });
  }

  public submitSingIn(form: FormGroup) {
    if (form.invalid) return;
    this.user = form.value;
    this.loginProvider.post(this.user).toPromise(this.handlerLogin.bind(this));
  }

  singInWithFacebook() {
    FB.login(this.responseFacebookSingIn.bind(this));
  }

  responseFacebookSingIn(response: fb.StatusResponse) {
    if (response.status === 'connected') this.doLoginRequestWithFacebook(response.authResponse);
    else this.toastService.error('Ocorreu um problema com os serviços do Facebook, tente novamente mais tarde.');
  }

  doLoginRequestWithFacebook(auth: fb.AuthResponse) {
    FB.api('/me', this.getFacebookUserProperties.bind(this));
    this.user.facebookUser.id = +auth.userID;
    this.user.facebookUser.accessToken = auth.accessToken;
    this.user.facebookUser.expiresIn = auth.expiresIn;
    this.loginProvider.post(this.user).toPromise(this.handlerLogin.bind(this));
  }

  getFacebookUserProperties(data) {
    this.user.nome = data.name;
  }

  handlerLogin(response) {
    console.log('response', response);
  }
}
