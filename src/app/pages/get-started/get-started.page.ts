import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from "@ionic/angular";

@Component({
    selector: 'app-get-started',
    templateUrl: './get-started.page.html',
    styleUrls: ['./get-started.page.scss'],
})
export class GetStartedPage implements OnInit {
    pageTitle: string = 'Welcome to fitnexus';
    @ViewChild('slider', {static: false}) slider: IonSlides;
    slideOpts = {
        initialSlide: 0,
        speed: 400
    };

    slides: ISlideInfo[] = [
        {
            title: 'Upload a photo',
            text: 'App feature blurb to go here, try not to exceed three lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
            isPhotoSlide: true
        },
        {
            title: 'News feed',
            text: 'Find out all of the latest news relating to your health and fitness journey, as well as stories from those around the world to inspire you.',
            icon: 'feed'
        },
        {
            title: 'Members',
            text: 'Message and interact with all of the members at your health and fitness facilities. Find out what other people are finding success in and share your own.',
            icon: 'members'
        },
        {
            title: 'Tracking',
            text: 'Pick from 1000’s of readymade workouts, for the gym or at home, created by fully qualified personal trainers from across the globe. Create your own workouts, connect fitness trackers or fitness apps and track your progress.',
            icon: 'tracking'
        },
        {
            title: 'Nutrition',
            text: 'Choose from over 250,000 healthy recipes in our library, all with cooking instructions and nutritional information, then add them to your very own meal planner that calculates your daily and weekly nutrition for you. New recipes added daily!',
            icon: 'nutrition'
        },
        {
            title: 'Classes',
            text: 'Book classes at your gym in just a few clicks. Manage your bookings and see all the available classes to book at a glance.',
            icon: 'classes'
        },

        {
            title: 'Challenges',
            text: 'Need help keeping yourself motivated? Our monthly fitness challenges are a great way to keep in shape whilst working towards your goals, simply pick the challenge you like, add yourself and the app keeps track of your progress towards the goal. New challenges every month!',
            icon: 'challenges'
        },



    ];

    constructor() {
    }

    ngOnInit() {
    }

    nextSlide() {
        this.slider.slideNext()
    }
}

export interface ISlideInfo {
    title?: string;
    text?: string;
    imgSrc?: string;
    icon?: string;
    isPhotoSlide?: boolean
}
