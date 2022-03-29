package com.ssafy.woori.domain.funding.dao;

import com.ssafy.woori.domain.funding.dto.FundingInfoResponse;
import com.ssafy.woori.domain.funding.dto.FundingListResponse;
import com.ssafy.woori.domain.funding.dto.OptionListResponse;
import com.ssafy.woori.entity.Funding;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FundingRepository extends JpaRepository<Funding, Integer> {

//    public List<Integer> find
//    @Query(value = "select funding_seq, funding_image, funding_title, funding_simple " +
//            "from tb_funding " +
//            "where funding_seq in "+
//            "(select funding_seq from tb_hot)", nativeQuery = true)
    @Query(value = "select fundingSeq, fundingImage, fundingTitle, fundingSimple " +
            "from Funding")
    List<FundingListResponse> findByEmailAdd();

    Optional<FundingInfoResponse> findByFundingSeq(int fundingSeq);


    @Query(value = "select o.optionTitle as optionTitle, o.optionPrice as optionPrice, o.optionText as optionText, o.optionMaxamount as optionMaxamount from Option o where o.fundingSeq = :fundingSeq ")
    Optional<List<OptionListResponse>> findOptions(int fundingSeq);
}
