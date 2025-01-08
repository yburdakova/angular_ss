import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './shared/profile-card/profile-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-app';
}
