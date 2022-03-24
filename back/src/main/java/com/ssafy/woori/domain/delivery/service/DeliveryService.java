package com.ssafy.woori.domain.delivery.service;

import com.ssafy.woori.domain.delivery.dto.CreateDeliveryRequest;
import com.ssafy.woori.domain.delivery.dto.GetLocationResponse;
import com.ssafy.woori.entity.Delivery;

import java.util.Optional;

public interface DeliveryService {
    Optional<GetLocationResponse> getLocation(int locationSeq);
    Delivery createDelivery(CreateDeliveryRequest request);
}
