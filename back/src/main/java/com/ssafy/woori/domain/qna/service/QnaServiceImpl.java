package com.ssafy.woori.domain.qna.service;

import com.ssafy.woori.domain.qna.dao.QnaRepository;
import com.ssafy.woori.domain.qna.dto.addQnaRequest;
import com.ssafy.woori.entity.Qna;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class QnaServiceImpl implements QnaService{

    @Autowired
    QnaRepository qnaRepository;

    @Override
    public Qna addQna(addQnaRequest request) {

        return (qnaRepository.save(
                Qna.builder()
                        .fundingSeq(request.getFundingSeq())
                        .userSeq(request.getUserSeq())
                        .qnaText(request.getQnaText())
//                        .isPublic(request.isPublic())
                        .secret(request.isSecret())
                        .qnaCreatedDate(LocalDate.now())
                        .qnaModifiedDate(LocalDate.now())
                        .build()));
    }
}
