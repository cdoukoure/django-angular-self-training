import { Component, OnInit } from '@angular/core';

import { ApiService } from  '../api.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
  }

  createAccount(){

   var  account  = {
      name:  "Account client 1",
      email:  "c.test@test.ci",
      phone:  "+22555555555",
      industry:  "FINANCE",
      website:  "www.inexa.com",
      description: "",
      createdBy: 1,
      isActive: true
    };

    this.apiService.createAccount(account).subscribe((response) => {
      console.log(response);
    });

  };
}
