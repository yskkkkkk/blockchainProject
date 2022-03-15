package com.ssafy.woori.entity;

import javax.persistence.*;

@Entity
@Table(name = "tb_option")
public class Option {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int optionSeq;
    @Column(nullable = false)
    private int fundingSeq;
    @Column
    private int optionOrder;
    @Column(length = 100)
    private String optionTitle;
    @Column
    private int optionPrice;
    @Column
    private String optionText;
    @Column
    private int optionMaxamount;
    @Column(unique = true)
    private String optionContract;
    @Column
    private boolean optionIsmain;
}
