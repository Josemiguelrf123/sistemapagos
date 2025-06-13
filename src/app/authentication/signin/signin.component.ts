import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { AuthService, Role } from '@core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FirestoreService } from '@core/service/firestore.service';
@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    standalone: true,
    imports: [
        RouterLink,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
    ],
})
export class SigninComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit {
  authForm!: UntypedFormGroup;
  submitted = false;
  loading = false;
  error = '';
  hide = true;
  usuariodata: any = [];
  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private db: FirestoreService
  ) {
    super();
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get f() {
    return this.authForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.error = '';
    if (this.authForm.invalid) {
      this.error = 'Correo electrónico y contraseña no validos!';
      return;
    } else {
      this.authService
        .loginByEmail(this.f['username'].value, this.f['password'].value)
        .then((response: any) => {
          this.db
            .asyncDoc("usuarios", response.user?.uid)
            .then((data: any) => {
              this.usuariodata = data.data();
              console.log(this.usuariodata);
              
              const user = {
                email: this.usuariodata.email,
                estatus: this.usuariodata.estatus,
                name: this.usuariodata.name,
                mobile: this.usuariodata.mobile,
                id: this.usuariodata.id,
                role: this.usuariodata.role,
              };
              this.authService.setCurrentUser(user);
              this.authService.userFirebase.next(this.usuariodata);
              const role: any = this.authService.currentUserValue.role[0];
              this.loading = false;
              if (this.usuariodata.role === Role.Admin || this.usuariodata.role === Role.Colaborador) {
                this.isTrueLogin(role);
              } else {
                this.error = "¡No puedes iniciar sesión con esta cuenta!'";
                this.submitted = false;
                this.loading = false;
                this.authService.logoutfirebase();
                this.authForm.reset();
              }
            })
            .catch((err: any) => {
              console.log(err);
              
              this.error = "¡No puedes iniciar sesión con esta cuenta!'";
              this.submitted = false;
              this.loading = false;
              this.authService.logoutfirebase();
              this.authForm.reset();
            });
        })
        .catch((err: any) => {
          console.log(err);
          
          this.submitted = false;
          this.loading = false;
          if (err.code === "auth/user-not-found") {
            this.error =
              "¡La contraseña o el correo electronico no son correctos!";
          } else if (err.code === "auth/wrong-password") {
            this.error =
              "¡La contraseña o el correo electronico no son correctos!";
          } else {
            this.error = "¡Ocurrio un error intente de nuevo!";
          }
        });
    }
  }

  isTrueLogin(role: any) {
    this.router.navigate(["/admin/semanas/listado-semanas"]);
  }
}
