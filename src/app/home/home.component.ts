import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  date: number = Date.now();
  amount: number = 12345.6789;
  data: any[] = [];
  nameData: any[] = [];
  emailData: any[] = [];


  constructor(private dataService: AuthService) {
    this.getFetchData();
  }

  getFetchData = () => {
    this.dataService.fetch().subscribe((res: any = []) => {
      this.data = res.data;
      console.log("this.data", this.data)
      this.nameData = [];  // Clear previous data before adding new entries
      this.emailData = [];
      this.data.forEach(res => {
        console.log(res.first_name);
        this.nameData.push(res.first_name);  // Use push to add each name to the array
        this.emailData.push(res.email);  // Use push to add each email to the array

      });
      console.log("this.nameData", this.nameData);
    }, (error) => {
      console.log("error: ", error);
    });
  }

  // getFetchData = () => {
  //   this.dataService.fetch().subscribe((res: any = []) => {
  //     this.data = res.data;
  //     this.nameData = this.data.map((res: any) => res.first_name);  // Use map to create a new array
  //     console.log("this.nameData", this.nameData);
  //   }, (error) => {
  //     console.log("error: ", error);
  //   });
  // }

  // getFetchData = () => {
  //   this.dataService.fetch().subscribe((res: any = []) => {
  //     this.data = res.data;
  //     this.nameData = [];  // Clear previous data before adding new entries
  //     this.data.forEach(res => {
  //       console.log(res.first_name);
  //       this.nameData.push(res.first_name);  // Use push to add each name to the array
  //     });
  //     console.log("this.nameData", this.nameData);
  //   }, (error) => {
  //     console.log("error: ", error);
  //   });
  // }
  
  

}
