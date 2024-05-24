import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CvModel } from 'src/app/models/cv.model';
import { API_BASE_URL } from '../myConfigs';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/globalServices/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  constructor(
    private http: HttpClient,
    private storageService: LocalStorageService
  ) {}

  uploadCv(file: File, id: number): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    const user = this.storageService.getObject('user');
    if (user) {
      formData.append('userId', user.id);
    }
    formData.append('offreId', id.toString());

    return this.http.post<CvModel>(`${API_BASE_URL}/upload`, formData);
  }

  getAllCVs(): Observable<CvModel[]> {
    return this.http.get<CvModel[]>(API_BASE_URL);
  }

  getPdfFromCv(cvId: any): Observable<Blob> {
    return this.http.get(`${API_BASE_URL}/pdf/${cvId}`, {
      responseType: 'blob',
    });
  }

  archiveCV(cvId: number) {
    return this.http.put(`${API_BASE_URL}/archive/${cvId}`, {});
  }

  deleteCV(cvId: number) {
    return this.http.delete(`${API_BASE_URL}/${cvId}`);
  }

  deleteAllCVsByStatus(status: boolean): Observable<any> {
    return this.http.delete<string>(`${API_BASE_URL}/status/${status}`);
  }

  deleteAllArchivedCvs() {
    return this.http.delete<string>(`${API_BASE_URL}/archived`);
  }
}
