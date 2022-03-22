package com.ssafy.woori.domain.user.service;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.woori.domain.user.dto.AuthorizationKakao;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class Oauth2Kakao {
    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    private final String kakaoRestAPIKey = "d0c28ab1ec869874fb6be4eaa9ff193a";
    private final String frontendRedirectUrl = "http://localhost:3000";

    // 인가코드로 accessToken 받기
    public AuthorizationKakao callTokenApi(String code) {
        String grantType = "authorization_code";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", grantType);
        params.add("client_id", kakaoRestAPIKey);
        params.add("redirect_uri", frontendRedirectUrl + "/test/loggedin");
        params.add("code", code);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(params, headers);

        String url = "https://kauth.kakao.com/oauth/token";
        try {
        	RestTemplate rt = new RestTemplate();

        	ResponseEntity<String> response = rt.exchange(
        	                url, 				//{요청할 서버 주소}
        	                HttpMethod.POST, 	//{요청할 방식}
        	                request, 			// {요청할 때 보낼 데이터}
        	                String.class 		//{요청시 반환되는 데이터 타입}
        	);
            AuthorizationKakao authorization = objectMapper.readValue(response.getBody(), AuthorizationKakao.class);
            
            return authorization;
        } catch (RestClientException | JsonProcessingException ex) {
            ex.printStackTrace();
            return null;
        }
    }


    /**
     * accessToken 을 이용한 유저정보 받기
     * @return
     */
    public String callGetUserByAccessToken(String accessToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + accessToken);
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(params, headers);

        String url = "https://kapi.kakao.com/v2/user/me";
        try {
            ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);

            // 값 리턴
            return response.getBody();
        }catch (RestClientException ex) {
            ex.printStackTrace();
            return null;
        }
    }
}