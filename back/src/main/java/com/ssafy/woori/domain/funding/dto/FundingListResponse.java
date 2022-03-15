package com.ssafy.woori.domain.funding.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class FundingListResponse {
    private int fundingSeq;
    private String fundingImage;
    private String fundingTitle;
    private String fundingSimple;
}
