package com.ssafy.woori.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tb_board")
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int boardSeq;
    @Column(unique = true)
    private int fundingSeq;
    @Column(length = 100)
    private String boardTitle;
    @Column(length = 1024)
    private String boardContent;
    @Temporal(TemporalType.DATE)
    private Date boardCreatedDate;
    @Temporal(TemporalType.DATE)
    private Date boardModifiedDate;
}
