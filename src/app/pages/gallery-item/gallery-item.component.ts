import { Component } from '@angular/core';
import { GalleryItem } from '../../models/gallery.model';
import { Observable, tap } from 'rxjs';
import { GalleryService } from '../../services/gallery.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-gallery-item',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './gallery-item.component.html',
  styleUrl: './gallery-item.component.scss',
})
export class GalleryItemComponent {
  galleryItem$: Observable<GalleryItem | undefined> | undefined;
  currentLanguage: 'en' | 'nl' = 'en';

  constructor(
    private galleryService: GalleryService,
    private route: ActivatedRoute,
    private router: Router,
    private transloco: TranslocoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Ensure id is a number
    if (isNaN(id)) {
      this.router.navigate(['/404']);
      return;
    }

    // Get Gallery Item and ensure it exists
    this.galleryItem$ = this.galleryService.getGalleryItemById(id).pipe(
      tap((item) => {
        if (item === undefined) {
          this.router.navigate(['/404']);
        }
      })
    );

    // Subscribe to language change
    this.transloco.langChanges$.subscribe({
      next: (value) => {
        this.updateLanguage(value);
      },
    });
  }

  private updateLanguage(lang: string) {
    if (lang === 'en' || lang === 'nl') {
      this.currentLanguage = lang;
    }
  }
}
