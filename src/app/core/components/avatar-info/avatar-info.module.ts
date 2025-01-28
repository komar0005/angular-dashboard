import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarInfoComponent } from './avatar-info.component';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  declarations: [AvatarInfoComponent],
  imports: [CommonModule, AvatarModule],
  exports: [AvatarInfoComponent],
})
export class AvatarInfoModule {}
