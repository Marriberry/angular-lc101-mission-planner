import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: object[] = [
    {name: "Habitat dome"},
    {name: "Drones"},
    {name: "Food containers"},
    {name: "Oxygen tanks"}
  ];
  equipmentBeingEdited: object = null;
  equipmentOnBoard = false;

  constructor() { }

  ngOnInit() {
  }

  add(equipmentName: string) {
    for (let i=0; i < this.equipment.length; i++) {
      if(this.equipment[i]['name'] === equipmentName) {
          this.equipmentOnBoard = true;
      }
  }
  if (!this.equipmentOnBoard) {
      this.equipment.push({name: equipmentName});
  }
  this.equipmentOnBoard = false;
}

  remove(member: object) {
    let index = this.equipment.indexOf(member);
    this.equipment.splice(index, 1);
  }

  edit(editedEquipment: object) {
    this.equipmentBeingEdited = editedEquipment;
  }

  save(name: string, member: object) {
    member['name'] = name;
    this.equipmentBeingEdited = null;
  }
}
