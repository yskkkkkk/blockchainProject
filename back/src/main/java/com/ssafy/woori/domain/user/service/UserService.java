package com.ssafy.woori.domain.user.service;

import java.util.List;
import java.util.Optional;

import com.ssafy.woori.domain.user.dto.AlarmInfoResponse;

public interface UserService {
	List<AlarmInfoResponse> userAlarmList(int userSeq);

}