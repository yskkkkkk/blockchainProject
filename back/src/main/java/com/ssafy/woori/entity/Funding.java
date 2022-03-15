package com.ssafy.woori.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tb_funding")
public class Funding {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int fundingSeq;
    @Column
    private String fundingImage;
    @Column(nullable = false)
    private int userSeq;
    @Column(nullable = false)
    private int fundingCategory;
    @Column(nullable = false, length = 100)
    private String fundingTitle;
    @Column(nullable = true, length = 1024)
    private String fundingText;
    @Column(nullable = false, length = 100)
    private String fundingSimple;
    @Column
    private String fundingWarning;
    @Column(columnDefinition = "int default 1")
    private int fundingStatus;
    @Column
    private int fundingCheap;
    @Temporal(TemporalType.DATE)
    private Date fundingCreateDate;
    @Temporal(TemporalType.DATE)
    private Date fundingModifyDate;
}
