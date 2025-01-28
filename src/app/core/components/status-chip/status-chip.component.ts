import { Component, Input } from '@angular/core';
import { TaskStatus } from '../../../sections/interfaces/project-management';

@Component({
  selector: 'app-status-chip',
  templateUrl: './status-chip.component.html',
  styleUrl: './status-chip.component.css',
})
export class StatusChipComponent {
  @Input() status: TaskStatus = 'NONE';

  getStatusColor() {
    switch (this.status) {
      case 'TODO':
        return 'bg-blue-500 text-white';
      case 'DOING':
        return 'bg-yellow-500 text-white';
      case 'COMPLETED':
        return 'bg-green-500 text-white';
      case 'EVALUATED':
        return 'bg-purple-500 text-white';
      case 'CLOSED':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  }

  getLabel() {
    switch (this.status) {
      case 'TODO':
        return 'ToDo';
      case 'DOING':
        return 'Doing';
      case 'COMPLETED':
        return 'Completed';
      case 'EVALUATED':
        return 'Evaluated';
      case 'CLOSED':
        return 'Closed';
      default:
        return 'None';
    }
  }
}
