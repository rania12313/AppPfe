import { Component, OnInit } from '@angular/core';
import { OffreService } from '../offre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from 'src/app/cvs/services/cv.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalStorageService } from 'src/app/globalServices/local-storage.service';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-offre-details',
  templateUrl: './offre-details.component.html',
  styleUrls: ['./offre-details.component.scss'],
})
export class OffreDetailsComponent implements OnInit {
  offre: any = {};
  token: any;
  constructor(
    private offreService: OffreService,
    private route: ActivatedRoute,
    private cvService: CvService,
    private localStorageService: LocalStorageService,
    private _snack: MatSnackBar,
    private router: Router
  ) {}
  ngOnInit() {
    this.getOffreDetails();
    this.user = this.localStorageService.getObject('user') || 'USER NOT FOUND';
    this.token = this.localStorageService.getItem('token');
  }

  verifyAuth() {
    console.log(this.token);

    if (this.token == null) {
      // this.router.navigate(['/login']);
      window.location.href = '/login';
    }
  }

  getOffreDetails(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    console.log(idString);

    if (idString !== null) {
      const id = +idString;
      this.offreService
        .getOffrebyId(id)
        .subscribe((offre) => (this.offre = offre));
    }
  }

  // ********************************************************************************************************************

  selectedFile: File | undefined;
  errors: string = '';
  fa = faX;
  user: any = null;

  ngOnDestroy(): void {
    if (this.errors != '') this.errors = '';
    this.selectedFile = undefined;
  }

  onFileSelected(event: any): void {
    console.log(event.target.files[0]);

    this.selectedFile = event.target.files[0];
  }

  browseFiles(): void {
    const customFile = document.getElementById('customFile');
    if (customFile) {
      customFile.click();
    }
  }

  clearFile(): void {
    this.selectedFile = undefined;
    const customFile = document.getElementById('customFile');
    if (customFile) {
      (customFile as HTMLInputElement).value = '';
    }
  }

  onDragOver(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    const dropArea = document.getElementById('drop-area');
    if (dropArea) {
      dropArea.classList.add('drag-over');
    }
  }

  onDragLeave(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    const dropArea = document.getElementById('drop-area');
    if (dropArea) {
      dropArea.classList.remove('drag-over');
    }
  }

  onDrop(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    this.selectedFile = files[0];
    const dropArea = document.getElementById('drop-area');
    if (dropArea) {
      dropArea.classList.remove('drag-over');
    }
  }

  uploadCV(): void {
    if (this.selectedFile) {
      const idString = Number(this.route.snapshot.paramMap.get('id'));
      this.cvService.uploadCv(this.selectedFile, idString).subscribe({
        next: (response: any) => {
          console.log('Upload successful', response);
          Swal.fire(
            'Success !!',
            'Votre candidature est postulé avec succès ',
            'success'
          );
          if (this.errors != '') this.errors = '';
        },
        error: (error: any) => {
          console.error('Upload error', error);
          if (error.status === 400) {
            this.errors = error.error;
            Swal.fire('Error !!', error.error.message, 'error');
          }
        },
      });
    }
  }
}
