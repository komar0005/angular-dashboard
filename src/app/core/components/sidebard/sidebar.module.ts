import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarComponent } from './sidebar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    ReactiveFormsModule,
    AutoCompleteModule,
    DropdownModule,
    CommonModule,
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
