import { Component } from '@angular/core';
import { CvService } from 'src/app/cvs/services/cv.service';

@Component({
  selector: 'app-list-candidat',
  templateUrl: './list-candidat.component.html',
  styleUrls: ['./list-candidat.component.scss'],
})
export class ListCandidatComponent {
  displayedColumns: string[] = ['id', 'name', 'email'];
  constructor(public cvService: CvService) {}

  listeCandidats: any[] = [];
  ngOnInit(): void {
    this.cvService.getAllCVs().subscribe((data: any[]) => {
      this.listeCandidats = data
        .map((v) => v.user)
        .filter(
          (user, index, self) =>
            index === self.findIndex((t) => t.id === user.id)
        );
    });
  }
}
