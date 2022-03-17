package com.ssafy.woori.domain.reply.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class addReplyRequest {
    private int qnaSeq;
    private String replyText;
}
