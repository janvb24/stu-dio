export interface Gallery {
  Owner: string;
  KVK: string;
  Items: GalleryItem[];
}

export interface GalleryItem {
  id: number;
  name: string;
  description: string;
  year: number;
  urls: GalleryUrl[];
}

export interface GalleryUrl {
  url: string;
  altText: string;
}
