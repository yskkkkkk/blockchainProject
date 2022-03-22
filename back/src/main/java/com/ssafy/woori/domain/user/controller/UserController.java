package com.ssafy.woori.domain.user.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.woori.domain.user.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @GetMapping("/kakao")
    public ResponseEntity<String> oauth2AuthorizationKakao(@RequestParam String code) {
        String userIdFromKakao = userService.oauth2AuthorizationKakao(code);
        return new ResponseEntity<String>(userIdFromKakao, HttpStatus.OK);
    }
}