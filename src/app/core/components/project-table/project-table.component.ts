import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ProjectManagement } from '../../../sections/interfaces/project-management';
import { ProjectsService } from '../../../services/projects.service';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrl: './project-table.component.css',
})
export class ProjectTableComponent implements OnInit {
  projects: ProjectManagement[] = [];
  cols: any[] = [];
  loading: boolean = true;
  rowGroupMetadata: any;
  activityValues: number[] = [0, 100];
  isExpanded: boolean = false;
  idFrozen: boolean = false;
  total: number = 0;

  @ViewChild('filter') filter!: ElementRef;

  constructor(
    private readonly projectService: ProjectsService,
    private readonly zone: NgZone
  ) {}

  ngOnInit() {
    this.cols = [
      { field: 'id', header: '#' },
      { field: 'name', header: 'Tipo' },
      { field: 'status', header: 'Estado' },
      { field: 'description', header: 'Asunto' },
      { field: 'startDate', header: 'Fecha de Inicio' },
      { field: 'endDate', header: 'Fecha de Fin' },
      { field: 'estimatedTime', header: 'Tiempo Estimado' },
      { field: 'evaluation', header: 'Evaluación' },
    ];

    this.projectService.getProjects().subscribe((projects) => {
      this.zone.run(() => {
        this.projects = projects.data;
        this.updateRowGroupMetaData();
        this.total = projects.total;
      });
    });
  }

  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    if (this.projects) {
      for (let i = 0; i < this.projects.length; i++) {
        const rowData = this.projects[i];
        const projectName = rowData.projectName;

        if (i === 0) {
          this.rowGroupMetadata[projectName] = { index: 0, size: 1 };
        } else {
          const previousRowData = this.projects[i - 1];
          const previousRowGroup = previousRowData.projectName;
          if (projectName === previousRowGroup) {
            this.rowGroupMetadata[projectName].size++;
          } else {
            this.rowGroupMetadata[projectName] = { index: i, size: 1 };
          }
        }
      }
    }
  }
}
