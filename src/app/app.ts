import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  concerts: any[] = [];

  currentView: string = 'home';

  isDarkMode: boolean = false;
  zoomLevel: number = 100;

  calendarDate: Date = new Date();
  weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  newConcert: any = {
    artist: '',
    tourName: '',
    city: '',
    country: '',
    date: '',
    ticketPrice: '',
    experience: ''
  };

  editingId: number | null = null;
  editConcertData: any = null;
  concertToDelete: any = null;
  emptyFormWarning: boolean = false;
  concertSavedMessage: boolean = false;
  selectedCalendarConcert: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const hashView = window.location.hash.replace('#', '');

    if (hashView) {
      this.currentView = hashView;
    }

    window.addEventListener('hashchange', () => {
      const newView = window.location.hash.replace('#', '');
      this.currentView = newView || 'home';
    });

    this.http.get<any[]>('http://localhost:3000/api/concerts')
      .subscribe(data => {
        console.log('Concert data:', data);
        this.concerts = data;
      });
  }

  setView(view: string): void {
    this.currentView = view;
    window.location.hash = view;
  }

  addConcert(): void {
    const hasInput =
      this.newConcert.artist ||
      this.newConcert.tourName ||
      this.newConcert.city ||
      this.newConcert.country ||
      this.newConcert.date ||
      this.newConcert.ticketPrice ||
      this.newConcert.experience;

    if (!hasInput) {
      this.emptyFormWarning = true;
      return;
    }

    this.http.post<any>('http://localhost:3000/api/concerts', this.newConcert)
      .subscribe(savedConcert => {
        this.concerts.push(savedConcert);
        this.resetNewConcert();
        this.concertSavedMessage = true;
        this.setView('concerts');
      });
  }

  closeEmptyFormWarning(): void {
    this.emptyFormWarning = false;
  }

  closeConcertSavedMessage(): void {
    this.concertSavedMessage = false;
  }

  resetNewConcert(): void {
    this.newConcert = {
      artist: '',
      tourName: '',
      city: '',
      country: '',
      date: '',
      ticketPrice: '',
      experience: ''
    };
  }

  editConcert(concert: any): void {
    this.editingId = concert.id;
    this.editConcertData = { ...concert };
  }

  updateConcert(): void {
    if (this.editingId === null) {
      return;
    }

    this.http.put<any>(`http://localhost:3000/api/concerts/${this.editingId}`, this.editConcertData)
      .subscribe(updatedConcert => {
        this.concerts = this.concerts.map(concert =>
          concert.id === this.editingId ? updatedConcert : concert
        );

        this.editingId = null;
        this.editConcertData = null;
      });
  }

  cancelEdit(): void {
    this.editingId = null;
    this.editConcertData = null;
  }

  deleteConcert(concert: any): void {
    this.concertToDelete = concert;
  }

  confirmDelete(): void {
    if (!this.concertToDelete) {
      return;
    }

    this.http.delete(`http://localhost:3000/api/concerts/${this.concertToDelete.id}`)
      .subscribe(() => {
        this.concerts = this.concerts.filter(concert => concert.id !== this.concertToDelete.id);
        this.concertToDelete = null;
      });
  }

  cancelDelete(): void {
    this.concertToDelete = null;
  }

  preventInvalidPriceKeys(event: KeyboardEvent): void {
    if (['e', 'E', '+', '-'].includes(event.key)) {
      event.preventDefault();
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  increaseZoom(): void {
    if (this.zoomLevel < 120) {
      this.zoomLevel += 10;
    }
  }

  decreaseZoom(): void {
    if (this.zoomLevel > 80) {
      this.zoomLevel -= 10;
    }
  }

  getCalendarMonthLabel(): string {
    return this.calendarDate.toLocaleString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  }

  previousMonth(): void {
    this.calendarDate = new Date(
      this.calendarDate.getFullYear(),
      this.calendarDate.getMonth() - 1,
      1
    );
  }

  nextMonth(): void {
    this.calendarDate = new Date(
      this.calendarDate.getFullYear(),
      this.calendarDate.getMonth() + 1,
      1
    );
  }

  getCalendarDays(): (Date | null)[] {
    const year = this.calendarDate.getFullYear();
    const month = this.calendarDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const days: (Date | null)[] = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  }

  getConcertsForDate(date: Date | null): any[] {
    if (!date) {
      return [];
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;

    return this.concerts.filter(concert => concert.date === dateString);
  }

openCalendarConcert(concert: any): void {
  this.selectedCalendarConcert = concert;
}

closeCalendarConcert(): void {
  this.selectedCalendarConcert = null;
}

}
