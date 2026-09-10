import { Component, OnInit } from '@angular/core';
import { HabitScrolling } from '../services/habit-scrolling';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [ScrollingModule, CommonModule],
  templateUrl: './report.html',
  styleUrl: './report.scss',
})
export class Report implements OnInit {
  csvData: any[] = [];
  columns: string[] = [];
  requiredColumns = ['respondent_id', 'age', 'bedtime_screen_time_minutes', 'doomscroll_sessions_per_night', 'stress_score', 'anxiety_score', 'gender'];

  constructor(private hs: HabitScrolling) {}
  ngOnInit() {
    this.hs.getCSVdata().subscribe({
      next: (res: any[]) => {
        this.csvData = res;
        console.log(this.csvData, 'CSV data received');
        if (this.csvData.length > 0) {
          this.columns = Object.keys(this.csvData[0]);
          console.log('Columns-1', this.columns);
          this.columns = this.columns.filter((col) => this.requiredColumns.includes(col));
          console.log('Columns-2', this.columns);
        }
      },
      error: (error: any) => {
        console.error('Error fetching CSV data:', error);
      }
    });
  }
}
