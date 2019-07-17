import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  user = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
  };

  validation = {
    firstName: /^[А-Яа-яЁё\A-Za-z\W\s\d][^0-9_!¡?÷?¿/\\+=@#,.$%ˆ&*(){}|~<>;:[\]]{2,}$/,
    lastName: /^[А-Яа-яЁё\A-Za-z\W\s\d][^0-9_!¡?÷?¿/\\+=@#,.$%ˆ&*(){}|~<>;:[\]]{2,}$/,
    phoneNumber: /^[+]*[0-9]{10,12}/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  };
}
