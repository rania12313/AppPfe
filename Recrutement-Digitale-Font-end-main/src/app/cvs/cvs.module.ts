import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCvComponent } from './list-cv/list-cv.component';
import { ListCvArchiveComponent } from './list-cv-archive/list-cv-archive.component';
import { ListCvRefuseComponent } from './list-cv-refuse/list-cv-refuse.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
// import { CvUploadComponent } from '../shared/cv-upload/cv-upload.component';

@NgModule({
  declarations: [
    ListCvComponent,
    ListCvArchiveComponent,
    ListCvRefuseComponent,
    // CvUploadComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTableModule,
  ],
})
export class CvsModule {}
