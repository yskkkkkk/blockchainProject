package com.ssafy.woori.domain.user.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.woori.domain.user.dto.AlarmCreateRequest;
import com.ssafy.woori.domain.user.dto.AlarmInfoResponse;
import com.ssafy.woori.domain.user.dto.UserInfoResponse;
import com.ssafy.woori.domain.user.dto.UserProfileRequest;
import com.ssafy.woori.domain.user.dto.UserUpdateRequest;
import com.ssafy.woori.domain.user.service.UserServiceImpl;
import com.ssafy.woori.entity.Alarm;
import com.ssafy.woori.entity.User;

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
    
	@GetMapping("/login")
	public ResponseEntity<UserInfoResponse> postLoginProcessing() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		UserInfoResponse response = userService.getUserByUserKey(authentication.getName());
		
		log.info("login Success - user: " + response.getUserNickname());
    	return new ResponseEntity<UserInfoResponse>(response, HttpStatus.OK);
	}
	
    @GetMapping("/{userSeq}")
    public ResponseEntity<UserInfoResponse> userInfo(@PathVariable int userSeq){
    	UserInfoResponse response = userService.getUser(userSeq);
    	
    	return new ResponseEntity<UserInfoResponse>(response, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<User> updateUser(@RequestBody UserUpdateRequest request){
    	
    	return new ResponseEntity<User>(userService.updateUser(request), HttpStatus.OK);
    }
    
    @PutMapping("/profileImage/{userSeq}")
    public ResponseEntity<String> updateUserProfileImage(
    		@RequestPart(value="file", required = false) MultipartFile[] file,
    		@PathVariable int userSeq){
    	// 파일입력받아서 수정
    	UserProfileRequest request = UserProfileRequest.builder()
    			.userSeq(userSeq)
    			.myfile(file)
    			.build();
    	
    	String result = "";
    	if (userService.updateUserProfileImage(request)) {
    		result = SUCCESS;
    	}else{
    		result = FAIL;
    	}
    	return new ResponseEntity<String>(result, HttpStatus.OK);
    }
    
    @DeleteMapping("/{userSeq}")
    public ResponseEntity<String> deleteUser(@PathVariable int userSeq){
    	
    	return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
    }
    
    @PostMapping("/alarm")
    public ResponseEntity<Alarm> createAlarm(@RequestBody AlarmCreateRequest request){
    	
    	return new ResponseEntity<Alarm>(userService.createAlarm(request), HttpStatus.OK);
    }

    @GetMapping("/alarms/{userSeq}")
    public ResponseEntity<List<AlarmInfoResponse>> userAlarmList(@PathVariable int userSeq){
    	List<AlarmInfoResponse> response = userService.userAlarmList(userSeq);
    	 
    	return new ResponseEntity<List<AlarmInfoResponse>>(response, HttpStatus.OK);
    }
    
}