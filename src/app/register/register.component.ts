import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {BlogServiceService} from "../blog-service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string = '';
  pass: string = '';

  constructor(private service: BlogServiceService, private router: Router) {
  }

  ngOnInit() {
  }

  submitForm() {
    let userdata = {
      name: this.name,
      pass: this.pass
    };
    this.service.registerUser(userdata)
      .subscribe(
        data=>console.log(data)
      );
    this.router.navigate(['home']);
  }
}
