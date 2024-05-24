import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { SideBarComponent } from './exam-interface/components/side-bar/side-bar.component';
import { ProfileComponent } from './exam-interface/components/profile/profile.component';
import { ViewCategoriesComponent } from './exam-interface/components/view-categories/view-categories.component';
import { AddCategoryComponent } from './exam-interface/components/add-category/add-category.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field'; // Importer MatFormFieldModule
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ViewQuizzesComponent } from './exam-interface/components/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './exam-interface/components/add-quiz/add-quiz.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { UpdateQuizComponent } from './exam-interface/components/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './exam-interface/components/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './exam-interface/components/add-question/add-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DashboardUserComponent } from './exam-interface/components/User/dashboard-user/dashboard-user.component';
import { SidebarComponent as UserSidebar } from './exam-interface/components/User/sidebar/sidebar.component';
import { LoadQuizComponent } from './exam-interface/components/User/load-quiz/load-quiz.component';

import { AddCategorieComponent } from './components/categorie/add-categorie/add-categorie.component';
import {
  FormControlDirective,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { ListCategorieComponent } from './components/categorie/list-categorie/list-categorie.component';
import { CommonModule } from '@angular/common';
import { AddOffreComponent } from './components/offre/add-offre/add-offre.component';
import { AdminListOffreComponent } from './components/offre/admin-list-offre/admin-list-offre.component';
import { LoginComponent } from './components/login/login.component';
import { DashbordUsersComponent } from './components/dashbord-users/dashbord-users.component';
import { SideBarUsersComponent } from './components/side-bar-users/side-bar-users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ListCvArchiveComponent } from './cvs/list-cv-archive/list-cv-archive.component';
import { ListCvRefuseComponent } from './cvs/list-cv-refuse/list-cv-refuse.component';
import { ListCvComponent } from './cvs/list-cv/list-cv.component';
import { CondidatListOffreComponent } from './components/offre/condidat-list-offre/condidat-list-offre.component';
import { MatTableModule } from '@angular/material/table';
import { ListCandidatComponent } from './components/list-candidat/list-candidat.component';
import { VideoComponent } from './video/enregistrer-video/video.component';
// import { CvUploadComponent } from './components/offre/cv-upload/cv-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ProfileComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    DashboardUserComponent,
    UserSidebar,
    LoadQuizComponent,
    AdminSidebarComponent,

    //Mouna
    DashboardComponent,
    AddCategorieComponent,
    AdminSidebarComponent,
    TopBarComponent,
    ListCategorieComponent,
    AddOffreComponent,
    CondidatListOffreComponent,
    AdminListOffreComponent,
    LoginComponent,
    TopBarComponent,
    HomeComponent,
    DashbordUsersComponent,
    SideBarUsersComponent,
    NavbarComponent,
    VideoComponent,

    ListCvArchiveComponent,
    ListCvRefuseComponent,
    ListCvComponent,
    ListCandidatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatListModule,
    CKEditorModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSelectModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    PdfViewerModule,
    MatTableModule,
    // AdminSidebarComponent,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
