import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';
import { MOCK_USERS } from '../mock-data/mock-users';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http: HttpClient = inject(HttpClient);
  baseApiUrl: string = 'https://icherniakov.ru/yt-course'

  useMockData: boolean = true;

  getAccounts() {
    if (this.useMockData) {

      return of(MOCK_USERS);
    } else {

      return this.http.get<Profile[]>(`${this.baseApiUrl}/account/test_accounts`);
    }
  }
}
