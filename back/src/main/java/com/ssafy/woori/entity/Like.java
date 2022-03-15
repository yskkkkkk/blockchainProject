package com.ssafy.woori.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tb_like")
public class Like {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int likeSeq;
    @Column(nullable = false)
    private int userSeq;
    @Column(nullable = false)
    private int fundingSeq;
    @Temporal(TemporalType.DATE)
    private Date likeDate;
}
