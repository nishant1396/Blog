import { Component, OnInit } from '@angular/core';
import {BlogServiceService} from "../blog-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  allblog:Object=[];

  constructor(private service: BlogServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getBlogs()
      .subscribe(
        data=>{
          console.log(data);
          this.allblog=data;
        },
        err=>{
          console.log(err)
        }
      );
  }
}
