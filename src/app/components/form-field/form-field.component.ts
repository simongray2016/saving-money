import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, TemplateRef } from '@angular/core';
import { InputDirective } from 'src/app/shared/directives/input.directive';
import { LabelComponent } from './label/label.component';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit, AfterContentInit {

  @ContentChild(InputDirective, {read: ElementRef}) input: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.input.nativeElement.classList.add('input-text');
  }

}
