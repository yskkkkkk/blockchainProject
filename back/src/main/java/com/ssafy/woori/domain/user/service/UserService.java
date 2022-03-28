package com.ssafy.woori.domain.user.service;

import java.util.List;
import java.util.Optional;

import com.ssafy.woori.domain.user.dto.AlarmCreateRequest;
import com.ssafy.woori.domain.user.dto.AlarmInfoResponse;
import com.ssafy.woori.entity.Alarm;

public interface UserService {
	List<AlarmInfoResponse> userAlarmList(int userSeq);
	Alarm createAlarm(AlarmCreateRequest request);

}