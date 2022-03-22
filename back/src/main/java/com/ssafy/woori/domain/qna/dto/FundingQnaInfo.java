package com.ssafy.woori.domain.qna.dto;

import lombok.*;

import java.time.LocalDate;

//public interface FundingQnaInfo {
//    //String getUserNickname();
//    String getQnaText();
//    LocalDate getQnaCreatedDate();
//    String getReplyText();
//    LocalDate getReplyCreatedDate();
//    boolean isSecret();
//}
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class FundingQnaInfo{
    private String userNickname;
    private String qnaText;
    private LocalDate qnaCreatedDate;
    private String replyText;
    private LocalDate replyCreatedDate;
    private boolean secret;
}
