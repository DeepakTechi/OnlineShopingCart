import { HomeComponent } from './subcomponents/home/home.component';
import { Routes }  from '@angular/router';
import { LoginComponent } from './subcomponents/login/login.component';
import { AboutComponent } from './subcomponents/home/about/about.component';
import { AdressComponent } from './subcomponents/home/adress/adress.component';
import { BoardComponent } from './subcomponents/home/board/board.component';
import { ActiveGuard } from './subcomponents/active.guard';
import { HeaderComponent } from './subcomponents/home/header/header.component';
import { VegetablesComponent } from './subcomponents/home/vegetables/vegetables.component';
import { ModalComponent } from './subcomponents/home/modal/modal.component';
import { CartComponent } from './subcomponents/home/cart/cart.component';
 


export const appRoutes: Routes = [
    { 
        path: 'home', 
        canActivate:[ActiveGuard],
      component: HomeComponent 
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
   
    {
      path: 'about',
      canActivate:[ActiveGuard],
      component: AboutComponent
    },
    {
      path: 'adress',
      canActivate:[ActiveGuard],
      component: AdressComponent
    },
    {
      path: 'board',
      canActivate:[ActiveGuard],
      component: BoardComponent
    },
    {
      path: 'header',
      component: HeaderComponent
    },
    {
      path: 'vegetables',
      component: VegetablesComponent
    },
    {
    path:'modal',
    component:ModalComponent

    },
    {
      path:'cart',
      component:CartComponent
    }
    
    
];
