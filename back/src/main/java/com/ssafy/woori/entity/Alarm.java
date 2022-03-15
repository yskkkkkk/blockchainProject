package com.ssafy.woori.entity;

import javax.persistence.*;
import java.util.Date;

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
    @Temporal(TemporalType.DATE)
    private Date alarmDate;
    @Column(columnDefinition = "boolean default false")
    private boolean alarmIsRead;
    @Column(columnDefinition = "boolean default false")
    private boolean alarmIsActive;
}
