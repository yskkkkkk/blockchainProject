package com.ssafy.woori.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tb_qna_reply")
public class Reply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int replySeq;
    @Column(nullable = false)
    private int qnaSeq;
    @Column(length = 1024)
    private String replyText;
    @Temporal(TemporalType.DATE)
    private Date replyCreatedDate;
    @Temporal(TemporalType.DATE)
    private Date replyModifiedDate;
}
