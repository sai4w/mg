import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Plant } from '../../Plant';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-plant-item',
  templateUrl: './plant-item.component.html',
  styleUrls: ['./plant-item.component.css'],
})
export class PlantItemComponent implements OnInit {
  @Input() plant: Plant;
  @Output() onDeletePlant: EventEmitter<Plant> = new EventEmitter();
  @Output() onUpdatePlant: EventEmitter<Plant> = new EventEmitter();
  faTimes = faTimes;
  faEdit = faEdit;
  constructor() {}

  ngOnInit(): void {}

  onDelete(plant:Plant) {
    this.onDeletePlant.emit(plant);
    console.log(plant.plant_id)

  }

  onUpdate(plant: Plant) {
    this.onUpdatePlant.emit(plant);
  }
}
