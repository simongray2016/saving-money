import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-tab',
  templateUrl: './sign-tab.component.html',
  styleUrls: ['./sign-tab.component.scss']
})
export class SignTabComponent implements OnInit {

  isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  setIsLoading(flag: boolean) {
    this.isLoading = flag;
  }

}
