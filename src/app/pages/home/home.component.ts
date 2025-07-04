import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { HeaderComponent } from '../../ui/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TranslocoModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  showPhoneBanner: boolean = true;

  private destroy$ = new Subject<void>();

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    const CUSTOM_BREAKPOINT = '(max-width: 1000px)';
    this.breakpointObserver
      .observe([CUSTOM_BREAKPOINT])
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.showPhoneBanner = !result.matches;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
