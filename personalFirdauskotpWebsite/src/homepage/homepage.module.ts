import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from '../app/ng-zorro-antd.module';
import { HomepageComponent } from './homepage.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';

// registerLocaleData(en);

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  // exports: [
  //   NgZorroAntdModule
  // ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [HomepageComponent]
})
export class HomepageModule { }
