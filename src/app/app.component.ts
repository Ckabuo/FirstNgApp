import { version } from './../../node_modules/@types/eslint-scope/index.d';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
  description = 'This is a simple Angular app';
  version = 'Version 1.0';
  author = 'DigitalEngineer';

  students = [
    {id:1, name: 'kunle', age: 20},
    {id:2, name: 'Favour', age: 25},
    {id:3, name: 'Amaka', age: 18},
    {id:4, name: 'Bambi', age: 35},
    {id:5, name: 'Akpabio', age: 50}
  ]
}
