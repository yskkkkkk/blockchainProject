package com.ssafy.woori.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "tb_history")
public class History {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer historySeq;
    @Column
    private Integer userSeq;
    @Column
    private Integer fundingSeq;
    @Column
    private Integer optionSeq;
    @Column
    private Integer optionNum;
    @Column
    private Boolean done;
}
