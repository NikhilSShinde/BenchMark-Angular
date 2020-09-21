import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentCreateComponent } from './components/student-create/student-create.component';
import { StudentListComponent } from './components/student-list/student-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-student' },
  { path: 'create-student', component: StudentCreateComponent },
  { path: 'list-student', component: StudentListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }