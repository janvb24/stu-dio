import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Gallery, GalleryItem } from '../models/gallery.model';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private jsonUrl = 'gallery.json';

  constructor(private http: HttpClient) {}

  getFullGallery(): Observable<Gallery> {
    return this.http.get<Gallery>(this.jsonUrl);
  }

  getGalleryItemById(id: number): Observable<GalleryItem | undefined> {
    return this.getFullGallery().pipe(
      map((gallery) => gallery.Items.find((item) => item.id === id))
    );
  }
}
