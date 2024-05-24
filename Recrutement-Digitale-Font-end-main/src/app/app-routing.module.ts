import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './exam-interface/components/profile/profile.component';
import { ViewCategoriesComponent } from './exam-interface/components/view-categories/view-categories.component';
import { AddCategoryComponent } from './exam-interface/components/add-category/add-category.component';
import { ViewQuizzesComponent } from './exam-interface/components/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './exam-interface/components/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './exam-interface/components/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './exam-interface/components/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './exam-interface/components/add-question/add-question.component';
import { DashboardUserComponent } from './exam-interface/components/User/dashboard-user/dashboard-user.component';
import { LoadQuizComponent } from './exam-interface/components/User/load-quiz/load-quiz.component';
import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './video/enregistrer-video/video.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddCategorieComponent } from './components/categorie/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './components/categorie/list-categorie/list-categorie.component';
import { AddOffreComponent } from './components/offre/add-offre/add-offre.component';
import { AdminListOffreComponent } from './components/offre/admin-list-offre/admin-list-offre.component';
import { CondidatListOffreComponent } from './components/offre/condidat-list-offre/condidat-list-offre.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './globalServices/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashbordUsersComponent } from './components/dashbord-users/dashbord-users.component';
// import { CvUploadComponent } from './components/offre/cv-upload/cv-upload.component';
import { ListCvComponent } from './cvs/list-cv/list-cv.component';
import { ListCvRefuseComponent } from './cvs/list-cv-refuse/list-cv-refuse.component';
import { ListCvArchiveComponent } from './cvs/list-cv-archive/list-cv-archive.component';
import { OffreDetailsComponent } from './components/offre/offre-details/offre-details.component';
import { ListCandidatComponent } from './components/list-candidat/list-candidat.component';
import { noAuthGuard } from './globalServices/no-auth.guard';

const routes: Routes = [
  // {path: 'dashboarAdmin', component: DashboardAdminComponent,
  //   children: [
  //     { path: 'profile', component: ProfileComponent },
  //     {path: 'categories', component: ViewCategoriesComponent},
  //     {path: 'add-category', component: AddCategoryComponent},
  //     {path:'quizzes', component: ViewQuizzesComponent},
  //     {path:'add-quiz',component:AddQuizComponent},
  //     {path:'quiz/:qid',component:UpdateQuizComponent},
  //     {path:'view-questions/:qid/:title', component:ViewQuizQuestionsComponent},
  //     {path:'add-question/:qid/:title',component: AddQuestionComponent}
  //   ]
  // },

  {
    path: 'dashboardUser',
    component: DashboardUserComponent,
    children: [{ path: ':catId', component: LoadQuizComponent }],
  },

  //Mouna
  { path: '', component: HomeComponent },
  { path: 'video', component: VideoComponent },
  { path: 'add-categorie', component: AddCategorieComponent },
  { path: 'list-categorie', component: ListCategorieComponent },
  { path: 'add-offre', component: AddOffreComponent },
  { path: 'admin-list-offre', component: AdminListOffreComponent },
  { path: 'condidat-list-offre', component: CondidatListOffreComponent },
  { path: 'offre-details/:id', component: OffreDetailsComponent },

  //New path Ayemn
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'categories', component: ViewCategoriesComponent },
  { path: 'add-quiz', component: AddQuizComponent },
  { path: 'quizzes', component: ViewQuizzesComponent },
  { path: 'add-question/:qid/:title', component: AddQuestionComponent },
  { path: 'view-questions/:qid/:title', component: ViewQuizQuestionsComponent },
  { path: 'quiz/:qid', component: UpdateQuizComponent },

  // Dashbord Users
  { path: 'dashbord-users', component: DashbordUsersComponent },

  // MALEK

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },

  // MALEKK
  { path: 'login', component: LoginComponent, canActivate: [noAuthGuard] },
  // {
  //   path: 'upload-cv',
  //   component: CvUploadComponent,
  //   canActivate: [authGuard],
  // },

  {
    path: 'list-cv',
    component: ListCvComponent,
    canActivate: [authGuard],
  },
  {
    path: 'list-cv-refuse',
    component: ListCvRefuseComponent,
    canActivate: [authGuard],
  },
  {
    path: 'list-cv-archive',
    component: ListCvArchiveComponent,
    canActivate: [authGuard],
  },

  {
    path: 'list-candidates',
    component: ListCandidatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
