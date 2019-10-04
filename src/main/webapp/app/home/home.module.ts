import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlateInventorySharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { PlateService } from 'app/shared/service/PlateService';

@NgModule({
  imports: [PlateInventorySharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
  providers: [PlateService]
})
export class PlateInventoryHomeModule {}
