import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private toastr: ToastrService){}

  showSuccess() {
    this.toastr.success('Everything is working fine', 'Success');
  }


 

  title = 'notification-system-client';
}
