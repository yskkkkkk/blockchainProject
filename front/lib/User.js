import  Send  from './Send';


export const getFollowing = (userSeq) => {
  let data = {
    "user_seq": userSeq,
  }

  Send.post('follow/followings', data)
    .then((data) =>{
      console.log(data);
      return data
    })
    .catch((e) => {
      console.log(e);
      return false
    });
}


export const follow = (userSeq, seller) => {
  let data = {
    "user_seq": userSeq,
    "seller": seller,
  }

  Send.post('follow', data)
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
    "user_seq": userSeq,
    "seller": seller,
  }

  Send.post('follow', data)
    .then((data) =>{
      console.log(data);
      return true
    })
    .catch((e) => {
      console.log(e);
      return false
    });
}