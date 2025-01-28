import { Injectable } from '@angular/core';
import { ProjectManagement } from '../sections/interfaces/project-management';
import { Observable, of } from 'rxjs';
import { ApiResponse } from '../sections/interfaces/api';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly mockProjects: ProjectManagement[] = [
    {
      id: 1,
      projectName: 'Website Redesign',
      projectLogo: 'amyelsner.png',
      totalEstimatedTime: '240 horas',
      tasks: [
        {
          id: 1,
          name: 'Diseño de interfaz',
          status: 'DOING',
          description: 'Crear diseño de interfaz de usuario moderno',
          startDate: '2024-01-15',
          endDate: '2024-02-28',
          estimatedTime: '80 horas',
          evaluation: '-',
        },
        {
          id: 2,
          name: 'Desarrollo frontend',
          status: 'TODO',
          description: 'Implementar diseño en Angular',
          startDate: '2024-03-01',
          endDate: '2024-04-15',
          estimatedTime: '120 horas',
          evaluation: 'Bien',
        },
        {
          id: 3,
          name: 'Pruebas',
          status: 'TODO',
          description: 'Realizar pruebas de funcionalidad y usabilidad',
          startDate: '2024-04-16',
          endDate: '2024-04-30',
          estimatedTime: '40 horas',
          evaluation: 'Mal',
        },
      ],
    },
    {
      id: 2,
      projectName: 'Mobile App Development',
      projectLogo: 'amyelsner.png',
      totalEstimatedTime: '300 horas',
      tasks: [
        {
          id: 4,
          name: 'Planificación',
          status: 'COMPLETED',
          description: 'Definir requisitos y alcance de la aplicación',
          startDate: '2023-11-01',
          endDate: '2023-11-15',
          estimatedTime: '40 horas',
          evaluation: 'Excelente planificación',
        },
        {
          id: 5,
          name: 'Desarrollo backend',
          status: 'DOING',
          description: 'Crear API y servicios backend',
          startDate: '2023-11-16',
          endDate: '2024-01-15',
          estimatedTime: '160 horas',
          evaluation: 'Muy bueno',
        },
        {
          id: 6,
          name: 'Desarrollo móvil',
          status: 'TODO',
          description: 'Implementar aplicación en React Native',
          startDate: '2024-01-16',
          endDate: '2024-03-15',
          estimatedTime: '100 horas',
          evaluation: 'Bien',
        },
      ],
    },
  ];
  constructor() {}

  getProjects(): Observable<ApiResponse<ProjectManagement[]>> {
    return of({ total: 900, data: this.mockProjects });
  }
}
