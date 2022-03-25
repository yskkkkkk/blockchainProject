package com.ssafy.woori.domain.category.service;

import com.ssafy.woori.domain.category.dto.GetListResponse;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    Optional<List<GetListResponse>> getCategory();
}
