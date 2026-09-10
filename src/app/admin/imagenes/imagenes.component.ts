import { Component } from '@angular/core';
import { GoogleDriveService } from '../../core/service/google-drive.service';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-imagenes',
  standalone: true,
  templateUrl: './imagenes.component.html',
  styleUrl: './imagenes.component.scss',
  imports: [
    BreadcrumbComponent
  ],
})

export class ImagenesComponent {

  constructor(
    private googleDriveService: GoogleDriveService
  ) {}

  conectarGoogleDrive(): void {
  }

}