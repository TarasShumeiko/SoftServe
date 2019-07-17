import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  // formControl: FormControl; // Для одної форми
  formGroup: FormGroup; // Для декількох форм
  // userListControl: FormGroup; // Для списку

  // FormBuilder спрощує створення складних форм
  // constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // Для одної форми
    // this.formControl = new FormControl('John', [Validators.required, Validators.minLength(5)], [`3 параметром можна передати асинхронний валідатор`]);
    // this.formControl = new FormControl('John', [myValidator(3)]);
    // this.formControl.valueChanges.subscribe(value => console.log(value));
    // this.formControl.statusChanges.subscribe(status => {
    //   console.log(this.formControl.errors);
    //   console.log(status);
    // });

    // Для декількох форм
    this.formGroup = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phoneNumber: new FormControl(''),
      email:  new FormControl(''),
      birthday:  new FormControl(''),
      salary:  new FormControl(''),
    });
    this.formGroup.valueChanges.subscribe(value => console.log(value));

    // FormArray дозволяє працювати із списками
    // this.userListControl = new FormGroup({
    //   users: new FormArray([
    //     new FormControl('John', [myValidator(3)]),
    //     new FormControl('Tom', [myValidator(3)]),
    //     new FormControl('Brad', [myValidator(3)])
    //   ])
    // });
    // this.userListControl.valueChanges.subscribe(value => console.log(value));
    // this.userListControl.statusChanges.subscribe(status => {
    //   console.log(status);
    // });

    // За допомогою FormBuilder можна простіше створити userListControl
    // this.userListControl = this.formBuilder.group({
    //   users: this.formBuilder.array([ ['John'], ['Tom'], ['Brad'] ])
    // });
  }

  // removeUserControl = index => {
  //   (this.userListControl.controls.users as FormArray).removeAt(index);
  // };
  //
  // addUserControl = () => {
  //   (this.userListControl.controls.users as FormArray).push(new FormControl(''));
  // };
}

// const myValidator = num => {
//   return (formControl: FormControl) => {
//     if (formControl.value.length < num) {
//       return {myValidator: {message: 'Should be something'}};
//     }
//     return null;
//   };
// };
