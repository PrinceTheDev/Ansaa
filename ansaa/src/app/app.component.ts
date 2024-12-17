import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PermitComponent } from './permit/permit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PermitComponent,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ansaa';
}
