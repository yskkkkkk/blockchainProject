package com.ssafy.woori.domain.follow.controller;

import com.ssafy.woori.domain.follow.dto.GetFollowerList;
import com.ssafy.woori.domain.follow.service.FollowService;
import com.ssafy.woori.domain.funding.controller.FundingController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/follow")
public class FollowController {

    public static final Logger logger = LoggerFactory.getLogger(FundingController.class);
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @Autowired
    FollowService followService;

    @GetMapping("/followings")
    public ResponseEntity<Map<String,Object>> followingList(@RequestParam int userSeq){
        logger.info("내가 팔로우한 리스트 가져오기 " + userSeq);
        String message = FAIL;
        HttpStatus status = null;

        Optional<List<GetFollowerList>> dto = followService.followingList(userSeq);
        Map<String, Object> response = new HashMap<>();

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

}
