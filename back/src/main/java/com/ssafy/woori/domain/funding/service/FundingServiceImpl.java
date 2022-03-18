package com.ssafy.woori.domain.funding.service;

import com.ssafy.woori.domain.funding.dao.FundingDao;
import com.ssafy.woori.domain.funding.dto.FundingListResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FundingServiceImpl implements FundingService{

    @Autowired
    FundingDao fundingDao;

    @Override
    public List<FundingListResponse> fundingHot() {

        return (fundingDao.findByEmailAdd());
    }
}
