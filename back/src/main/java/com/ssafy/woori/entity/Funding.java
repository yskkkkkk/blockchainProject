package com.ssafy.woori.entity;

import lombok.*;

import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
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
    @CreatedDate
    private LocalDate fundingCreateDate;
    @CreatedDate
    private LocalDate fundingModifyDate;
    
}
