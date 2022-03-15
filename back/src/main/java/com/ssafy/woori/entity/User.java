package com.ssafy.woori.entity;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tb_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userSeq;
    @Column(length = 100)
    private String userEmail;
    @Temporal(TemporalType.DATE)
    private Date userBirth;
    @Column(columnDefinition = "boolean default true")
    private boolean userIsActive;
    @Temporal(TemporalType.DATE)
    private Date userCreatedDate;
    @Temporal(TemporalType.DATE)
    private Date userModifiedDate;
    @Column(length = 20)
    private String userNickname;
    @Column(unique = true)
    private String userWalletAddress;
    @Column(length = 50)
    private String userPlatform;
    @Column
    private String userImage;
    @Column(length = 20)
    private String userPhone;
    @Column
    private String userIntroduce;
    @Column(length = 20)
    private String userCompany;
}
