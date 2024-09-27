import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myForm: FormGroup;

  title = 'angular-training-program';

  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  onClick() {
    alert('Button Clicked!');
  }

  name = '';

  onSubmit(form: any) {
    console.log('Form Submitted:', form.value);
  }





















  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmitData() {
    console.log('Reactive Form Submitted:', this.myForm.value);
  }

 

}
