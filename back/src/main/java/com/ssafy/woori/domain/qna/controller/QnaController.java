package com.ssafy.woori.domain.qna.controller;

import com.ssafy.woori.domain.funding.controller.FundingController;
import com.ssafy.woori.domain.qna.dto.addQnaRequest;
import com.ssafy.woori.domain.qna.service.QnaService;
import com.ssafy.woori.entity.Qna;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/funding/qna")
public class QnaController {

    public static final Logger logger = LoggerFactory.getLogger(FundingController.class);
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @Autowired
    private QnaService qnaService;

    @PostMapping
    public ResponseEntity<Map<String, Object>> addFundingBoard(@RequestBody addQnaRequest request){
        logger.info("질문 추가" +request.getUserSeq());
        String message;
        HttpStatus status;

        System.out.println("cont : " + request);

        Qna qna = qnaService.addQna(request);
        Map<String, Object> response = new HashMap<>();

        if(qna != null){
            message = SUCCESS;
            status = HttpStatus.OK;
            response.put("result", qna);
        }
        else{
            message = FAIL;
            status = HttpStatus.NOT_FOUND;
        }
        response.put("message", message);

        return (new ResponseEntity<>(response, status));
    }

    @PutMapping
    public ResponseEntity<String> modifyFundingQna(@RequestBody addQnaRequest request){
        logger.info("질문 수정" +request.getUserSeq());
        String message = FAIL;
        HttpStatus status;

        if(qnaService.modifyQna(request)){
            message = SUCCESS;
            status = HttpStatus.OK;
        }
        else {
            status = HttpStatus.NOT_FOUND;
        }
        return (new ResponseEntity<String>(message,status));
    }

    @DeleteMapping
    public ResponseEntity<String> deleteFundingQna(@RequestParam int qnaSeq){
        logger.info("질문 삭제 " + qnaSeq);
        String message = FAIL;
        HttpStatus status;

        if(qnaService.deleteQna(qnaSeq)){
            message = SUCCESS;
            status = HttpStatus.OK;
        }
        else status = HttpStatus.NOT_FOUND;

        return (new ResponseEntity<>(message,status));
    }


}
