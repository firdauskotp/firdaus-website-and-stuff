import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { AppModule, HttpLoaderFactory } from '../app.module';
import { NgZorroAntdModule } from '../../shared/ng-zorro-antd.module';



@NgModule({
  declarations: [
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    AppModule,
    TranslateModule
  ],
  // exports: [
  //   NgZorroAntdModule
  // ],
  // providers: [{ provide: NZ_I18N, useValue: en_US }],
  // bootstrap: [HomeComponent]
})
export class HomeModule { }
