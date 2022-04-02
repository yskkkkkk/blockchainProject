package com.ssafy.woori.domain.funding.dao;

import com.ssafy.woori.domain.funding.dto.*;
import com.ssafy.woori.entity.Funding;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FundingRepository extends JpaRepository<Funding, Integer> {

    @Query(value = "select fundingSeq as fundingSeq, fundingImage as fundingImage, fundingTitle as fundingTitle, fundingSimple as fundingSimple " +
            "from Funding where fundingStatus not in (3, 4)")
    Optional<List<FundingListResponse>> findBaseList();

    @Query(value = "select fundingSeq as fundingSeq, fundingImage as fundingImage, fundingTitle as fundingTitle, fundingSimple as fundingSimple " +
            "from Funding where fundingStatus not in (3, 4)" +
            "order by fundingCreateDate desc ")
    Optional<List<FundingListResponse>> findNewList();

    @Query(value = "select f.fundingSeq as fundingSeq, f.fundingImage as fundingImage, f.fundingTitle as fundingTitle, f.fundingSimple as fundingSimple from Like l, Funding f " +
            "where l.fundingSeq = f.fundingSeq and f.fundingStatus not in (3,4) group by fundingSeq order by count(f.fundingSeq) desc")
    Optional<List<FundingListResponse>> findLikeList();

    Optional<FundingInfoResponse> findByFundingSeq(int fundingSeq);


    @Query(value = "select o.optionTitle as optionTitle, o.optionPrice as optionPrice, o.optionText as optionText, o.optionMaxamount as optionMaxamount from Option o where o.fundingSeq = :fundingSeq ")
    Optional<List<OptionListResponse>> findOptions(int fundingSeq);

    @Query(value = "select f.fundingTitle as fundingTitle, f.fundingImage as fundingImage, " +
            "f.fundingSimple as fundingSimple, f.userNickname as userNickname from Funding f where f.fundingSeq = :fundingSeq")
    Optional<GetTopValues> findTopValues(int fundingSeq);

}
