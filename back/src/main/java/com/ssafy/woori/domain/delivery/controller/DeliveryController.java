package com.ssafy.woori.domain.delivery.controller;

import com.ssafy.woori.domain.delivery.dto.DeliveryRequest;
import com.ssafy.woori.domain.delivery.dto.GetLocationResponse;
import com.ssafy.woori.domain.delivery.service.DeliveryService;
import com.ssafy.woori.domain.funding.controller.FundingController;
import com.ssafy.woori.entity.Delivery;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/delivery")
public class DeliveryController {

    public static final Logger logger = LoggerFactory.getLogger(FundingController.class);
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @Autowired
    DeliveryService deliveryService;

    @GetMapping
    public ResponseEntity<Map<String, Object>> getLocation(@RequestParam int locationSeq){
        logger.info("배송지 정보 가져오기 " + locationSeq);
        String message = FAIL;
        HttpStatus status = null;

        Optional<GetLocationResponse> dto = deliveryService.getLocation(locationSeq);
        Map<String,Object> response = new HashMap<>();

        if(dto.isPresent()){
            message = SUCCESS;
            status = HttpStatus.OK;
            response.put("data", dto);
        }
        else{
            status = HttpStatus.NOT_FOUND;
        }
        response.put("message", message);
        return (new ResponseEntity<>(response, status));
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> createDelivery(@RequestBody DeliveryRequest request){
        logger.info("배송지 추가 " +request.getUserSeq());
        String message = FAIL;
        HttpStatus status;

        Delivery delivery = deliveryService.createDelivery(request);
        Map<String, Object> response = new HashMap<>();

        if(delivery != null){
            message = SUCCESS;
            status = HttpStatus.OK;
            response.put("data", delivery);
        }
        else{
            status = HttpStatus.NOT_FOUND;
        }
        response.put("message", message);
        return (new ResponseEntity<>(response, status));
    }

    @PutMapping
    public ResponseEntity<String> updateDelivery(@RequestBody DeliveryRequest request){
        logger.info("배송지 수정 " +request.getLocationSeq());
        String message = FAIL;
        HttpStatus status;

        if(deliveryService.updateDelivery(request)){
            message = SUCCESS;
            status = HttpStatus.OK;
        }
        else{
            status = HttpStatus.NOT_FOUND;
        }
        return (new ResponseEntity<>(message, status));
    }

    @PutMapping("/date/{locationSeq}")
    public ResponseEntity<String> setLastUsedDate(@PathVariable int locationSeq){
        logger.info("배송지 날짜 기록 " + locationSeq);
        String message = FAIL;
        HttpStatus status;

        if(deliveryService.setLastUsedDate(locationSeq)){
            message = SUCCESS;
            status = HttpStatus.OK;
        }
        else{
            status = HttpStatus.NOT_FOUND;
        }

        return (new ResponseEntity<>(message, status));
    }

}
