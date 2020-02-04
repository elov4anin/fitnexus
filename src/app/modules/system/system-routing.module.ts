import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TabsComponent} from "./components/tabs/tabs.component";

const routes: Routes = [
    {
        path: '',
        component: TabsComponent,
        children: [
            {
                path: 'news-feed',
                loadChildren: () => import('./pages/news-feed/news-feed.module').then(m => m.NewsFeedPageModule)
            },
            {
                path: 'stats',
                loadChildren: () => import('./pages/stats/stats.module').then(m => m.StatsPageModule)
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

        ],

    },
    {
        path: '',
        redirectTo: '/app/system/get-started',
        pathMatch: 'full'
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SystemRoutingModule {
}
