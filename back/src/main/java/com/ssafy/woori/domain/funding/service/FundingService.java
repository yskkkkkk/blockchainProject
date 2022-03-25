package com.ssafy.woori.domain.funding.service;

import com.ssafy.woori.domain.funding.dto.FundingInfoResponse;
import com.ssafy.woori.domain.funding.dto.FundingListResponse;
import com.ssafy.woori.domain.funding.dto.OptionListResponse;

import java.util.List;
import java.util.Optional;

public interface FundingService {
    List<FundingListResponse> fundingHot();
    Optional<FundingInfoResponse> fundingInfo(int fundingSeq);
    Optional<List<OptionListResponse>> getOptions(int fundingSeq);
}
