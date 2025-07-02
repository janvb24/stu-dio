import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { GalleryItemComponent } from './pages/gallery-item/gallery-item.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery/:id', component: GalleryItemComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '**', component: NotFoundComponent },
];
