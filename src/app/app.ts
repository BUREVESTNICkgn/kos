import { Component } from '@angular/core';
import { Model, Poet } from './model';
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
  selectedPoet: Poet | null = null;

  get filteredPoets(): Poet[] {
    const term = this.searchTerm.toLowerCase();
    return this.model.poets.filter(p =>
      p.fullname.toLowerCase().includes(term)
    );
  }

  selectPoet(poet: Poet) {
    this.selectedPoet = poet;
  }

  closeDetails() {
    this.selectedPoet = null;
  }
}
