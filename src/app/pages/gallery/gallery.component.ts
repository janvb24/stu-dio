import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GalleryService } from '../../services/gallery.service';
import { Gallery } from '../../models/gallery.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  gallery$: Observable<Gallery> | undefined;

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.gallery$ = this.galleryService.getFullGallery();
  }
}
