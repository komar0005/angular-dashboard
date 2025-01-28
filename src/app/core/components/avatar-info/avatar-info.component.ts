import { Component, Input } from '@angular/core';
import { User } from '../../../sections/interfaces/user';

@Component({
  selector: 'app-avatar-info',
  templateUrl: './avatar-info.component.html',
  styleUrl: './avatar-info.component.css',
})
export class AvatarInfoComponent {
  @Input() user!: User;
}
