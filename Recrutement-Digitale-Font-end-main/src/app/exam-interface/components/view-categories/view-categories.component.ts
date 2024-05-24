import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.scss']
})
export class ViewCategoriesComponent implements OnInit{

  categories = [] as any; 
    

  constructor(private _category: CategoryService) { }

  ngOnInit(): void {
    this._category.categories().subscribe((data:any) => {
      this.categories = data;
      console.log(this.categories);
    },
    (error) => {
      console.log(error);

      //alerte de la bibliothèque sweetalert2
      Swal.fire('Error !!', 'Error in loading data', 'error');
    });
  }

}
