package com.ssafy.woori.entity;

import javax.persistence.*;

@Entity
@Table(name = "tb_hot")
public class Hot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderSeq;
    @Column(nullable = false)
    private int fundingSeq;
}
