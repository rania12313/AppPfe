import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit{

  category = {
    title: '',
    description: ''
  };



  constructor(private _category: CategoryService, 
    private _snack:MatSnackBar) { }

  ngOnInit(): void {}
  
  formSubmit()
  {
    this._category.addCategory(this.category).subscribe((data: any) => {
      this.category.title = '';
      this.category.description = '';
      Swal.fire('Success !!', 'Category is added successfully', 'success');
    },
    (error) => {
      console.log(error);
      Swal.fire('Error !!', 'Server Error', 'error');
    }
    );

    }
}

