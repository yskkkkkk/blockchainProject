package com.ssafy.woori.domain.delivery.dao;

import com.ssafy.woori.domain.delivery.dto.GetLocationResponse;
import com.ssafy.woori.entity.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DeliveryRepository extends JpaRepository<Delivery, Integer> {
    Optional<GetLocationResponse> findByLocationSeq(int locationSeq);
}
