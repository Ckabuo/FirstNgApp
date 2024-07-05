# Angular Assignment

This project is an Angular application that demonstrates the use of multiple components, routing, and data binding.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Components](#components)
- [Routing](#routing)
- [Data Binding](#data-binding)
- [Usage](#usage)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** and **npm** are installed. You can download them from [Node.js official website](https://nodejs.org/).
- **Angular CLI** is installed globally. You can install it using npm:

  ```sh
  npm install -g @angular/cli
  ```

## Installation

To install this project, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/angular-assignment.git
   ```

2. Navigate to the project directory:

   ```sh
   cd angular-assignment
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

## Running the Application

To run the application locally, use the following command:

```sh
ng serve
```

Navigate to `http://localhost:4200` in your web browser to see the application.

## Project Structure

The project structure is as follows:

```
angular-assignment/
│
├── src/
│   ├── app/
│   │   ├── component-alpha/
│   │   │   ├── component-alpha.component.html
│   │   │   ├── component-alpha.component.ts
│   │   │   └── component-alpha.component.css
│   │   ├── component-beta/
│   │   │   ├── component-beta.component.html
│   │   │   ├── component-beta.component.ts
│   │   │   └── component-beta.component.css
│   │   ├── component-charlie/
│   │   │   ├── component-charlie.component.html
│   │   │   ├── component-charlie.component.ts
│   │   │   └── component-charlie.component.css
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── index.html
│   └── styles.css
│
├── .gitignore
├── README.md
├── angular.json
├── package.json
└── tsconfig.json
```

## Components

### Component Alpha

- **File:** `src/app/component-alpha/component-alpha.component.ts`
- **Template:** `src/app/component-alpha/component-alpha.component.html`
- **Styles:** `src/app/component-alpha/component-alpha.component.css`

### Component Beta

- **File:** `src/app/component-beta/component-beta.component.ts`
- **Template:** `src/app/component-beta/component-beta.component.html`
- **Styles:** `src/app/component-beta/component-beta.component.css`

### Component Charlie

- **File:** `src/app/component-charlie/component-charlie.component.ts`
- **Template:** `src/app/component-charlie/component-charlie.component.html`
- **Styles:** `src/app/component-charlie/component-charlie.component.css`

## Routing

The application uses Angular Router for navigation between components. The routes are defined in `src/app/app-routing.module.ts`:

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAlphaComponent } from './component-alpha/component-alpha.component';
import { ComponentBetaComponent } from './component-beta/component-beta.component';
import { ComponentCharlieComponent } from './component-charlie/component-charlie.component';

const routes: Routes = [
  { path: 'component-alpha', component: ComponentAlphaComponent },
  { path: 'component-beta', component: ComponentBetaComponent },
  { path: 'component-charlie', component: ComponentCharlieComponent },
  { path: '', redirectTo: 'component-alpha', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

## Data Binding

The application demonstrates data binding with the following properties in `src/app/app.component.ts`:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
  description = 'This is a sample Angular application';
  author = 'Your Name';
  students = [
    { name: 'John Doe', age: 20 },
    { name: 'Jane Doe', age: 22 },
    { name: 'Jim Beam', age: 21 }
  ];
}
```

## Usage

- To navigate between components, use the navigation links provided in the `app.component.html`:

  ```html
  <nav>
    <a routerLink="component-alpha" routerLinkActive="active">Component Alpha</a>
    <a routerLink="component-beta" routerLinkActive="active">Component Beta</a>
    <a routerLink="component-charlie" routerLinkActive="active">Component Charlie</a>
  </nav>
  <router-outlet></router-outlet>
  ```

- The list of students is displayed in the `app.component.html`:

  ```html
  <h1>{{ title }}</h1>
  <p>{{ description }}</p>
  <p>{{ author }}</p>

  <h2>List of Students</h2>
  <ul>
    <li *ngFor="let student of students">
      {{ student.name }} (Age: {{ student.age }})
    </li>
  </ul>
  ```
