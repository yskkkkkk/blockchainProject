package com.ssafy.woori.domain.qna.dao;

import com.ssafy.woori.domain.qna.dto.FundingQnaInfo;
import com.ssafy.woori.entity.Qna;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface QnaRepository extends JpaRepository<Qna, Integer> {
    @Query(value = "select q.qnaText as qnaText, q.qnaCreatedDate as qnaCreatedDate, q.secret as secret, (select u.userNickname from User u) as userNickname," +
            "(select r.replyCreatedDate from Reply r) as replyCreatedDate, (select r.replyText from Reply r where r.qnaSeq=q.userSeq) as replyText " +
            "from Qna q where q.fundingSeq = :fundingSeq")
    Optional<List<FundingQnaInfo>> findByFundingSeq(@Param("fundingSeq") Integer fundingSeq);
}
