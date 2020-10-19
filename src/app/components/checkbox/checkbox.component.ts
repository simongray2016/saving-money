import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  isChecked = false;

  @Output() onChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  emitOnChange(event: any) {
    this.onChange.emit(event.target.checked);
  }

}
