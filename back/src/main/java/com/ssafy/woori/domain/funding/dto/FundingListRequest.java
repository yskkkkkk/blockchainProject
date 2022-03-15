package com.ssafy.woori.domain.funding.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.lang.Nullable;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class FundingListRequest {
    private int sort;
    @Nullable
    private int userSeq;
}
