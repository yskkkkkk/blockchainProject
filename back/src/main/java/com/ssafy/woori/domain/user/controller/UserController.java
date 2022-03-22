package com.ssafy.woori.domain.user.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.woori.domain.user.dto.KakaoUserInfo;
import com.ssafy.woori.domain.user.service.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @GetMapping("/kakao")
    public ResponseEntity<String> oauth2AuthorizationKakao(@RequestParam String code) {
    	KakaoUserInfo user = userService.oauth2AuthorizationKakao(code);
    	log.info("userInfo"+user.getKakao_account().toString());
    	
    	return new ResponseEntity<String>(user.getId(), HttpStatus.OK);
    }
}