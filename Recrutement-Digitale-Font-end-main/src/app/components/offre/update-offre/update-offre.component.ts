import { Component, OnInit } from '@angular/core';
import { OffreService } from '../offre.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategorieService } from '../../categorie/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.scss']
})
export class UpdateOffreComponent implements OnInit {
id:any;
updateoffreform: any;
categories:any={}
constructor(private formBuilder: FormBuilder,private categorieService:CategorieService, private offreService: OffreService, private router: Router) {}
  ngOnInit(): void {
   
    this.getAllCategories();
   
  }
  getAllCategories(){
    this.categorieService.getCategories().subscribe((data)=>{
      this.categories=data;
    }

    )
  } 

editOffre(){}
}
