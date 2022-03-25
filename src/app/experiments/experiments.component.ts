import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: object[] = [
    {name: "Mars soil sample"},
    {name: "Plant growth in habitat"},
    {name: "Human bone density"},
  ];
  experimentBeingEdited: object = null;
  experimentsOnBoard = false;

  constructor() { }

  ngOnInit() {
  }

  add(equipmentName: string) {
    for (let i=0; i < this.experiments.length; i++) {
      if(this.experiments[i]['name'] === equipmentName) {
          this.experimentsOnBoard = true;
      }
  }
  if (!this.experimentsOnBoard) {
      this.experiments.push({name: equipmentName});
  }
  this.experimentsOnBoard = false;
}

  remove(member: object) {
    let index = this.experiments.indexOf(member);
    this.experiments.splice(index, 1);
  }

  edit(editedExperiment: object) {
    this.experimentBeingEdited = editedExperiment;
  }

  save(name: string, member: object) {
    member['name'] = name;
    this.experimentBeingEdited = null;
  }

}
