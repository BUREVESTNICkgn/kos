import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DEFAULT_HABITS, Habit, HabitPayload } from './model';

@Injectable({ providedIn: 'root' })
export class HabitService {
  private readonly storageKey = 'habit-tracker-data';
  private habitsSubject = new BehaviorSubject<Habit[]>(this.loadHabits());

  habits$ = this.habitsSubject.asObservable();

  addHabit(payload: HabitPayload) {
    const habits = [...this.habitsSubject.value];
    const habit: Habit = {
      ...payload,
      id: this.getNextId(habits),
      completed: false,
      lastUpdated: new Date().toISOString(),
    };
    this.updateHabits([...habits, habit]);
  }

  updateHabit(id: number, payload: HabitPayload & { completed?: boolean }) {
    const habits = this.habitsSubject.value.map(habit =>
      habit.id === id
        ? {
            ...habit,
            ...payload,
            completed: payload.completed ?? habit.completed,
            lastUpdated: new Date().toISOString(),
          }
        : habit
    );
    this.updateHabits(habits);
  }

  toggleCompletion(id: number) {
    const habits = this.habitsSubject.value.map(habit =>
      habit.id === id
        ? {
            ...habit,
            completed: !habit.completed,
            lastUpdated: new Date().toISOString(),
          }
        : habit
    );
    this.updateHabits(habits);
  }

  deleteHabit(id: number) {
    const habits = this.habitsSubject.value.filter(habit => habit.id !== id);
    this.updateHabits(habits);
  }

  resetToDefaults() {
    const snapshot = DEFAULT_HABITS.map(habit => ({ ...habit }));
    this.updateHabits(snapshot);
  }

  private getNextId(habits: Habit[]): number {
    return habits.length ? Math.max(...habits.map(habit => habit.id)) + 1 : 1;
  }

  private updateHabits(habits: Habit[]) {
    this.habitsSubject.next(habits);
    this.persist(habits);
  }

  private persist(habits: Habit[]) {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(this.storageKey, JSON.stringify(habits));
  }

  private loadHabits(): Habit[] {
    if (typeof localStorage === 'undefined') {
      return DEFAULT_HABITS.map(habit => ({ ...habit }));
    }

    const saved = localStorage.getItem(this.storageKey);
    if (!saved) {
      return DEFAULT_HABITS.map(habit => ({ ...habit }));
    }

    try {
      const parsed: Habit[] = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    } catch (error) {
      console.warn('Не удалось прочитать сохраненные привычки', error);
    }

    return DEFAULT_HABITS.map(habit => ({ ...habit }));
  }
}
