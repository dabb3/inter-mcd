import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterComponent } from '../app/inter/inter.component';

const routes: Routes = [
  { path: 'inter', component: InterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
