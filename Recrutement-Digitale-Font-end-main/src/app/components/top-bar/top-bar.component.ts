import { Component } from '@angular/core';
import { AuthService } from 'src/app/globalServices/auth.service';
import { LocalStorageService } from 'src/app/globalServices/local-storage.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  constructor(
    private authService: AuthService,
    private localStorage: LocalStorageService
  ) {}
  user: any;
  ngOnInit() {
    this.user = this.localStorage.getObject('user') || 'User not found';
  }

  logout() {
    this.authService.logout();
  }
}
