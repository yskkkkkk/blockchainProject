package com.ssafy.woori.domain.delivery.service;

import com.ssafy.woori.domain.delivery.dao.DeliveryRepository;
import com.ssafy.woori.domain.delivery.dto.DeliveryRequest;
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
    public Optional<GetLocationResponse> getLocation(Integer locationSeq) {

        return (deliveryRepository.findByLocationSeq(locationSeq));
    }

    @Override
    public Delivery createDelivery(DeliveryRequest request) {
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

    @Override
    public boolean updateDelivery(DeliveryRequest request) {
        Optional<Delivery> delivery = deliveryRepository.findById(request.getLocationSeq());

        System.out.println(request.getLocationSeq());
        if(!delivery.isPresent()) return (false);

        delivery.ifPresent(one ->{
            deliveryRepository.save(
                    Delivery.builder()
                            .locationSeq(one.getLocationSeq())
                            .userSeq(one.getUserSeq())
                            .address(request.getAddress())
                            .addressDetail(request.getAddressDetail())
                            .userPhone(request.getUserPhone())
                            .zipCode(request.getZipCode())
                            .build()
            );
        });
        return (true);
    }
}
