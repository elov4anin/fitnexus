import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'system',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'get-started',
    pathMatch: 'full'
  },
  {
    path: 'news-feed',
    loadChildren: () => import('./pages/news-feed/news-feed.module').then(m => m.NewsFeedPageModule)
  },
  {
    path: 'members',
    loadChildren: () => import('./pages/members/members.module').then(m => m.MembersPageModule)
  },
  {
    path: 'add-device',
    loadChildren: () => import('./pages/add-device/add-device.module').then(m => m.AddDeviceModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./pages/rating/rating.module').then(m => m.RatingPageModule)
  },
  {
    path: 'food',
    loadChildren: () => import('./pages/food/food.module').then(m => m.FoodPageModule)
  },
  {
    path: 'get-started',
    loadChildren: () => import('./pages/get-started/get-started.module').then(m => m.GetStartedPageModule)
  },
  {
    path: 'welcome-premium',
    loadChildren: () => import('./pages/welcome-premium/welcome-premium.module').then(m => m.WelcomePremiumPageModule)
  },
  {
    path: 'connect-tracker',
    loadChildren: () => import('./pages/connect-tracker/connect-tracker.module').then( m => m.ConnectTrackerPageModule)
  },
  {
    path: 'stat-by-device',
    loadChildren: () => import('./pages/stat-by-device/stat-by-device.module').then( m => m.StatByDevicePageModule)
  },
  {
    path: 'welcome-programs',
    loadChildren: () => import('./pages/welcome-programmes/welcome-programmes.module').then( m => m.WelcomeProgrammesPageModule)
  },
  {
    path: 'library-programs',
    loadChildren: () => import('./pages/library-programs/library-programs.module').then( m => m.LibraryProgramsPageModule)
  },
  {
    path: 'my-programs',
    loadChildren: () => import('./pages/my-programs/my-programs.module').then( m => m.MyProgramsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
