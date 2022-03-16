package com.ssafy.woori.domain.funding.service;

import com.ssafy.woori.domain.funding.dto.getHotListResponse;
import com.ssafy.woori.entity.Hot;

import java.util.List;

public interface HotService {
    List<Hot> findHotLists();
    Hot addHot(getHotListResponse value);
    void deleteHot();
}
