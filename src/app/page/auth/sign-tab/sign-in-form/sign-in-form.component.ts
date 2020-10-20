import { phoneNumberFormat } from './../../../../shared/validators/phone-number.validator';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  signInForm: FormGroup;
  showPassword = false;
  icShowPass = '../../../../../assets/icShowPass.svg';
  icHidePass = '../../../../../assets/icHidePass.svg';
  isLoading = false;

  @Output() onLoading = new EventEmitter<boolean>(false);

  constructor(
    public _formBuilder: FormBuilder,
    public _modalService: ModalService,
    public _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initSignInGroup();
  }

  get remember(): AbstractControl {
    return this.signInForm.controls.remember;
  }

  initSignInGroup(): void {
    this.signInForm = this._formBuilder.group({
      phoneNumber: [null, [phoneNumberFormat, Validators.required]],
      password: [null, [Validators.required]],
      remember: false
    });
  }

  toggleShowingPassword(): void {
    this.showPassword = !this.showPassword;
  }

  submitSignInForm(): void {
    this.isLoading = true;
    this.onLoading.emit(true);
    this._authService.signIn();
  }
}
