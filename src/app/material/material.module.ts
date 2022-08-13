import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [],
  exports: [
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatTabsModule,
  ],
})
export class MaterialModule {}
