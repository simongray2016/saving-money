import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  signInForm: FormGroup;

  constructor(
    public _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initSignInGroup();
  }

  get remember(): AbstractControl {
    return this.signInForm.controls.remember;
  }

  initSignInGroup(): void {
    this.signInForm = this._formBuilder.group({
      phoneNumber: null,
      password: null,
      remember: false
    });
  }

}
