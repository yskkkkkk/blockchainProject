package com.ssafy.woori.domain.board.controller;

import com.ssafy.woori.domain.board.dto.addBoardRequest;
import com.ssafy.woori.domain.board.service.BoardService;
import com.ssafy.woori.domain.funding.controller.FundingController;
import com.ssafy.woori.entity.Board;
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
@RequestMapping("/funding/board")
public class BoardController {

    public static final Logger logger = LoggerFactory.getLogger(FundingController.class);
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @Autowired
    private BoardService boardService;

    @PostMapping
    public ResponseEntity<Map<String, Object>>addFundingBoard(@RequestBody addBoardRequest request){
        logger.info("공지사항 추가 " +request.getBoardTitle());
        String message = SUCCESS;
        HttpStatus status = null;

        Board board = boardService.addBoard(request);
        Map<String, Object> response = new HashMap<>();

        System.out.println(board);
        if(board != null){
            response.put("message", "SUCCESS");
            response.put("result", board);
            status = HttpStatus.OK;
        }
        else{
            response.put("message", "FAIL");
            status = HttpStatus.NOT_FOUND;
        }

        return (new ResponseEntity<>(response, status));
    }
}
