import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public _auth: AngularFireAuth
  ) { }

  signIn() {
    firebase.auth().useDeviceLanguage();
    let phoneNumber = "+84343695666";
    let confirmationResult;
    const appVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: (response) => {
        console.log(response);
      }
    });
    this._auth.signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
}
