import { Component, OnInit } from '@angular/core';
import { PlantService } from '../../services/plant.service';
import { Plant } from '../../Plant';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css'],
})
export class PlantsComponent implements OnInit {
  plants: Plant[] = [];

  constructor(private plantService: PlantService) {}

  ngOnInit(): void {
    this.plantService.getPlants().subscribe((plants) => (this.plants = plants));
  }
  

  deletePlant(plant: Plant) {
    console.log(plant.plant_id)

    this.plantService
      .deletePlant(plant)
      .subscribe(
        () => (this.plants = this.plants.filter((t) => t.plant_id !== plant.plant_id))
      );
  }

  updatePlant(plant: Plant){
    this.plantService.updatePlant(plant).subscribe((plant) => this.plants.push(plant));

  }
  addPlant(plant: Plant) {
    this.plantService.addPlant(plant).subscribe((plant) => this.plants.push(plant));
  }
}
