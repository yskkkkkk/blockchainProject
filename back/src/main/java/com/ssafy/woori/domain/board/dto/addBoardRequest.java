package com.ssafy.woori.domain.board.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class addBoardRequest {
    private int fundingSeq;
    private String boardTitle;
    private String boardContent;
}
