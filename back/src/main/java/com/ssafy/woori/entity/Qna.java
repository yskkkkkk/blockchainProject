package com.ssafy.woori.entity;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "tb_qna")
public class Qna {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int qnaSeq;
    @Column
    private int fundingSeq;
    @Column
    private int userSeq;
    @Column(length = 1024)
    private String qnaText;
    @CreatedDate
    private LocalDate qnaCreatedDate;
    @LastModifiedDate
    private LocalDate qnaModifiedDate;
    @Column(nullable = false)
    private boolean secret;
}
