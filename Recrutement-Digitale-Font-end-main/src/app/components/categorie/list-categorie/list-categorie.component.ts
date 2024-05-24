import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.scss'],
})
export class ListCategorieComponent implements OnInit {
  categories: any = {};
  constructor(
    private router: Router,
    private categorieService: CategorieService
  ) {}
  ngOnInit() {
    this.getAllCategories();
  }
  getAllCategories() {
    this.categorieService.getCategories().subscribe((data) => {
      console.log(data);
      this.categories = data;
    });
  }
  deleteCategorie(id: number) {
    this.categorieService.deleteCategorie(id).subscribe((data) => {
      console.log(data);
    });
  }
}
