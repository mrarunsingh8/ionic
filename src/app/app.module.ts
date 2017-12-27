import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {IonicStorageModule} from "@ionic/storage";
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { UserPage } from '../pages/user/user';
import { UserDetailPage } from '../pages/user/user-detail';
import { BookPage } from '../pages/book/book';
import { BookDetailPage } from '../pages/book/book-detail';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';
import { ConfigProvider } from '../providers/config/config';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { BookProvider } from '../providers/book/book';
import { LoginProvider } from '../providers/login/login';
import { HttpInterceptorProvider } from '../providers/http-interceptor/http-interceptor';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    UserPage,
    UserDetailPage,
    BookPage,
    BookDetailPage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    UserPage,
    UserDetailPage,
    BookPage,
    BookDetailPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorProvider, multi: true},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    ConfigProvider,
    ApiServiceProvider,
    BookProvider,
    LoginProvider,
    //HttpInterceptorProvider,
  ]
})
export class AppModule {}
