package com.ssafy.woori.domain.reply.controller;

import com.ssafy.woori.domain.funding.controller.FundingController;
import com.ssafy.woori.domain.reply.dto.addReplyRequest;
import com.ssafy.woori.domain.reply.service.ReplyService;
import com.ssafy.woori.entity.Reply;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/funding/reply")
public class ReplyController {

    public static final Logger logger = LoggerFactory.getLogger(FundingController.class);
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @Autowired
    private ReplyService replyService;

    @PostMapping
    public ResponseEntity<Map<String, Object>>addFundingReply(@RequestBody addReplyRequest request) {
        logger.info("답변 추가 " +request);
        String message;
        HttpStatus status;

        Reply reply = replyService.addReply(request);
        Map<String, Object> response = new HashMap<>();

        if(reply != null){
            message = SUCCESS;
            response.put("result", reply);
            status = HttpStatus.OK;
        }
        else{
            message = FAIL;
            status = HttpStatus.NOT_FOUND;
        }
        response.put("message", message);

        return (new ResponseEntity<>(response, status));
    }
}
