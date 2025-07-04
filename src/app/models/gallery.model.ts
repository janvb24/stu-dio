import { SafeResourceUrl } from '@angular/platform-browser';

export interface Gallery {
  Owner: string;
  KVK: string;
  Items: GalleryItem[];
}

export interface GalleryItem {
  id: number;
  name: languageOptions;
  description: languageOptions;
  year: number;
  urls: GalleryUrl[];
  videos: YoutubeUrl[];
}

export interface languageOptions {
  en: string;
  nl: string;
}

export interface GalleryUrl {
  url: string;
  altText: string;
}

export interface YoutubeUrl {
  id: string;
  title: string;
  sanitizedUrl?: SafeResourceUrl;
}
