package com.ssafy.woori.domain.funding.service;

import com.ssafy.woori.domain.funding.dto.FundingListResponse;
import com.ssafy.woori.entity.Hot;

import java.util.List;

public interface FundingService {
    List<FundingListResponse> fundingHot();
}
