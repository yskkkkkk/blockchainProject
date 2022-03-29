package com.ssafy.woori.domain.funding.service;

import com.ssafy.woori.domain.funding.dao.FundingRepository;
import com.ssafy.woori.domain.funding.dao.OptionRepository;
import com.ssafy.woori.domain.funding.dto.AddFundingRequest;
import com.ssafy.woori.domain.funding.dto.FundingInfoResponse;
import com.ssafy.woori.domain.funding.dto.FundingListResponse;
import com.ssafy.woori.domain.funding.dto.OptionListResponse;
import com.ssafy.woori.entity.Funding;
import com.ssafy.woori.entity.Option;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class FundingServiceImpl implements FundingService{

    @Autowired
    FundingRepository fundingRepository;

    @Autowired
    OptionRepository optionRepository;

    @Override
    public List<FundingListResponse> fundingHot() {

        return (fundingRepository.findByEmailAdd());
    }

    @Override
    public Optional<FundingInfoResponse> fundingInfo(int fundingSeq) {

        Optional<FundingInfoResponse> response = fundingRepository.findByFundingSeq(fundingSeq);

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
        return fundingRepository.findOptions(fundingSeq);
        //return Optional.empty();
    }

    @Override
    //@Transactional
    public Funding addFunding(AddFundingRequest request, MultipartFile file) {
        // 파일 추가하는것도 존재해야함
        String imgPath = "null";

        Funding funding = fundingRepository.save(
                Funding.builder()
                        .userSeq(request.getUserSeq())
                        .userNickname(request.getUserNickname())
                        .userPhone(request.getUserPhone())
                        .fundingTitle(request.getFundingTitle())
                        .fundingSimple(request.getFundingSimple())
                        .fundingCategory(request.getFundingCategory())
                        .fundingImage(imgPath)
                        .fundingText(request.getFundingText())
                        .fundingWarning(request.getFundingWarning())
                        .build()
        );

        for(int i = 0; i < request.getOption().length; i++){
            optionRepository.save(
                    Option.builder()
                            .fundingSeq(funding.getFundingSeq())
                            .optionTitle(request.getOption()[i].getOptionTitle())
                            .optionPrice(request.getOption()[i].getOptionPrice())
                            .optionText(request.getOption()[i].getOptionText())
                            .optionMaxamount(request.getOption()[i].getOptionMaxamount())
                            .optionOrder(1)
                            .build()
            );
        }

        return (funding);
    }
}
