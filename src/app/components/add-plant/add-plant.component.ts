import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Plant } from '../../Plant';
import { Usage } from '../../Usage';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css'],
})
export class AddPlantComponent implements OnInit {
  @Output() onAddPlant: EventEmitter<Plant> = new EventEmitter();
  name: string;
  created: string;
  color: string;
  price: number;
  origine: string;
  usages: Usage[];
  
  showAddPlant: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddPlant = value));
  }

  ngOnInit(): void {}
  
   ngOnDestroy() {
        // Unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

  onSubmit() {
    if (!this.name) {
      alert('Please add a plant!');
      return;
    }

    const newPlant: Plant = {
      name: this.name,
      created: this.created,
      origine: this.origine,
      price: this.price,
      color: this.color,
      usages: this.usages
    };

    this.onAddPlant.emit(newPlant);
    this.name = '';
    this.created = '';
    this.price = 0;
    this.color = '';
    this.origine = '';
    this.usages = [];
  }
}
