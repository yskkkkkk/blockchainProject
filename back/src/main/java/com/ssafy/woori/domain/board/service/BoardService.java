package com.ssafy.woori.domain.board.service;

import com.ssafy.woori.domain.board.dto.addBoardRequest;
import com.ssafy.woori.entity.Board;

public interface BoardService {
    Board addBoard(addBoardRequest request);
}
