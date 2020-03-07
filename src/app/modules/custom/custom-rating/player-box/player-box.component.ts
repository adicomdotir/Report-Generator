import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/shared/models/player';

@Component({
    selector: 'app-player-box',
    templateUrl: './player-box.component.html',
    styleUrls: ['./player-box.component.css']
})
export class PlayerBoxComponent implements OnInit {

    @Input() player: Player;

    constructor() { }

    ngOnInit() { }

    getLoyaltyText(pl: Player) {
        if (pl.motherClub) {
            return '&#10084;';
        }
        return pl.loyalty;
    }

    checkAttackPlayer() {
        if (this.player.id == 1 || this.player.id == 2 || this.player.id == 3
            || this.player.id == 4 || this.player.id == 5 || this.player.id == 6
            || this.player.id == 7 || this.player.id == 11) return false;
        return true;
    }

    checkDefendPlayer() {
        if (this.player.id == 12 || this.player.id == 13 || this.player.id == 14) return false;
        return true;
    }

}
