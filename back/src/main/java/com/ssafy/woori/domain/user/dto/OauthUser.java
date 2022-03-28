package com.ssafy.woori.domain.user.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Builder
@ToString
public class OauthUser{

	private String platform;
	private String key;
	private String name;
	private String email;
	
}
