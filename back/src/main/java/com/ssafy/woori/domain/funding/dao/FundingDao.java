package com.ssafy.woori.domain.funding.dao;

import com.ssafy.woori.domain.funding.dto.FundingListResponse;
import com.ssafy.woori.entity.Funding;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FundingDao extends JpaRepository<Funding, Integer> {

    @Query(value = "select fundingSeq, fundingImage, fundingTitle, fundingSimple " +
            "from Funding" +
            "where fundingSeq join "+
            "(select fundingSeq from Hot)", nativeQuery = true)
    public List<FundingListResponse> findByEmailAdd();
}
