package com.ssafy.woori.entity;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
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
    
    @ManyToOne
    @JoinColumn(name = "fundingSeq", insertable=false, updatable=false)
    private Funding funding;
    
}
