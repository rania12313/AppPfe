import { Component } from '@angular/core';
import { AuthService } from 'src/app/globalServices/auth.service';
import { LocalStorageService } from 'src/app/globalServices/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private auth: AuthService, private local: LocalStorageService) {}
  isAuth = false;
  user: any = null;
  ngOnInit() {
    this.user = this.local.getObject('user');
    this.isAuth = this.auth.isAuthenticated();
  }
}
