package com.ssafy.woori.domain.funding.service;

import com.ssafy.woori.domain.funding.dao.HotDao;
import com.ssafy.woori.domain.funding.dto.getHotListResponse;
import com.ssafy.woori.entity.Hot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotServiceImpl implements HotService{

    @Autowired
    HotDao hotDao;

    @Override
    public List<Hot> findHotLists() {
        //return hotDao.findAll();
        return (hotDao.findAll());
    }

    @Override
    public Hot addHot(getHotListResponse value) {
        //hotDao.save(hot);
        Hot qwer = new Hot(value.getOrderSeq(), value.getFundingSeq());
        return hotDao.save(qwer);
    }

    @Override
    public void deleteHot() {
        hotDao.deleteAll();
    }
}
