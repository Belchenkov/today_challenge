import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.css'],
  moduleId: module.id,
})
export class ChallengeEditComponent implements OnInit {
  challengeDescription = '';

  constructor() { }

  ngOnInit() {
  }

  onSetChallenge() {
    //this.currentChallenge = this.challengeDescription;
  }
}
