package com.ssafy.woori.domain.history.service;

import com.ssafy.woori.domain.funding.dto.UserBuyListResponse;
import com.ssafy.woori.domain.funding.repository.HistoryRepository;
import com.ssafy.woori.entity.History;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HistoryServiceImpl implements HistoryService{

    @Autowired
    HistoryRepository historyRepository;

    @Override
    public Optional<List<UserBuyListResponse>> userBuyList(int userSeq) {
        return (historyRepository.findByUserSeq(userSeq));
    }

    @Override
    public Optional<List<UserBuyListResponse>> getBuyerList(int fundingSeq) {
        return (historyRepository.getBuyerList(fundingSeq));
    }

    @Override
    public boolean changeHistory(int historySeq) {
        Optional<History> history = historyRepository.findById(historySeq);

        if(!history.isPresent()) return (false);

        history.ifPresent(selectHistory ->{
           historyRepository.save(
                   History.builder()
                           .historySeq(historySeq)
                           .fundingSeq(selectHistory.getFundingSeq())
                           .optionNum(selectHistory.getOptionNum())
                           .optionSeq(selectHistory.getOptionSeq())
                           .state(3)
                           .userSeq(selectHistory.getUserSeq())
                           .seller(selectHistory.getSeller())
                           .build()
           );
        });
        return (true);
    }
}
