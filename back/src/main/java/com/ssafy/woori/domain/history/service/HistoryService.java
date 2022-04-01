package com.ssafy.woori.domain.history.service;

import com.ssafy.woori.domain.funding.dto.UserBuyListResponse;

import java.util.List;
import java.util.Optional;

public interface HistoryService {
    Optional<List<UserBuyListResponse>> userBuyList(int userSeq);
}
