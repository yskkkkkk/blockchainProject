package com.ssafy.woori.domain.follow.service;

import com.ssafy.woori.domain.follow.dto.GetFollowerList;

import java.util.List;
import java.util.Optional;

public interface FollowService {
    Optional<List<GetFollowerList>> followingList(int userSeq);
}
