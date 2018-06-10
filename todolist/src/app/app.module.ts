import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './features/tasks/tasks.component';
import { ProgressComponent } from './features/progress/progress.component';
import { CompleteComponent } from './features/complete/complete.component';
import { MenuComponent } from './components/menu/menu.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ProgressComponent,
    CompleteComponent,
    MenuComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
