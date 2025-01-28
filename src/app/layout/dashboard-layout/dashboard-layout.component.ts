import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from '../../core/components/sidebard/sidebar.module';
import { NavbarModule } from '../../core/components/navbar/navbar.module';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarModule,
    SidebarModule,
    NavbarModule,
    NavbarModule,
  ],
})
export class DashboardLayoutComponent {}
