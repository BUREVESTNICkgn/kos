import { Component } from '@angular/core';
import { Model, Cosmonaut } from './model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  model = new Model();
  searchTerm: string = '';
  selectedCosmonaut: Cosmonaut | null = null;

  get filteredCosmonauts(): Cosmonaut[] {
    const term = this.searchTerm.toLowerCase();
    return this.model.cosmonauts.filter(p =>
      p.fullname.toLowerCase().includes(term)
    );
  }

  selectCosmonaut(cosmonaut: Cosmonaut) {
    this.selectedCosmonaut = cosmonaut;
  }

  closeDetails() {
    this.selectedCosmonaut = null;
  }
}
