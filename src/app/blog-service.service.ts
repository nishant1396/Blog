import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";
@Injectable()
export class BlogServiceService {

  constructor(private http:Http) { }


  getBlogs():Observable<any>{
    return this.http.get("http://localhost:3000/blogs").map(res=>res.json());
  }

  registerUser(data):Observable<any>{
    let headers=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:headers});
    let body=JSON.stringify(data);
    return this.http.post("http://localhost:3000/users",body,option).map(res=>res.json());
  }
  verifyUser():Observable<any>{

    return this.http.get("http://localhost:3000/users").map(res=>res.json());
  }
}
