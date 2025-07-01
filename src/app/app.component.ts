import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'stu-dio';
}
