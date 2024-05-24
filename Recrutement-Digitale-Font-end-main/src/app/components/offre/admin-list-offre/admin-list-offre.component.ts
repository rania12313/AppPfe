import { Component, OnInit } from '@angular/core';
import { OffreService } from '../offre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-list-offre',
  templateUrl: './admin-list-offre.component.html',
  styleUrls: ['./admin-list-offre.component.scss'],
})
export class AdminListOffreComponent implements OnInit {
  offres: any = {};
  constructor(private offreService: OffreService, private router: Router) {}
  ngOnInit() {
    this.getAllOffres();
  }
  getAllOffres() {
    this.offreService.getOffre().subscribe((data) => {
      this.offres = data;
    });
  }
  deleteOffre(id: number) {
    this.offreService.deleteOffre(id).subscribe((res) => {
      console.log(res);
    });
  }
  gotToEditOffre(x: any) {
    window.location.href = `update-offre/${x}`;
  }
}
