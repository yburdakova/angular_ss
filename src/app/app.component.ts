import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './shared/profile-card/profile-card.component';
import { ProfileService } from './services/profile.service';
import { Profile } from './models/profile.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-app';

  profileService = inject(ProfileService);
  profiles: Profile[] = [];

  constructor() {
    this.profileService.getAccounts()
      .subscribe((accounts) => {
        this.profiles = accounts;
      });
  }
}
