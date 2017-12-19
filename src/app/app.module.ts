import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { UserPage } from '../pages/user/user';
import { UserDetailPage } from '../pages/user/user-detail';
import { BookPage } from '../pages/book/book';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';
import { ConfigProvider } from '../providers/config/config';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { BookProvider } from '../providers/book/book';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    UserPage,
    UserDetailPage,
    BookPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    UserPage,
    UserDetailPage,
    BookPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    ConfigProvider,
    ApiServiceProvider,
    BookProvider,
  ]
})
export class AppModule {}
