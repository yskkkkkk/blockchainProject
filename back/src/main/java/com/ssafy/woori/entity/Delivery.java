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
@Table(name = "tb_delivery_location")
public class Delivery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int locationSeq;
    @Column(nullable = false)
    private int userSeq;
    @Column
    private int orderSeq;
    @Column(length = 100)
    private String address;
    @Column(length = 100)
    private String addressDetail;
    @Column(length = 20)
    private String userPhone;
    @Column
    private int zipCode;
    @CreatedDate
    private LocalDate userDate;
}
