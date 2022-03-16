package com.ssafy.woori.domain.funding.dao;

import com.ssafy.woori.entity.Hot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HotDao extends JpaRepository<Hot, Integer> {

   // List<Hot> findAll();
}
