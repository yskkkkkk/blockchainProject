package com.ssafy.woori.domain.funding.dto;

import lombok.*;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class FundingTopResponse {
    private String fundingTitle;
    private String fundingImage;
    private String fundingSimple;
    private String userNickname;
    private List<GetOptionList> option;
}
