package com.ssafy.woori.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tb_qna")
public class Qna {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int qnaSeq;
    @Column(unique = true)
    private int fundingSeq;
    @Column(unique = true)
    private int userSeq;
    @Column(length = 1024)
    private String qnaText;
    @Temporal(TemporalType.DATE)
    private Date qnaCreatedDate;
    @Temporal(TemporalType.DATE)
    private Date qnaModifiedDate;
    @Column(nullable = false)
    private boolean qnaIspublic;
}
