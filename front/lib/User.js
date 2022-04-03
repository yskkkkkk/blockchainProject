import  Send  from './Send';


export const getFollowing = (userSeq) => {
  Send.get(`http://j6a305.p.ssafy.io:9999/follow/followings?userSeq=${userSeq}`)
    .then((data) =>{
      console.log(data);
      return data.data
    })
    .catch((e) => {
      console.log(e);
      return false
    });
}


export const follow = (userSeq, seller) => {
  let data = {
    "userSeq": userSeq,
    "seller": seller,
  }
  Send.post('http://j6a305.p.ssafy.io:9999/follow/', data)
    .then((data) =>{
      console.log(data);
      return true
    })
    .catch((e) => {
      console.log(e);
      return false
    });
}

export const unfollow = (userSeq, seller) => {
  let data = {
    "userSeq": userSeq,
    "seller": seller,
  }
  Send.delete('http://j6a305.p.ssafy.io:9999/follow/', data)
    .then((data) =>{
      console.log(data);
      return true
    })
    .catch((e) => {
      console.log(e);
      return false
    });
}