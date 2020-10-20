import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  state = false;
  footer = [
    {
      text: 'Ok',
      onPress: () => { this.state = false; }
    }
  ];

  constructor(
    public _modalService: ModalService
  ) { }

  ngOnInit(): void {
    this._modalService.$isOpen.subscribe(
      state => this.state = state
    );

  }

}
