import { animate, animateChild, group, query, style, transition, trigger, state, useAnimation } from '@angular/animations';

// const query = (s, a, o = { optional: true }) => q(s, a, o);

export const routerTransition = trigger('routerTransition', [
    transition('* => *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%' }), { optional: true }),
        query(':enter', style({ transform: 'translateX(100%)' }), { optional: true }),

        group([
            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('0.3s ease-in-out', style({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
            query(':enter', [
                animate('0.3s ease-in-out', style({ transform: 'translateX(0%)' })),
                animateChild()
            ], { optional: true })
        ]),
    ]),
]);

export const MyAnimation = trigger('MyAnimation', [
    transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%', opacity: 1 }), { optional: true }),
        group([
            query(':enter', [
                style({ opacity: 0 }),
                animate('400ms ease-in-out', style({ opacity: 1 }))
            ], { optional: true }),
            query(':leave', [
                style({ opacity: 1 }),
                animate('400ms ease-in-out', style({ opacity: 0 }))], { optional: true }),
        ])
    ])
]);
