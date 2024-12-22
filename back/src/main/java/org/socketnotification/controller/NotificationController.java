package org.socketnotification.controller;


import org.socketnotification.notification.Notification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class NotificationController {
    private SimpMessagingTemplate sipmMessageTemplate;

    @MessageMapping("/notification")
    @SendTo("/user/uno/notification")
    public Notification receiveNotification(Notification notification) {
        System.out.println(notification);
        return notification;
    }
}
