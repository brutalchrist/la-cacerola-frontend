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
      date: new Date("2019-04-24 00:00"),
      published: false
    },
    {
      id: 2,
      date: new Date("2019-05-08 00:00"),
      published: true
    }
  ];
  public currentExercise: any;

  constructor() { }

  ngOnInit() {
    this.currentExercise = this.exercises.find(exercise => exercise.published);
  }

}
