import { Component, ElementRef, ViewChild } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  @ViewChild('videoElement') videoElement!: ElementRef;
  mediaRecorder!: MediaRecorder;
  chunks: Blob[] = [];
  stream!: MediaStream;
  cameraActivated: boolean = false;
  recordStarted:boolean=false;
  constructor(private videoservice :VideoService) { }

  activateCameraAndMicrophone() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        this.videoElement.nativeElement.srcObject = stream;
        this.stream = stream;
        this.cameraActivated = true; // Activer le drapeau ici
      })
      .catch(err => console.error('Error accessing webcam and microphone:', err));
  }

  startRecording() {
   
    this.mediaRecorder = new MediaRecorder(this.stream);

    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        this.chunks.push(event.data);
      }
    };

    this.mediaRecorder.start();
    this.recordStarted=true;
  }

  stopMediaDevices() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
    }
  }

  stopRecording() {
   
    this.mediaRecorder.stop();
  
    this.mediaRecorder.onstop = () => {
      const blob = new Blob(this.chunks, { type: 'video/webm' });
      const videoURL = window.URL.createObjectURL(blob);
  
      const downloadLink = document.createElement('a');
      downloadLink.href = videoURL;
      downloadLink.download = 'recorded_video.webm';
      document.body.appendChild(downloadLink);
      downloadLink.click();
  
      // Éteindre la webcam et le microphone
      this.stopMediaDevices();
    };
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.uploadVideo(file);
  }

  uploadVideo(file: File) {
    this.videoservice.uploadVideo(file).subscribe(
      response => {
        console.log('Video uploaded successfully:', response);
        // Traiter la réponse du serveur si nécessaire
      },
      
    );
  }
}
