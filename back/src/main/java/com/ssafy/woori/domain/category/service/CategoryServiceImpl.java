package com.ssafy.woori.domain.category.service;

import com.ssafy.woori.domain.category.dao.CategoryRepository;
import com.ssafy.woori.domain.category.dto.GetListResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public Optional<List<GetListResponse>> getCategory() {
        return categoryRepository.findAllBy();
    }
}
