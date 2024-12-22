package org.socketnotification.notification;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class Notification {
    private NotificationStatus status;
    private String message;
    private String title;
}
