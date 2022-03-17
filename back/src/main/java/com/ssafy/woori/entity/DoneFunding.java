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
@Table(name = "tb_done_funding")
public class DoneFunding {
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
    @Column(nullable = false, length = 1024)
    private String fundingText;
    @Column(nullable = false, length = 100)
    private String fundingSimple;
    @Column
    private String fundingWarning;
    @Column
    private int fundingStatus;
    @Column
    private int fundingCheap;
    @Column
    private int raisedMoney;
    @Column
    private int targetMoney;
    @CreatedDate
    private LocalDate startDate;
    @CreatedDate
    private LocalDate deliveryDate;
    @CreatedDate
    private LocalDate endDate;
}
