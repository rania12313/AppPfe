import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ProfileComponent } from './components/profile/profile.component';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DashboardUserComponent } from './components/User/dashboard-user/dashboard-user.component';
import { SidebarComponent } from './components/User/sidebar/sidebar.component';
import { LoadQuizComponent } from './components/User/load-quiz/load-quiz.component';


@NgModule({
  declarations: [
   
     ProfileComponent, DashboardUserComponent, SidebarComponent,  
    
  
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    
    
    
  ],

  exports: [
    
  ]
})
export class ExamInterfaceModule { }
