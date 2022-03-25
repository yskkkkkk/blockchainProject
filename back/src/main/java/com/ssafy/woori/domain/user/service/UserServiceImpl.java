package com.ssafy.woori.domain.user.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.woori.domain.user.dao.UserRepository;
import com.ssafy.woori.domain.user.dto.AlarmInfoResponse;
import com.ssafy.woori.domain.user.dto.AuthorizationKakao;
import com.ssafy.woori.domain.user.dto.KakaoUserInfo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepository userRepository;
    
	private final Oauth2Kakao oauth2Kakao;

    // 카카오로 인증받기
    public KakaoUserInfo oauth2AuthorizationKakao(String code) {
        AuthorizationKakao authorization = oauth2Kakao.callTokenApi(code);
        return oauth2Kakao.callGetUserByAccessToken(authorization.getAccess_token());
    }

	@Override
	public List<AlarmInfoResponse> userAlarmList(int userSeq) {
		
		Optional<List<AlarmInfoResponse>> response = userRepository.userAlarmList(userSeq);
    	
		return response.orElse(null);
	}
}