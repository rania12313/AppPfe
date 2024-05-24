import { Component } from '@angular/core';
import { OffreService } from '../offre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-condidat-list-offre',
  templateUrl: './condidat-list-offre.component.html',
  styleUrls: ['./condidat-list-offre.component.scss'],
})
export class CondidatListOffreComponent {
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
  gotToDisplaytOffre(x: any) {
    window.location.href = `/offre-details/${x}`;
  }
}
