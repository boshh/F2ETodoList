import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TasksComponent } from "./features/tasks/tasks.component";
import { ProgressComponent } from "./features/progress/progress.component";
import { CompleteComponent } from "./features/complete/complete.component";

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'complete', component: CompleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
