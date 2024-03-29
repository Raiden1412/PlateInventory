import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute } from './layouts/error/error.route';
import { navbarRoute } from './layouts/navbar/navbar.route';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';
import { PlateInfoComponent } from 'app/plate-info/plate-info.component';

const LAYOUT_ROUTES = [navbarRoute, ...errorRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'plateInfo',
          component: PlateInfoComponent
        },

        /*{
          path: 'admin',
          loadChildren: () => import('./admin/admin.module').then(m => m.PlateInventoryAdminModule)
        },
        {
          path: 'account',
          loadChildren: () => import('./account/account.module').then(m => m.PlateInventoryAccountModule)
        },*/
        {
          path: '',
          redirectTo: '/plateInventory',
          pathMatch: 'full'
        }
        //...LAYOUT_ROUTES
      ],
      { enableTracing: DEBUG_INFO_ENABLED }
    )
  ],
  exports: [RouterModule]
})
export class PlateInventoryAppRoutingModule {}
