package com.ssafy.woori.domain.delivery.service;

import com.ssafy.woori.domain.delivery.dao.DeliveryRepository;
import com.ssafy.woori.domain.delivery.dto.CreateDeliveryRequest;
import com.ssafy.woori.domain.delivery.dto.GetLocationResponse;
import com.ssafy.woori.entity.Delivery;
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

    @Override
    public Delivery createDelivery(CreateDeliveryRequest request) {
        return (deliveryRepository.save(
                Delivery.builder()
                        .userSeq(request.getUserSeq())
                        .address(request.getAddress())
                        .addressDetail(request.getAddressDetail())
                        .userPhone(request.getUserPhone())
                        .zipCode(request.getZipCode())
                        .build()
        ));
    }
}
