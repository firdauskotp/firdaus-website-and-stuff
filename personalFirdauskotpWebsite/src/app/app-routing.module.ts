import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ExpComponent } from './exp/exp.component';
import { FriendsComponent } from './friends/friends.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      
      // { path: 'stories', loadChildren: () => import('../stories/stories.module').then(m => m.StoriesModule) }
      // { path: 'stories', loadChildren: () => import('../stories/stories.component').then(m => m.StoriesComponent) }
      // { path: 'story', loadChildren: () => import('./story/story.module').then(m => m.StoryModule) },
      { path: '', component:HomeComponent},
      { path: 'stories', component:StoryComponent},
      { path: 'about', component:AboutComponent},
      { path: 'contact', component:ContactsComponent},
      { path: 'experiences', component:ExpComponent},
      { path: 'friends', component:FriendsComponent},
      { path: 'projects', component:ProjectComponent}
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
