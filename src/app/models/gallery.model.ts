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
}

export interface languageOptions {
  en: string;
  nl: string;
}

export interface GalleryUrl {
  url: string;
  altText: string;
}
