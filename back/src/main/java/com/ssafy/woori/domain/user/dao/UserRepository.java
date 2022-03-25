package com.ssafy.woori.domain.user.dao;

import com.ssafy.woori.domain.user.dto.AlarmInfoResponse;
import com.ssafy.woori.entity.Qna;
import com.ssafy.woori.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    @Query(value = "")
//    @Query(value = "select new map (q, r) from Qna q left join Reply r on q.qnaSeq = r.qnaSeq where q.fundingSeq = :fundingSeq")
    Optional<List<AlarmInfoResponse>> userAlarmList(int userSeq);

}
