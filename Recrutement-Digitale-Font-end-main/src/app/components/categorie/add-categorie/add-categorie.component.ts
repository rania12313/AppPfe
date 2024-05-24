import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.scss'],
})
export class AddCategorieComponent implements OnInit {
  categorie: any = {};
  categorieform: any;
  constructor(
    private formBuilder: FormBuilder,
    private categorieService: CategorieService,
    private router: Router
  ) {}
  ngOnInit() {
    this.categorieform = this.formBuilder.group({
      libelle: ['', Validators.required],
    });
  }
  addCategorie() {
    console.log(this.categorie);
    this.categorieService.addCategorie(this.categorie).subscribe(() => {
      window.location.href = '/dashboard';
    });
  }
}
