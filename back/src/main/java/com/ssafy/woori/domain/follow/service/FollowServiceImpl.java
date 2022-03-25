package com.ssafy.woori.domain.follow.service;

import com.ssafy.woori.domain.follow.dao.FollowRepository;
import com.ssafy.woori.domain.follow.dto.GetFollowerList;
import com.ssafy.woori.domain.follow.dto.GetFollowingList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FollowServiceImpl implements FollowService{

    @Autowired
    FollowRepository followRepository;

    @Override
    public Optional<List<GetFollowingList>> followingList(int userSeq) {
        if(!followRepository.existsByUserSeq(userSeq)) return (Optional.empty());
        return (followRepository.findAllByUserSeq(userSeq));
    }

    @Override
    public Optional<List<GetFollowerList>> followerList(int seller) {
        if(!followRepository.existsBySeller(seller)) return (Optional.empty());
        return (followRepository.findAllBySeller(seller));
    }
}
