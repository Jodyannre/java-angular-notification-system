import { Injectable } from '@angular/core';
import SockJS from 'sockjs-client';
import {Stomp} from '@stomp/stompjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  socketClient: any;
  private notificationService: any;
  user: string = "uno"
  lastNotification: any;
  private notificationSubject = new Subject<any>();

  constructor() {
    let ws = new SockJS('http://localhost:8080/ws');
    this.socketClient = Stomp.over(ws);
   }

  connect() {
    this.socketClient.connect({}, () => {
      this.notificationService = this.socketClient.subscribe(`/user/uno/notification`, (payload:any) => 
        this.onMessageReceived(payload));
    });
  }

  onMessageReceived(payload:any) {
    const payloadData = JSON.parse(payload.body);
    console.log('message received: ' + JSON.stringify(payloadData));
    this.notificationSubject.next(payloadData);
  }

  sendNotification() {
    const notifcation = {
      status: 1,
      message: "Senting message from another user",
      title: "First notification"
    }
    this.socketClient.send("/app/notification",{}, JSON.stringify(notifcation));
  }

  getNotifications() {
    return this.notificationSubject.asObservable();
  }

  disconnect() {
    if (this.socketClient !== null) {
      this.socketClient.disconnect();
    }
  }


}
