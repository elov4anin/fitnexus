import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsFeedPage } from './news-feed.page';

const routes: Routes = [
  {
    path: '',
    component: NewsFeedPage,
  },
  {
    path: 'members',
    loadChildren: () => import('./members/members.module').then(m => m.MembersPageModule)
  },
  {
    path: 'news/:id',
    loadChildren: () => import('./news/news.module').then(m => m.NewsPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsFeedPageRoutingModule {}
