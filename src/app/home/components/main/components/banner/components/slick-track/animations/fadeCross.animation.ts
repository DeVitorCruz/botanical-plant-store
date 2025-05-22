import { trigger, transition, style, animate, AnimationTriggerMetadata } from '@angular/animations';

export function fadeCross(): AnimationTriggerMetadata {
    return trigger('fadeCross', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('800ms ease-in', style({ opacity: 1 }))
        ]),
        transition(':leave', [
            animate('800ms ease-out', style({ opacity: 0 }))
        ]),
    ]);
}