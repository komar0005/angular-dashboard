import { Component } from '@angular/core';
import { AvatarInfoModule } from '../../core/components/avatar-info/avatar-info.module';
import { User } from '../interfaces/user';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { RootTableModule } from '../../core/components/project-table/project-table.module';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AvatarInfoModule,
    CalendarModule,
    ButtonModule,
    RootTableModule,
    RootTableModule,
    InputTextModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  user: User = {
    avatarUrl: 'assets/demo/images/avatar/amyelsner.png',
    fullName: 'Amy Elsner',
    workPlace: 'Sales Representative',
  };
}
