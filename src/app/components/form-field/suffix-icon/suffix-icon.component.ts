import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'suffix-icon',
  templateUrl: './suffix-icon.component.html',
  styleUrls: ['./suffix-icon.component.scss']
})
export class SuffixIconComponent implements OnInit {

  @Input() src: string;

  constructor() { }

  ngOnInit(): void {
  }

}
