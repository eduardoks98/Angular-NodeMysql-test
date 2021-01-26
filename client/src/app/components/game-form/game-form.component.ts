import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/Games';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  }

  edit: boolean = false;
  constructor(private gamesService: GamesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.gamesService.getGame(params.id)
        .subscribe(
          res => {
            this.game = res;
            this.edit = true;
          },
          err => console.error(err)
        );
    }
  }

  saveNewGame() {
    delete this.game.created_at;
    delete this.game.id;

    this.gamesService.postGame(this.game)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/games']);
        },
        err => console.error(err)
      );
  }

  updateGame() {
    delete this.game.created_at;
    this.gamesService.putGame(this.game.id, this.game)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/games']);
        },
        err => console.error(err)
      );
  }

}
