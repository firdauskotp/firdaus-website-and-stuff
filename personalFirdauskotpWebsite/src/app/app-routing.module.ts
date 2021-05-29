import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      
      { path: 'stories', loadChildren: () => import('../stories/stories.module').then(m => m.StoriesModule) }
      // { path: 'stories', loadChildren: () => import('../stories/stories.component').then(m => m.StoriesComponent) }
      // { path: '', loadChildren: () => import('../homepage/homepage.component').then(m => m.HomepageComponent) }
      // { path: '', loadChildren: () => import('../homepage/homepage.module').then(m => m.HomepageModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
