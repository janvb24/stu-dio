import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { filter, map, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink,
    MatSidenavModule,
    TranslocoModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  showFullNavigation: boolean = true;
  currentLanguage: string = '';
  @Input() showHeader: boolean = true;
  @Input() backgroundColor: string | null = null;

  private destroy$ = new Subject<void>();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private transloco: TranslocoService
  ) {}
  ngOnInit(): void {
    const CUSTOM_BREAKPOINT = '(max-width: 750px)';
    this.breakpointObserver
      .observe([CUSTOM_BREAKPOINT])
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.showFullNavigation = !result.matches;
      });

    // Subscribe to language change
    this.transloco.langChanges$.subscribe({
      next: (value) => {
        this.currentLanguage = value;
      },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  setLanguage(language: 'en' | 'nl') {
    this.transloco.setActiveLang(language);
  }
}
