import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  showBackgroundImage: boolean = true;

  private destroy$ = new Subject<void>();

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    const CUSTOM_BREAKPOINT = '(max-width: 600px)';
    this.breakpointObserver
      .observe([CUSTOM_BREAKPOINT])
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.showBackgroundImage = !result.matches;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
