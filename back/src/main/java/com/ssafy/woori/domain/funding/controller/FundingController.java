package com.ssafy.woori.domain.funding.controller;

import com.ssafy.woori.domain.funding.dto.FundingInfoResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.ssafy.woori.domain.funding.dto.FundingListRequest;
import com.ssafy.woori.domain.funding.dto.FundingListResponse;
import com.ssafy.woori.domain.funding.service.FundingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/funding")
public class FundingController {

    public static final Logger logger = LoggerFactory.getLogger(FundingController.class);
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @Autowired
    private FundingService fundingService;


    @PostMapping("/lists")
    public ResponseEntity<List<FundingListResponse>> fundingList(@RequestBody FundingListRequest request){
        logger.info("펀딩 리스트 조회" + request.getSort());
        String message = SUCCESS;
        HttpStatus status = null;

        List<FundingListResponse> output = new ArrayList<>();

        if(request.getSort() == 1){
            //output = fundingService.fundingHot();
            System.out.println(fundingService.fundingHot());
            status = HttpStatus.OK;
            return (new ResponseEntity<>(fundingService.fundingHot(),status));
        }
        else if(request.getSort() == 2){

        }
        else if(request.getSort() == 3){

        }
        else{

        }

        return (new ResponseEntity<>(output, status));
    }

    @GetMapping("/introduce")
    public ResponseEntity<Map<String,Object>>fundingInfo(@RequestParam int fundingSeq){
        logger.info("상품소개 가져오기 " + fundingSeq);
        String message = FAIL;
        HttpStatus status;

        Optional<FundingInfoResponse> dto = fundingService.fundingInfo(fundingSeq);
        Map<String, Object> response = new HashMap<>();

        if(dto.isPresent()){
            message = SUCCESS;
            response.put("data",dto);
            status = HttpStatus.OK;
        }
        else{
            status = HttpStatus.NOT_FOUND;
        }
        response.put("message", message);
        return (new ResponseEntity<>(response, status));
    }


}
