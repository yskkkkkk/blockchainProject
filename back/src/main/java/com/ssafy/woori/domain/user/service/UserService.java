package com.ssafy.woori.domain.user.service;

import org.springframework.stereotype.Service;

import com.ssafy.woori.domain.user.dto.AuthorizationKakao;
import com.ssafy.woori.domain.user.dto.KakaoUserInfo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final Oauth2Kakao oauth2Kakao;

    // 카카오로 인증받기
    public KakaoUserInfo oauth2AuthorizationKakao(String code) {
        AuthorizationKakao authorization = oauth2Kakao.callTokenApi(code);
        return oauth2Kakao.callGetUserByAccessToken(authorization.getAccess_token());
    }
}