import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Message } from '@fullstack-app/interfaces';

@Component({
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  hello$ = inject(HttpClient).get<Message>('/api');
}
