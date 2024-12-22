package org.socketnotification.sending;


import lombok.RequiredArgsConstructor;
import org.socketnotification.notification.Notification;
import org.socketnotification.notification.NotificationService;
import org.socketnotification.notification.NotificationStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SendNotification {

    private final NotificationService notificationService;

    public void Send() {
        notificationService.sendNotification(
                "receiver",
                Notification.builder()
                        .status(NotificationStatus.BORROWED)
                        .message("Notificación enviada")
                        .title("Título del mensaje")
                        .build()
        );
    }
}
