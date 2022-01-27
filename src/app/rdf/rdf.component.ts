import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rdf',
  templateUrl: './rdf.component.html',
  styleUrls: ['./rdf.component.css']
})
export class RdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  loginForm = new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  pass:new FormControl('',[Validators.required,Validators.minLength(4)]),
  username:new FormControl('',[Validators.required,Validators.minLength(4)]),
  street:new FormControl('',[Validators.required]),
  state:new FormControl('',[Validators.required]),
  city:new FormControl('',[Validators.required]),
  pincode:new FormControl('',[Validators.required,Validators.minLength(6)])
  })
    
  getEmail(){
  return this.loginForm.controls;
  }
    
  getpass(){
  return this.loginForm.controls;
  }

  getusername(){
    return this.loginForm.controls;
  }

  getstreet(){
    return this.loginForm.controls;
  }

  getstate(){
    return this.loginForm.controls;
  }

  getcity(){
    return this.loginForm.controls;
  }

  getpincode(){
    return this.loginForm.controls;
  }

}
