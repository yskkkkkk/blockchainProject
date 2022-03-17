package com.ssafy.woori.domain.qna.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class addQnaRequest {
    private int fundingSeq;
    private int userSeq;
    private String qnaText;
//    @JsonProperty("isPublic")
//    private boolean isPublic;
    private boolean secret;
}
