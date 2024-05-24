import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/exam-interface/services/category.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss'],
})
export class AdminSidebarComponent {
  isTestsMenuOpen = false;
  isCategoriesMenuOpen = false;
  isQuizzesMenuOpen = false;
  categories: any = [];
  toggleMenu(menuType: string) {
    switch (menuType) {
      case 'tests':
        this.isTestsMenuOpen = !this.isTestsMenuOpen;
        break;
      case 'categories':
        this.isCategoriesMenuOpen = !this.isCategoriesMenuOpen;
        break;
      case 'quizzes':
        this.isQuizzesMenuOpen = !this.isQuizzesMenuOpen;
        break;
    }
  }

  constructor(private _cat: CategoryService, private _snack: MatSnackBar) {}

  ngOnInit(): void {
    this._cat.categories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error) => {
        this._snack.open('Error in loading categories from server', '', {
          duration: 3000,
        });
      }
    );
  }
}
