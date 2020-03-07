import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

    years = 17;
    days = 0;
    skilllevel = 7;
    subskill = 0;
    coachlevel = 7;
    assistants = 10;
    intensity = 100;
    stamina = 5;

    skillNames = [
        'GoalKeeper',
        'Defend',
        'DefendPosition',
        'Cross',
        'Cross 50%',
        'WingAttack',
        'PlayMaking',
        'PlayMaking 50%',
        'Scoring',
        'Shoot',
        "Pass",
        'ThPass',
        "SP",
        "SP 25%",
    ];

    skillvalues = [
        'GK',
        'Def',
        'DefPos',
        'Cross',
        'Cross 50%',
        'WingAtt',
        'PM',
        'PM 50%',
        'Sco',
        'Shoot',
        "Pass",
        'ThPass',
        "SP",
        "SP 25%"
    ];
    
    skill = 'GK';
    results = [];

    constructor() { }

    ngOnInit() { }

    trainingChange(event) {
        this.skill = event.target.value;
    }

    trainingcalc() {

        //coefficients arrays
        var skillvalues = {
            'GK': 0.335,
            'Def': 0.206,
            'DefPos': 0.094,
            'Cross': 0.315,
            'Cross 50%': 0.1575,
            'WingAtt': 0.219,
            'PM': 0.22,
            'PM 50%': 0.11,
            'Sco': 0.218,
            'Shoot': 0.097,
            "Pass": 0.237,
            'ThPass': 0.178,
            "SP": 0.941,
            "SP 25%": 1.183
        };
        var agekoef = [1, 0.982, 0.963, 0.946, 0.928, 0.911, 0.894, 0.877, 0.861, 0.845, 0.830, 0.814, 0.799, 0.784, 0.770, 0.756, 0.742, 0.728];
        var assistkoef = [0.66, 0.692, 0.724, 0.756, 0.788, 0.82, 0.852, 0.884, 0.916, 0.948, 0.98, 1.012, 1.044, 1.076, 1.108, 1.14];
        var coachkoef = [0, 0, 0, 0, 0.774, 0.867, 0.9430, 1, 1.045];
        var agetable = [0.000, 16.000, 31.704, 47.117, 62.246, 77.094, 91.668, 105.972, 120.012, 133.791, 147.316, 160.591, 173.620, 186.408, 198.960, 211.279, 223.370, 235.238];

        //retrieve inputs from HTML form and parse them as integers

        var dropdown = document.getElementById('skill');
        // var skill = dropdown.options[dropdown.selectedIndex].value;
        // if (skill === "") {
        //     console.log('error')
        //     // toast(chooseaskill, 3000, 'rounded') // 'rounded' is the class I'm applying to the toast
        //     return;
        // }

        //set personal parameters through coefficients
        var coachK = coachkoef[this.coachlevel];
        var assistK = assistkoef[this.assistants];
        var intensK = this.intensity / 100.0;
        var staminaK = (100 - this.stamina) / 100.0;
        var trainK = skillvalues[this.skill];
        var totalK = coachK * assistK * intensK * staminaK * trainK;

        //initialize parameters
        var level = this.skilllevel;
        var sublevel = this.subskill / 100;
        var years0 = agetable[this.years - 17];
        var years1 = agetable[this.years - 16];
        var age0 = (this.days / 112) * (years1 - years0) + years0;
        var skill0lost = Math.pow(6.0896 * totalK, 1 / 0.72);
        var ageee = this.years * 1 + this.days / 112;
        var shtraf = 0;
        var oldweek = this.years * 112 + this.days * 1;
        var drop = 0;
        var age1 = this.years * 1 + this.days / 112;
        var age1old = 0;
        var ageold = 0;

        //start calculation
        this.results = [];
        var startpoint = this.skilllevel + 1;
        for (let lev = startpoint; lev < 21; lev++) {
            if (lev < 9) {
                var xxx1 = (Math.pow(lev, 1.72) - 1) * (1 / 6.0896 / 1.72);
            } else {
                xxx1 = 2.45426 + (1 / 4.7371 / 1.96) * Math.pow(lev - 5, 1.96);
            }

            if (level < 9) {
                var yyy1 = (Math.pow(level + sublevel, 1.72) - 1) * (1 / 6.0896 / 1.72);
            } else {
                yyy1 = 2.45426 + Math.pow(level + sublevel - 5, 1.96) * (1 / 4.7371 / 1.96);
            }

            let xxx = (xxx1 - yyy1) / totalK + age0;

            for (var i = 17; i < 35; i++) {
                if (xxx <= agetable[i - 17]) {
                    break
                }
            }

            var agge = i - 1;
            var stolH = agetable[agge - 17];
            var stolI = agetable[agge - 16];
            var ageeeold = ageee;
            ageee = agge + (xxx - stolH) / (stolI - stolH);

            if (lev > (level + sublevel + 1)) {
                var sh = 1;
                var shtrafx = 1 / 16 - ageee + ageeeold;
                if (shtrafx > 0) {
                    shtraf = shtraf + shtrafx;
                }
            } else {
                sh = 2;
                shtrafx = (1 / 16 - ageee + this.years * 1 + this.days / 112) * (lev - (level + sublevel));
                if (shtrafx > 0) {
                    shtraf = shtraf + shtrafx;
                }
            }
            if (lev > 15) {
                drop = Math.pow(lev, 7.5) * 8 / Math.pow(10, 12);
            } else {
                drop = 0;
            }

            if (lev <= 15) {
                age1 = ageee;
            }

            if (lev > 15) {
                age1 = age1 + (ageee - ageeeold) / (1 - drop * (ageee - ageeeold) * 16);
            }

            var resyears = Math.floor(age1 + shtraf + 0.0089);
            var resdays = Math.floor((age1 + shtraf - resyears + 0.0089) * 112);
            var weekss = ((resyears * 112 + resdays) - (oldweek)) / 7;
            oldweek = resyears * 112 + resdays;

            if (resdays < 10) {
                var resdaysstr = '0' + resdays;
            } else {
                resdaysstr = resdays.toString();
            }
            if (resyears > 31) {
                break;
            }


            this.results.push([lev, weekss.toFixed(1), resyears + "." + resdaysstr]);
        }
    }
}
