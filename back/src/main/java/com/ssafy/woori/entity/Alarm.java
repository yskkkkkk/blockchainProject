package com.ssafy.woori.entity;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "tb_alarm")
public class Alarm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int alarmSeq;
    @Column(nullable = false)
    private int userSeq;
    @Column(nullable = true)
    private int fundingSeq;
    @Column
    private int alarmType;
    @Column
    private String alarmText;
    @CreatedDate
    private LocalDate alarmDate;
    @Column(columnDefinition = "boolean default false")
    private boolean alarmIsRead;
    @Column(columnDefinition = "boolean default false")
    private boolean alarmIsActive;
}
