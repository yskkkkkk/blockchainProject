package com.ssafy.woori.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "tb_hot")
public class Hot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderSeq;
    @Column(nullable = false)
    private int fundingSeq;
}
