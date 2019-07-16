import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  user = {
    firstName: 'name',
    lastName: 'surname',
    phoneNumber: '0991234567',
    email: 'example@com',
    password: 'password',
    passwordRepeat: 'password',
  };

  clearField = data => {
    this.user[data] = '';
    console.log(data);
  }

  validateField = data => {
    console.log(this.user[data]);
  }
}
