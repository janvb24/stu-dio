import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, RouterLink, MatSidenavModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  showFullNavigation: boolean = true;

  private destroy$ = new Subject<void>();

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    const CUSTOM_BREAKPOINT = '(max-width: 750px)';
    this.breakpointObserver
      .observe([CUSTOM_BREAKPOINT])
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.showFullNavigation = !result.matches;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
