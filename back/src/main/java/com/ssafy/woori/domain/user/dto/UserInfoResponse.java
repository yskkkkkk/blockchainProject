package com.ssafy.woori.domain.user.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserInfoResponse {
	private int userSeq;
	private String userEmail;
	private LocalDate userBirth;
	private LocalDate userCreatedDate;
	private LocalDate userModifiedDate;
	private String userNickname;
	private String userWalletAddress;
	private String userPlatform;
	private String userImage;
	private String userPhone;
	private String userIntroduce;
	private String userCompany;

}
