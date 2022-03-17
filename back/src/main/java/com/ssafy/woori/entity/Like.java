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
@Table(name = "tb_like")
public class Like {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int likeSeq;
    @Column(nullable = false)
    private int userSeq;
    @Column(nullable = false)
    private int fundingSeq;
    @CreatedDate
    private LocalDate likeDate;
}
