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
    STATS: 'stats',
    CALENDAR: 'calendar',
    RATING: 'rating',
    FOOD: 'food'
};
