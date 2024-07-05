import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAlphaComponent } from './component-alpha/component-alpha.component';
import { ComponentBetaComponent } from './component-beta/component-beta.component';
import { ComponentCharlieComponent } from './component-charlie/component-charlie.component';

const routes: Routes = [
  {path: 'component-alpha', component: ComponentAlphaComponent},
  {path: 'component-beta', component: ComponentBetaComponent},
  {path: 'component-charlie', component : ComponentCharlieComponent},
  {path: '', redirectTo: '/component-alpha', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

