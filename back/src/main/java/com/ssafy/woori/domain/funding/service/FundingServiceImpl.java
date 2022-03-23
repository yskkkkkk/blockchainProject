package com.ssafy.woori.domain.funding.service;

import com.ssafy.woori.domain.funding.dao.FundingDao;
import com.ssafy.woori.domain.funding.dto.FundingInfoResponse;
import com.ssafy.woori.domain.funding.dto.FundingListResponse;
import com.ssafy.woori.domain.funding.dto.OptionListResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FundingServiceImpl implements FundingService{

    @Autowired
    FundingDao fundingDao;

    @Override
    public List<FundingListResponse> fundingHot() {

        return (fundingDao.findByEmailAdd());
    }

    @Override
    public Optional<FundingInfoResponse> fundingInfo(int fundingSeq) {

        Optional<FundingInfoResponse> response = fundingDao.findByFundingSeq(fundingSeq);

        //if(response.isPresent()) return (response);

//        Optional<Funding> funding = fundingDao.findById(fundingSeq);
//
//        FundingInfoResponse response;// = FundingInfoResponse.builder().build();
//
//        funding.ifPresent(selectFunding ->{
//
//        });
        return response;
    }

    @Override
    public Optional<List<OptionListResponse>> getOptions(int fundingSeq) {
        return fundingDao.findOptions(fundingSeq);
        //return Optional.empty();
    }
}
