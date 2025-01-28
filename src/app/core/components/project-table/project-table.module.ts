import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectTableComponent } from './project-table.component';
import { TableModule } from 'primeng/table';
import { ChipModule } from 'primeng/chip';
import { StatusChipModule } from '../status-chip/status-chip.module';

@NgModule({
  declarations: [ProjectTableComponent],
  imports: [CommonModule, TableModule, ChipModule, StatusChipModule],
  exports: [ProjectTableComponent],
})
export class RootTableModule {}
