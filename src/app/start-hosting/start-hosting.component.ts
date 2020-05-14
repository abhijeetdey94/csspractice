import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidationErrors } from '@angular/forms';
import { errorProperties } from '../shared/errors';

@Component({
  selector: 'app-start-hosting',
  templateUrl: './start-hosting.component.html',
  styleUrls: ['./start-hosting.component.css', './start-hosting.component.mobile.css']
})
export class StartHostingComponent implements OnInit {
  hostingForm: FormGroup;
  myAge: number;
  constructor(private fb: FormBuilder) { }

  get title() {
    return this.hostingForm.get('title');
  }
  get firstName() {
    return this.hostingForm.get('firstName');
  }
  get lastName() {
    return this.hostingForm.get('lastName');
  }
  get email() {
    return this.hostingForm.get('email');
  }
  get password() {
    return this.hostingForm.get('password');
  }
  get agreeTerms() {
    return this.hostingForm.get('agreeTerms');
  }

  ngOnInit(): void {
    this.hostingForm = this.fb.group({
      title: ['mr', [Validators.required]],
      firstName: ['Abhijeet', [Validators.required]],
      lastName: ['Dey', [Validators.required]],
      email: ['a@b.com ', [Validators.required, Validators.email]],
      password: ['1234abcdA!', [this.passwordValidator.bind(this)]],
      agreeTerms: [false, [Validators.pattern('true')]],
    });
    this.myAge = 0;
  }

  onSubmit(): void {
    ++this.myAge;
    console.log(this.hostingForm.status);
  }
  getError(errors: ValidationErrors, controlName?: string): string {
    if (errors) {
      const keys = Object.keys(errors);
      if (keys[0] === 'required') {
        return `${controlName} is required`;
      }
      if (keys[0] === 'email') {
        return `Not a valid email`;
      }
      if (keys && keys[0]) {
        const snakeCaseKey = this.getUpperSnakeCase(keys[0]);
        return errorProperties[snakeCaseKey];
      }
    }
    return '';
  }

  getUpperSnakeCase(propertyName: string) {
    function upperToHyphenLower(match, offset) {
      return (offset > 0 ? '_' : '') + match.toLowerCase();
    }
    return (propertyName.replace(/[A-Z]/g, upperToHyphenLower)).toUpperCase();
  }

  passwordValidator(control: FormControl): { [error: string]: boolean } {
    console.log(control);
    const value: string = control.value;
    let errorMsg: string;
    if (!value) {
      return { noPassword: true };
    }
    if (value && value.length < 8) {
      return { notLong: true };
    } else if (value.search(/[0-9]/) === -1) {
      return { noNumber: true };
    } else if (value.search(/[a-z]/) === -1) {
      return { noLower: true };
    } else if (value.search(/[A-Z]/) === -1) {
      return { noUpper: true };
    } else if (value.search(/[!\@\#\$\%\^\&\(\)\_\+\.\,\;\:]/) === -1) {
      return { noSpecial: true };
    }
    errorMsg = '';
    return null;
  }
}
