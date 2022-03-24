package com.ssafy.woori.domain.delivery.service;

import com.ssafy.woori.domain.delivery.dao.DeliveryRepository;
import com.ssafy.woori.domain.delivery.dto.GetLocationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DeliveryServiceImpl implements DeliveryService{

    @Autowired
    DeliveryRepository deliveryRepository;

    @Override
    public Optional<GetLocationResponse> getLocation(int locationSeq) {

        return (deliveryRepository.findByLocationSeq(locationSeq));
    }
}
