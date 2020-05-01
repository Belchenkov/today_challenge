import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular";

@Component({
  selector: 'ns-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  moduleId: module.id,
})
export class AuthComponent implements OnInit {

  constructor(
      private router: RouterExtensions
  ) { }

  ngOnInit() {
  }

  onSignIn() {
    this.router.navigate(['/today'], {
      clearHistory: true
    });
  }

}
