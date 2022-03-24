package com.ssafy.woori.domain.qna.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class addQnaRequest {
    private Integer fundingSeq;
    private Integer userSeq;
    private String qnaText;
    private Boolean secret;
}
