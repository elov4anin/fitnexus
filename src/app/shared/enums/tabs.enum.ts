export enum TabsEnum {
    NEWS = 'NEWS',
    STATS = 'STATS',
    CALENDAR = 'CALENDAR',
    RATING = 'RATING',
    FOOD = 'FOOD'
}

export const TabsEnum2IconMapping: Record<TabsEnum, string> = {
    NEWS: 'ios-list-box-gray.svg',
    STATS: 'ios-stats.svg',
    CALENDAR: 'ios-calendar.svg',
    RATING: 'ios-trophy.svg',
    FOOD: 'ios-restaurant.svg'
};
export const TabsEnum2IconActiveMapping: Record<TabsEnum, string> = {
    NEWS: 'ios-list-box-blue.svg',
    STATS: 'ios-stats-blue.svg',
    CALENDAR: 'ios-calendar-blue.svg',
    RATING: 'ios-trophy-blue.svg',
    FOOD: 'ios-restaurant-blue.svg'
};


export const TabsEnum2RoutingMapping: Record<TabsEnum, string> = {
    NEWS: 'news-feed',
    STATS: 'add-device',
    CALENDAR: 'calendar',
    RATING: 'challenges',
    FOOD: 'food'
};

export const TabsEnum2ActivePagesMapping: Record<TabsEnum, string[]> = {
    NEWS: ['news-feed', 'members', 'members-connect'],
    STATS: [
        'stat-by-device',
        'add-device',
        'welcome-programs',
        'training',
        'stat-program',
        'add-body-comp',
        'before-after',
        'new-measurements',
        'stat-measurements',
        'measurement-detail',
        'library-programs',
        'my-programs'
    ],
    CALENDAR: ['calendar', 'my-bookings', 'class', 'feedback'],
    RATING: ['challenges', 'leaderboard'],
    FOOD: ['food', 'meal-planner'],
};
