package com.ssafy.woori.domain.board.service;

import com.ssafy.woori.domain.board.dao.BoardRepository;
import com.ssafy.woori.domain.board.dto.addBoardRequest;
import com.ssafy.woori.entity.Board;
import org.apache.tomcat.jni.Local;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class BoardServiceImpl implements BoardService{

    @Autowired
    private BoardRepository boardRepository;

    @Override
    public Board addBoard(addBoardRequest request) {


        return boardRepository.save(
                Board.builder()
                .fundingSeq(request.getFundingSeq())
                .boardTitle(request.getBoardTitle())
                .boardContent(request.getBoardContent())
                .boardCreatedDate(LocalDate.now())
                .boardModifiedDate(LocalDate.now())
                .build());
    }
}
