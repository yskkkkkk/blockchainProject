package com.ssafy.woori.domain.funding.dao;

import com.ssafy.woori.domain.funding.dto.FundingListResponse;
import com.ssafy.woori.entity.Funding;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@Repository
public interface FundingDao extends JpaRepository<Funding, Integer> {

//    public List<Integer> find
//    @Query(value = "select funding_seq, funding_image, funding_title, funding_simple " +
//            "from tb_funding " +
//            "where funding_seq in "+
//            "(select funding_seq from tb_hot)", nativeQuery = true)
    @Query(value = "select fundingSeq, fundingImage, fundingTitle, fundingSimple " +
            "from Funding")
    public List<FundingListResponse> findByEmailAdd();
}
