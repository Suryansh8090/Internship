import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets: any[] = [];

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.petService.getPets().subscribe(pets => {
      this.pets = pets;
    });
  }

  buyPet(petId: number) {
    // Navigate to the payment page or open a modal
    console.log('Buying pet with ID: ', petId);
  }
}
