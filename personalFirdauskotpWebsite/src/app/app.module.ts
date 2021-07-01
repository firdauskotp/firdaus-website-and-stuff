import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from '../shared/ng-zorro-antd.module';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoryModule } from './story/story.module';
// import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';
import { ProjectComponent } from './project/project.component';
import { ProjectModule } from './project/project.module';
import { AboutComponent } from './about/about.component';
import { ExpComponent } from './exp/exp.component';
import { FriendsComponent } from './friends/friends.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

registerLocaleData(en);

// registerLocaleData(en);

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    ExpComponent,
    StoryComponent,
    FriendsComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    ProjectModule,
    FontAwesomeModule,
    // ProjectComponent,
    AppRoutingModule,
    // StoryModule,
    ReactiveFormsModule,
    // StoryComponent,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    TranslateModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
