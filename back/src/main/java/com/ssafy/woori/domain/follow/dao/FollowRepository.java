package com.ssafy.woori.domain.follow.dao;

import com.ssafy.woori.domain.follow.dto.GetFollowerList;
import com.ssafy.woori.domain.follow.dto.GetFollowingList;
import com.ssafy.woori.entity.Follow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FollowRepository extends JpaRepository<Follow, Integer> {
    Optional<List<GetFollowingList>> findAllByUserSeq(int userSeq);
    boolean existsByUserSeq(int userSeq);
    Optional<List<GetFollowerList>> findAllBySeller(int seller);
    boolean existsBySeller(int seller);
    boolean existsByUserSeqAndSeller(int userSeq, int seller);
    void deleteByUserSeqAndSeller(int userSeq, int seller);
}
