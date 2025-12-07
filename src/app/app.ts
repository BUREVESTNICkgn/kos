import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';
import { Habit, HabitPayload } from './model';
import { HabitService } from './habit.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatTableModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatDividerModule,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  habitForm = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    category: ['Коммуникации', [Validators.required, Validators.minLength(3)]],
    frequency: ['Ежедневно', Validators.required],
  });
  searchControl = this.fb.control('');
  editingHabit: Habit | null = null;
  habits: Habit[] = [];
  filteredHabits: Habit[] = [];
  displayedColumns = ['title', 'category', 'frequency', 'status', 'updated', 'actions'];

  private subscriptions = new Subscription();

  constructor(private fb: FormBuilder, private habitService: HabitService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.habitService.habits$.subscribe(habits => {
        this.habits = habits;
        this.applyFilter();
      })
    );

    this.subscriptions.add(
      this.searchControl.valueChanges.pipe(debounceTime(150)).subscribe(() => this.applyFilter())
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  saveHabit() {
    if (this.habitForm.invalid) {
      this.habitForm.markAllAsTouched();
      return;
    }

    const payload = this.habitForm.getRawValue() as HabitPayload;
    if (this.editingHabit) {
      this.habitService.updateHabit(this.editingHabit.id, payload);
    } else {
      this.habitService.addHabit(payload);
    }

    this.resetForm();
    this.applyFilter();
  }

  startEdit(habit: Habit) {
    this.editingHabit = habit;
    this.habitForm.patchValue({
      title: habit.title,
      description: habit.description,
      category: habit.category,
      frequency: habit.frequency,
    });
  }

  toggleCompletion(habit: Habit) {
    this.habitService.toggleCompletion(habit.id);
  }

  deleteHabit(habit: Habit) {
    this.habitService.deleteHabit(habit.id);
    if (this.editingHabit?.id === habit.id) {
      this.resetForm();
    }
    this.applyFilter();
  }

  resetForm() {
    this.editingHabit = null;
    this.habitForm.reset({
      title: '',
      description: '',
      category: 'Коммуникации',
      frequency: 'Ежедневно',
    });
  }

  resetToDefaults() {
    this.habitService.resetToDefaults();
    this.resetForm();
    this.applyFilter();
  }

  get completedCount(): number {
    return this.habits.filter(habit => habit.completed).length;
  }

  get activeCount(): number {
    return this.habits.filter(habit => !habit.completed).length;
  }

  get completionRate(): number {
    if (!this.habits.length) return 0;
    const completed = this.habits.filter(habit => habit.completed).length;
    return Math.round((completed / this.habits.length) * 100);
  }

  get emptyStateVisible(): boolean {
    return !this.filteredHabits.length && !!(this.searchControl.value?.trim() ?? '');
  }

  private applyFilter() {
    const term = (this.searchControl.value || '').toLowerCase().trim();
    this.filteredHabits = this.habits.filter(habit =>
      habit.title.toLowerCase().includes(term) ||
      habit.description.toLowerCase().includes(term) ||
      habit.category.toLowerCase().includes(term)
    );
  }
}
