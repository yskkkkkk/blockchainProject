package com.ssafy.woori.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="tb_follow")
public class Follow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int followSeq;
    @Column(nullable = false)
    private int userSeq;
    @Column(nullable = false)
    private int seller;
    @Column(columnDefinition = "boolean default true")
    private boolean alarmIsAllow;
    @Temporal(TemporalType.DATE)
    private Date RequestDate;
}
