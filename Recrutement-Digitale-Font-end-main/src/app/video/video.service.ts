import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }
  uploadVideo(file: File) {
    const formData = new FormData();
    formData.append('video', file);

    return this.http.post<any>('http://localhost:8081/api/uploadVideo', formData);
  }
}
