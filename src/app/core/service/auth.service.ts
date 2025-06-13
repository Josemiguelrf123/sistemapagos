import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { User } from '../models/user';
import { Role } from '@core/models/role';
import { UserFirebase } from '@core/models/userFireabse';
import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  public userFirebase: BehaviorSubject<UserFirebase> =
    new BehaviorSubject<UserFirebase>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
  public firebaseUser: Observable<UserFirebase> =
    this.userFirebase.asObservable();

  private users = [
    {
      id: '1',
      img: 'assets/images/user/admin.jpg',
      username: 'admin@gmail.com',
      password: 'admin@123',
      firstName: 'Sarah',
      lastName: 'Smith',
      role: Role.Admin,
      token: 'admin-token',
    },
    {
      id: '2',
      img: 'assets/images/user/doctor.jpg',
      username: 'colaborador@gmail.com',
      password: 'colaborador@123',
      firstName: 'Ashton',
      lastName: 'Cox',
      role: Role.Colaborador,
      token: 'doctor-token',
    },
  ];

  constructor(private http: HttpClient, private auth: Auth) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      return this.error('Correo electrónico o contraseña incorrectos');
    } else {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return this.ok({
        id: user.id,
        img: user.img,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        token: user.token,
      });
    }
  }
  ok(body?: {
    id: string;
    img: string;
    username: string;
    firstName: string;
    lastName: string;
    token: string;
  }) {
    return of(new HttpResponse({ status: 200, body }));
  }
  error(message: string) {
    return throwError(message);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(this.currentUserValue);
    return of({ success: false });
  }

  getCurrentUSer() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        return user.uid;
      } else {
        return null;
      }
    });
  }

  public get firebaseUserValue(): UserFirebase {
    return this.userFirebase.value;
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  loginByEmail(username: string, password: string) {
    return signInWithEmailAndPassword(this.auth, username, password);
  }

  registerByEmail(user: any) {
    const { email, password } = user;
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  restorePassword(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }

  async logoutfirebase() {
    try {
      localStorage.clear();
      localStorage.removeItem('currentUser');
      await signOut(this.auth);
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(this.currentUserValue);
    } catch (error) {
      console.log(error);
    }
  }

  setCurrentUser(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    return user;
  }

  async signOut() {
    return await signOut(this.auth);
  }
}
