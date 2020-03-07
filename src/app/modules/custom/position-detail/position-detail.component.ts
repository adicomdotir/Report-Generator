import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/shared/models/player';
import { Location } from '@angular/common';

@Component({
    selector: 'app-position-detail',
    templateUrl: './position-detail.component.html',
    styleUrls: ['./position-detail.component.css']
})
export class PositionDetailComponent implements OnInit {
    index = -1;
    player: Player;
    players: Player[];

    constructor(private route: ActivatedRoute, private location: Location) {
        this.route.paramMap.subscribe(params => {
            this.index = Number(params['params'].id) - 1;
        });
    }

    ngOnInit() {
        this.players = JSON.parse(localStorage.getItem('POSITION'));
        this.player = this.players[this.index];
    }

    savePlayer() {
        this.checkMaxAndMin(this.player);
        this.players[this.index] = this.player;
        localStorage.setItem('POSITION', JSON.stringify(this.players));
        this.location.back();
    }

    checkMaxAndMin(player: Player) {
        if (player.defending > 20) player.defending = 20;
        if (player.goalkeeping > 20) player.goalkeeping = 20;
        if (player.playMaking > 20) player.playMaking = 20;
        if (player.loyalty > 20) player.loyalty = 20;
        if (player.scoring > 20) player.scoring = 20;
        if (player.passing > 20) player.passing = 20;

        if (player.defending < 0) player.playMaking = 0;
        if (player.goalkeeping < 0) player.goalkeeping = 0;
        if (player.playMaking < 0) player.playMaking = 0;
        if (player.loyalty < 0) player.loyalty = 0;
        if (player.scoring < 0) player.scoring = 0;
        if (player.passing < 0) player.passing = 0;
    }

    cancelBtn() {
        this.location.back();
    }

    checkAttackPlayer() {
        if (this.index == 0 || this.index == 1 || this.index == 2 || this.index == 3
            || this.index == 4 || this.index == 5 || this.index == 6 || this.index == 10) return false;
        return true;
    }
}
