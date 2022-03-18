package com.ssafy.woori.domain.funding.service;

import com.ssafy.woori.domain.funding.dto.FundingInfoResponse;
import com.ssafy.woori.domain.funding.dto.FundingListResponse;

import java.util.List;
import java.util.Optional;

public interface FundingService {
    List<FundingListResponse> fundingHot();
    Optional<FundingInfoResponse> fundingInfo(int fundingSeq);
}
