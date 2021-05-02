import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.sass']
})
export class ExercisesComponent implements OnInit {
  public exercises = [
    {
      id: 1,
      date: new Date(2020, 31, 10)
    }
  ];
  public currentExercise: any;

  constructor() { }

  ngOnInit() {
    this.currentExercise = this.exercises[0];
  }

}
