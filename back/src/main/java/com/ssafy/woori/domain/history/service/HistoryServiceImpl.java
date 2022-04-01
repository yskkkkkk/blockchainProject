package com.ssafy.woori.domain.history.service;

import com.ssafy.woori.domain.funding.dto.UserBuyListResponse;
import com.ssafy.woori.domain.history.repository.HistoryRepository;
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
}
