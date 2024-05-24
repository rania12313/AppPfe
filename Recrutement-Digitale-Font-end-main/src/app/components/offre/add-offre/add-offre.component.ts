import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { OffreService } from '../offre.service';
import { Router } from '@angular/router';
import { OffreDto } from '../OffreDto';
import { CategorieService } from '../../categorie/categorie.service';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.scss'],
})
export class AddOffreComponent implements OnInit {
  offreform: any;
  categories: any = {};
  constructor(
    private formBuilder: FormBuilder,
    private categorieService: CategorieService,
    private offreService: OffreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
    this.offreform = this.formBuilder.group({
      categorieId: ['', Validators.required],
      nom: ['', Validators.required],
      sujet: ['', Validators.required],
      description: ['', Validators.required],
      competences: ['', Validators.required],
      typeContrat: ['', Validators.required],
      questions: this.formBuilder.array([this.initQuestionFields()]),
    });
  }
  getAllCategories() {
    this.categorieService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  initQuestionFields(): FormGroup {
    return this.formBuilder.group({
      libelle: ['', Validators.required],
      duree: ['', Validators.required],
    });
  }

  ajoutQuestion(): void {
    const control = this.offreform.get('questions') as FormArray;
    control.push(this.initQuestionFields());
  }
  addOffre() {
    if (this.offreform.valid) {
      console.log(this.offreform);
      const offreDto: OffreDto = {
        nom: this.offreform.get('nom').value,
        sujet: this.offreform.get('sujet').value,
        description: this.offreform.get('description').value,
        competences: this.offreform.get('competences').value,
        typeContrat: this.offreform.get('typeContrat').value,
        categorieId: this.offreform.get('categorieId').value,
        questions: this.offreform.get('questions').value,
      };

      const categorieId = this.offreform.get('categorieId').value;

      this.offreService.addOffre(offreDto, categorieId).subscribe((res) => {
        console.log(res);

        window.location.href = '/dashboard';
      });
    } else {
      console.error(
        'Formulaire invalide. Veuillez remplir tous les champs correctement.'
      );
    }
  }
}
