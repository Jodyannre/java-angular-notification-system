import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from './services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {

  private notificationSubscription!: Subscription;
  
  constructor(private toastr: ToastrService, private notify: NotificationService){}

  showSuccess() {
    this.notify.sendNotification();
    this.toastr.success('Everything is working fine', 'Success');
  }

  ngOnInit(): void {
    this.notify.connect();
    this.notificationSubscription = this.notify
      .getNotifications()
      .subscribe((notification) => {
        // Acción en el componente al recibir una notificación
        console.log('Notificación recibida:', notification);
        this.toastr.info(notification.message, notification.title); // Lanzar toast
      });
  }





  ngOnDestroy(): void {
    this.notify.disconnect();
  }

  title = 'notification-system-client';
}
