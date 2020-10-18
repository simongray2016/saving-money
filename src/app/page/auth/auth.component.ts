import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._router.navigate(['sign-in'], {relativeTo: this._route});
  }

}
