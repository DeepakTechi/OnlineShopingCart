import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule }  from '@angular/forms';
import { HomeComponent } from './subcomponents/home/home.component';
import { RouterModule }  from '@angular/router';
import { appRoutes }  from './routerConfig';
import { LoginComponent } from './subcomponents/login/login.component';
import { AboutComponent } from './subcomponents/home/about/about.component';
import { AdressComponent } from './subcomponents/home/adress/adress.component';
import { BoardComponent } from './subcomponents/home/board/board.component';
import { HeaderComponent } from './subcomponents/home/header/header.component';
import { LoginService }  from "./subcomponents/login.service";
import { ActiveGuard } from './subcomponents/active.guard';
import { VegetablesComponent } from './subcomponents/home/vegetables/vegetables.component';
import { ModalComponent } from './subcomponents/home/modal/modal.component';
import { CartComponent } from './subcomponents/home/cart/cart.component';
import { CartService } from './subcomponents/home/cart.service';
import { HttpClientModule } from '@angular/common/http';
import { RestapiService} from './subcomponents/restapi.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    AdressComponent,
    BoardComponent,
    HeaderComponent,
    VegetablesComponent,
    ModalComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [LoginService,ActiveGuard,CartService ,RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
