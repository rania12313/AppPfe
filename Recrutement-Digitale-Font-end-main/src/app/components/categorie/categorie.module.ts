import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';

@NgModule({
  declarations: [
    AddCategorieComponent,
    ListCategorieComponent,
    UpdateCategorieComponent,
  ],
  imports: [CommonModule],
})
export class CategorieModule {}
