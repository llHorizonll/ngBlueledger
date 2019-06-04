import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgPipesModule } from "ngx-pipes";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { HeaderComponent } from "./shared/header/header.component";
import { LayoutComponent } from "./shared/layout/layout.component";
import { BreadcrumbComponent } from "./shared/breadcrumb/breadcrumb.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { RightSidebarComponent } from "./shared/right-sidebar/right-sidebar.component";
import { AuthGuard } from "./services/auth.guard";
import {
  AlertService,
  AuthService,
  AuthInterceptor,
  ErrorInterceptor
} from "./services";
import { SidebarService } from "./shared/sidebar/sidebar.service";
import { BreadcrumbNavService } from "./services/breadcrumbnav.service";
import { PreloaderModule } from "./shared/preloader/preloader.module";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    BreadcrumbComponent,
    SidebarComponent,
    RightSidebarComponent
  ],
  imports: [
    PreloaderModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    NgPipesModule,
    NgZorroAntdModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard,
    AuthService,
    SidebarService,
    BreadcrumbNavService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
