import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface item {
  url: string;

  year: number;
  id: number;
  altText: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  ls: item[] = [
    {
      id: 0,
      url: '/images/projects/louers-factory2025/2.jpg',
      year: 2025,
      altText: '',
    },
    {
      id: 1,
      url: '/images/projects/louers2025/1.png',
      year: 2025,
      altText: '',
    },
    {
      id: 2,
      url: '/images/projects/maya-tempel2025/maya-tempel.png',
      year: 2025,
      altText: '',
    },
    {
      id: 3,
      url: '/images/projects/LP-cover2024/lp-cover.png',
      year: 2024,
      altText: '',
    },
    {
      id: 4,
      url: '/images/projects/wii2024/wii.png',
      year: 2024,
      altText: '',
    },
    {
      id: 5,
      url: '/images/projects/factory2024/factory.png',
      year: 2024,
      altText: '',
    },
    {
      id: 6,
      url: '/images/projects/zelda2024/zelda.png',
      year: 2024,
      altText: '',
    },
    {
      id: 7,
      url: '/images/projects/statue2024/statue.png',
      year: 2024,
      altText: '',
    },
    {
      id: 8,
      url: '/images/projects/tv2023/tv.jpg',
      year: 2023,
      altText: '',
    },
    {
      id: 9,
      url: '/images/projects/hoodie2023/front.jpg',
      year: 2023,
      altText: '',
    },
    {
      id: 10,
      url: '/images/projects/robot-arm2023/clean.png',
      year: 2023,
      altText: '',
    },
  ];
}
