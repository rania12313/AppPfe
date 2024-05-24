import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/exam-interface/services/category.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  categories: any = [];

  constructor(private _cat:CategoryService, private _snack:MatSnackBar) { }

  ngOnInit(): void {
    
    this._cat.categories().subscribe((data: any) => {
      this.categories = data;
    }, (error) => {
      this._snack.open('Error in loading categories from server', '',{
        duration: 3000,
      });
  }
);

}
}
