import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Observable, map } from 'rxjs';
import { CvModel } from 'src/app/models/cv.model';
import { availableIcons } from '../myConfigs';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-list-cv-archive',
  templateUrl: './list-cv-archive.component.html',
  styleUrls: ['./list-cv-archive.component.scss'],
})
export class ListCvArchiveComponent implements OnInit {
  listCV: CvModel[] = [];
  retrievedFile: Window | null = null;
  safeUrl: SafeResourceUrl | null = null;
  preview: boolean = false;
  data: any = [];
  selectedCv: any = null;

  filteredCvs: any[] = [];
  specialties: Set<String> = new Set();
  offres: any[] = [];

  showModal = false;
  modalMessage = '';

  constructor(private cvService: CvService, private sanitizer: DomSanitizer) {}

  closeModal(t: boolean) {}
  ngOnInit(): void {
    this.getAllCvs();
    this.filteredCvs = this.listCV;
  }

  getCVsByStatus(status: number) {
    console.log(status);
    if (status == 0) {
      this.listCV = this.filteredCvs.filter((cv) => cv.score == 0);
    } else if (status == 1) {
      this.listCV = this.filteredCvs.filter((cv) => cv.score > 0);
    } else {
      this.listCV = this.filteredCvs;
    }
  }
  minDate: any;
  maxDate: any;

  filterCVsByDateRange() {
    if (!this.minDate || !this.maxDate) {
      return;
    }
    this.listCV = this.filteredCvs.filter((cv) => {
      console.log('Filtering by date range');
      console.log('Min Date:', this.minDate);
      console.log('Max Date:', this.maxDate);
      const uploadDate = new Date(cv.uploadDate);
      const minDate = new Date(this.minDate);
      const maxDate = new Date(this.maxDate);

      console.log('CV Upload Date:', uploadDate);

      return uploadDate >= minDate && uploadDate <= maxDate;
    });
  }

  getCVsBySpecialty(specialty: any) {
    if (this.specialties.has(specialty)) {
      this.listCV = this.filteredCvs.filter((cv) => cv.specialite == specialty);
    } else {
      this.listCV = this.filteredCvs;
    }
  }

  getCVsByOffre(offre: any) {
    console.log('offre: ' + offre);
    console.log(this.offres);

    if (this.offres.includes(offre)) {
      this.listCV = this.filteredCvs.filter((cv) => cv.offre.nom == offre);
    } else {
      this.listCV = this.filteredCvs;
    }
  }

  getAllCvs() {
    this.cvService.getAllCVs().subscribe((res: CvModel[]) => {
      res.forEach((element) => {
        if (element.archived) {
          this.getPdfUrl(element.id).subscribe(
            (safeUrl: SafeResourceUrl | undefined) => {
              element.safeUrl = safeUrl;
              this.listCV.push(element);
              element.specialite && this.specialties.add(element.specialite);
              element.offre && this.offres.push(element.offre.nom);
            },
            (error: any) => {
              console.error(
                'Error loading PDF for CV with ID',
                element.id,
                error
              );
            }
          );
        }
      });
    });
  }

  sortCVsByScore(sortType: string) {
    if (sortType === 'asc') {
      this.listCV = this.filteredCvs.sort((a, b) => a.score - b.score);
    } else {
      this.listCV = this.filteredCvs.sort((a, b) => b.score - a.score);
    }
  }

  getPdfUrl(cvId: number): Observable<SafeResourceUrl> {
    return this.cvService.getPdfFromCv(cvId).pipe(
      map((blob: Blob | MediaSource) => {
        const blobUrl = URL.createObjectURL(blob);
        return this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl);
      })
    );
  }

  getIcon = (skill: string) => {
    if (availableIcons.includes(skill))
      return `../../../../assets/icons/${skill}.png`;
    else return `../../../../assets/icons/coding.png`;
  };

  showPreview(e: Event) {
    e.preventDefault();
    this.preview = !this.preview;
  }

  test(cv: any) {
    console.log(cv);
  }

  setSelectedCv(cv: any, x: number) {
    console.log(cv.nom);
    this.selectedCv = {
      cv,
      index: x,
    };
  }

  onChangeStatus(event: any) {
    this.getCVsByStatus(+event.target.value);
  }

  onChangeSpec(event: any) {
    this.getCVsBySpecialty(event.target.value);
  }

  onChangeOffre(event: any) {
    this.getCVsByOffre(event.target.value);
  }

  deleteAllCVs() {
    this.showModal = true;
  }

  confirmDelete(status: boolean) {
    this.cvService.deleteAllArchivedCvs().subscribe((res: string) => {
      console.log(res);
      this.showModal = false;
      this.listCV = [];
      this.filteredCvs = [];
      this.specialties = new Set();
    });
  }
  deleteCV(id: any) {
    console.log('Deleting CV with ID:', id);
    this.cvService.deleteCV(id).subscribe({
      next: (res) => {
        this.listCV = this.listCV.filter((cv) => cv.id !== id);
      },
      error: (err) => {
        if (err.error.text == 'CV deleted') {
          this.listCV = this.listCV.filter((cv) => cv.id !== id);
        }
      },
    });
  }

  archiveCV(id: any) {
    console.log('Archiving CV with ID:', id);
    this.cvService.archiveCV(id).subscribe((res: any) => {
      console.log(res);
      this.listCV = this.listCV.filter((cv) => cv.id !== id);
    });
  }
}
