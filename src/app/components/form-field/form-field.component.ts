import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, TemplateRef } from '@angular/core';
import { InputDirective } from 'src/app/shared/directives/input.directive';
import { LabelComponent } from './label/label.component';
import { SuffixIconComponent } from './suffix-icon/suffix-icon.component';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit, AfterContentInit {

  @ContentChild(LabelComponent, {read: ElementRef}) label: ElementRef;
  @ContentChild(InputDirective, {read: ElementRef}) input: ElementRef;
  @ContentChild(SuffixIconComponent, {read: ElementRef}) suffixIcon: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.label && this.label.nativeElement.classList.add('form-field-label');
    this.input && this.input.nativeElement.classList.add('input-text');
    this.suffixIcon && this.suffixIcon.nativeElement.classList.add('form-field-suffix-icon');
  }

}
