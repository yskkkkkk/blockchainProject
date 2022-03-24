package com.ssafy.woori.domain.delivery.service;

import com.ssafy.woori.domain.delivery.dto.GetLocationResponse;

import java.util.Optional;

public interface DeliveryService {
    Optional<GetLocationResponse> getLocation(int locationSeq);
}
