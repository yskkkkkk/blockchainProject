package com.ssafy.woori.domain.qna.service;

import com.ssafy.woori.domain.qna.dto.addQnaRequest;
import com.ssafy.woori.entity.Qna;

public interface QnaService {
    Qna addQna(addQnaRequest request);
    boolean deleteQna(int qnaSeq);
    boolean modifyQna(addQnaRequest request);
}
