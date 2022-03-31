import Router from "next/router";

export const isUser = () => {
  
  const token = localStorage.getItem("token");
    if (token) {
      const base64Payload = token.split(".")[1];
      const payload = Buffer.from(base64Payload, "base64");
      const result = JSON.parse(payload.toString());
      // 유저가 valid한지 검증 필요
      return true
    } else {
      console.log("로그인 필요");
      return false
    }
}

export const getFollowing = (userSeq) => {
  let data = {
    "userSeq": userSeq,
  }
  // 공지사항 제출 시 DB에 post 요청 보내고
  Send.post('follow/followings', data)
    .then((data) =>{
      console.log(data);
      return data
    })
    .catch((e) => {
      console.log(e);
    });
}

export const getUser = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const base64Payload = token.split(".")[1];
    const payload = Buffer.from(base64Payload, "base64");
    const result = JSON.parse(payload.toString());
    return result
  } else {
    return false
  }
}