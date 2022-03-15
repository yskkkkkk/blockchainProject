package com.ssafy.woori.entity;

import javax.persistence.*;

@Entity
@Table(name = "tb_category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int categorySeq;
    @Column(unique = true)
    private int categoryNumber;
    @Column(length = 20)
    private String categoryName;
    @Column
    private String categoryImage;
}
