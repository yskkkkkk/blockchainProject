package com.ssafy.woori.domain.history.repository;

import com.ssafy.woori.domain.funding.dto.UserBuyListResponse;
import com.ssafy.woori.entity.History;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface HistoryRepository extends JpaRepository<History,Integer> {
    @Query(value = "select f.fundingTitle as fundingTitle, f.fundingImage as fundingImage from History h, Funding f " +
            "where f.fundingSeq = h.fundingSeq and h.userSeq = :userSeq")
    Optional<List<UserBuyListResponse>> findByUserSeq(int userSeq);
}