package com.ssafy.woori.domain.funding.controller;

import com.ssafy.woori.domain.funding.dto.getHotListResponse;
import com.ssafy.woori.domain.funding.service.HotService;
import com.ssafy.woori.entity.Hot;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/hot")
public class HotController {
    @Autowired
    HotService hotService;

    //인기 게시글 리스트 반환
    @GetMapping("/lists")
    public ResponseEntity<List<Hot>> findHotList(){

        return (new ResponseEntity<>(hotService.findHotLists() , HttpStatus.OK));
    }
    //인기 게시글 추가
    @PostMapping("/lists")
    public ResponseEntity<Map<String, Object>>addHot(@RequestBody getHotListResponse value){

        Map<String, Object> response = new HashMap<>();
        Hot hot = hotService.addHot(value);

        if(hot != null){
            response.put("result", "SUCCESS");
            response.put("hot", hot);
        }
        else{
            response.put("result", "FAIL");
        }

        return (new ResponseEntity<>(response,HttpStatus.OK));
    }
    // 전체 인기 게시글 삭제
    @DeleteMapping("/lists")
    public ResponseEntity<Map<String, Object>>deleteHot() {
        Map<String, Object> response = new HashMap<>();
        hotService.deleteHot();
        return (new ResponseEntity<>(response,HttpStatus.OK));
    }
}
