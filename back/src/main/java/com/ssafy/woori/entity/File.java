package com.ssafy.woori.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tb_file")
public class File {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int fileSeq;
    @Column(nullable = false)
    private String file_name;
    @Column
    private Long fileSize;
    @Column(nullable = false)
    private String filePath;
    @Column
    private int fileType;
    @Column(nullable = false)
    private String relationTb;
    @Column(nullable = false)
    private int relationSeq;
    @Column(columnDefinition = "boolean default true")
    private boolean fileIsActive;
    @Temporal(TemporalType.DATE)
    private Date fileRegisteredDate;
    @Temporal(TemporalType.DATE)
    private Date fileModifiedDate;
}
