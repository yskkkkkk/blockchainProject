package com.ssafy.woori.domain.follow.service;

import com.ssafy.woori.domain.follow.dao.FollowRepository;
import com.ssafy.woori.domain.follow.dto.GetFollowerList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FollowServiceImpl implements FollowService{

    @Autowired
    FollowRepository followRepository;

    @Override
    public Optional<List<GetFollowerList>> followingList(int userSeq) {

        return (followRepository.findAllByUserSeq(userSeq));
    }
}
