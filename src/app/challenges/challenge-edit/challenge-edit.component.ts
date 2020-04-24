import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.css'],
  moduleId: module.id,
})
export class ChallengeEditComponent implements OnInit {
  challengeDescription = '';
  @Output() input = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSetChallenge() {
    //this.currentChallenge = this.challengeDescription;
    this.input.emit(this.challengeDescription);
  }
}
