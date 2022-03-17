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
    @CreatedDate
    private LocalDate fileRegisteredDate;
    @CreatedDate
    private LocalDate fileModifiedDate;
}
