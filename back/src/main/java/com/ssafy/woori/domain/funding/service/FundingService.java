package com.ssafy.woori.domain.funding.service;

import com.ssafy.woori.domain.funding.dto.AddFundingRequest;
import com.ssafy.woori.domain.funding.dto.FundingInfoResponse;
import com.ssafy.woori.domain.funding.dto.FundingListResponse;
import com.ssafy.woori.domain.funding.dto.OptionListResponse;
import com.ssafy.woori.entity.Funding;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface FundingService {
    List<FundingListResponse> fundingHot();
    Optional<FundingInfoResponse> fundingInfo(int fundingSeq);
    Optional<List<OptionListResponse>> getOptions(int fundingSeq);
    Funding addFunding(AddFundingRequest request, MultipartFile[] file) throws IOException;
    boolean deleteFunding(int fundingSeq);
}
