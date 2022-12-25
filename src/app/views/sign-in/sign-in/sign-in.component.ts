import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user={
    username:'',
    password:'',
  }
  constructor(public Service:ServiceService,private route:Router) { }
  SignIn(){
    this.Service.SignIn(this.user)
   .subscribe(
    response=>{
      if (response==null){
        alert("try agin")
        console.log(response);
        this.ngOnInit()     
      }
      else{console.log("logged in")
      this.route.navigate(['/user'])    
    }
      },
    error=>{console.log(error); } );
  }

  ngOnInit(): void {
  }

}

