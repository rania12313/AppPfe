import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './enregistrer-video/video.component';
import { ListVideosComponent } from './list-videos/list-videos.component';
import { BrowserModule } from '@angular/platform-browser';
import { SideBarUsersComponent } from '../components/side-bar-users/side-bar-users.component';
import { TopBarComponent } from '../components/top-bar/top-bar.component';

@NgModule({
  declarations: [
    VideoComponent,
    ListVideosComponent,
    SideBarUsersComponent,
    TopBarComponent,
  ],
  imports: [BrowserModule, CommonModule],
})
export class VideoModule {}
