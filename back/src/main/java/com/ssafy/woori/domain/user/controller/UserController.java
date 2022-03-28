package com.ssafy.woori.domain.user.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.woori.domain.user.dto.AlarmCreateRequest;
import com.ssafy.woori.domain.user.dto.AlarmInfoResponse;
import com.ssafy.woori.domain.user.dto.KakaoUserInfo;
import com.ssafy.woori.domain.user.dto.UserInfoResponse;
import com.ssafy.woori.domain.user.dto.UserUpdateRequest;
import com.ssafy.woori.domain.user.service.UserServiceImpl;
import com.ssafy.woori.entity.Alarm;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final UserServiceImpl userService;
    private final String SUCCESS = "success";
    private final String FAIL = "error";
    
    @GetMapping("/kakao")
    public ResponseEntity<String> oauth2AuthorizationKakao(@RequestParam String code) {
    	KakaoUserInfo user = userService.oauth2AuthorizationKakao(code);
    	log.info("userInfo"+user.getKakao_account().toString());
    	
    	return new ResponseEntity<String>(user.getId(), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<UserInfoResponse> userInfo(int userSeq){
    	UserInfoResponse response = new UserInfoResponse();
    	
    	return new ResponseEntity<UserInfoResponse>(response, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<String> updateUser(UserUpdateRequest request){
    	// 추가정보 입력 + 기존 정보 수정
    	
    	return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
    }
    
    @PutMapping("/profileImage")
    public ResponseEntity<String> updateUserProfileImage(UserUpdateRequest request){
    	// 파일입력받아서 수정
    	
    	return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
    }
    
    @DeleteMapping
    public ResponseEntity<String> deleteUser(int userSeq){
    	
    	return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
    }
    
    @PostMapping("/alarm")
    public ResponseEntity<Alarm> createAlarm(AlarmCreateRequest request){
    	
    	return new ResponseEntity<Alarm>(userService.createAlarm(request), HttpStatus.OK);
    }

    @GetMapping("/alarms")
    public ResponseEntity<List<AlarmInfoResponse>> userAlarmList(int userSeq){
    	List<AlarmInfoResponse> response = userService.userAlarmList(userSeq);
    	 
    	return new ResponseEntity<List<AlarmInfoResponse>>(response, HttpStatus.OK);
    }
    
    
}