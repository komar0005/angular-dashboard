import { NgModule } from '@angular/core';
import { StatusChipComponent } from './status-chip.component';
import { ChipModule } from 'primeng/chip';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [StatusChipComponent],
  imports: [ChipModule, CommonModule],
  exports: [StatusChipComponent],
})
export class StatusChipModule {}
