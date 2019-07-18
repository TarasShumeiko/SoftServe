import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[А-Яа-яЁё\a-zA-Z ]*')
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[А-Яа-яЁё\a-zA-Z ]*')
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
        Validators.pattern(/^[+]*[0-9]{10,12}/)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      birthday: new FormControl('', [
        Validators.required
      ]),
      salary: new FormControl('', [
        Validators.required,
        Validators.max(1000000),
        Validators.min(0)
      ]),
    });
  }
  get firstName() { return this.formGroup.get('firstName'); }
  get lastName() { return this.formGroup.get('lastName'); }
  get phoneNumber() { return this.formGroup.get('phoneNumber'); }
  get email() { return this.formGroup.get('email'); }
  get birthday() { return this.formGroup.get('birthday'); }
  get salary() { return this.formGroup.get('salary'); }
}
