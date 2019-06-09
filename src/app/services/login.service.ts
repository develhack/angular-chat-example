import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  async login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.angularFireAuth.auth
      .signInWithEmailAndPassword(email, password);
  }

  async logout(): Promise<void> {
    return this.angularFireAuth.auth
      .signOut();
  }

  currentUser(): firebase.User {
    return this.angularFireAuth.auth
      .currentUser;
  }
}
