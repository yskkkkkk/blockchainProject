// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.8.0;


contract FundRaising {
    uint public constant MINIMUM_AMOUNT = 1e16; // 최소 펀딩 금액
    uint public maturity; // 펀딩 완료 시점
    address public beneficiary; // 모금자
    uint[] options; // 옵션 가격들 모음
    
    mapping(address => uint256) funderToAmount; // 각 사람들이 얼마나 펀딩했는지 저장
    address[] funders; // 펀딩한 사람들의 목록

    
    constructor (uint _maturity, address _beneficiary, uint[] memory _options) {
        // _maturity: 만기, _beneficiary: 펀딩 모금자, _options: 옵션 가격 배열
        maturity = _maturity;
        beneficiary = _beneficiary;
        options = _options;
    }
    
    function fund(uint option_number) public payable {
        require(msg.value >= options[option_number], "MINIMUM_AMOUNT: 0.01 ether");
        require(block.timestamp < maturity, "Fund Raising Over"); 
      
        addFunder(msg.sender); // 펀딩한 사람을 목록에 추가
        funderToAmount[msg.sender] += msg.value;
    }
    

    function addFunder(address _funder) internal {
        if(funderToAmount[_funder] == 0 ) {
            funders.push(_funder);
        }
    }

    function currentCollection() public view returns(uint256) {
        if(address(this) == address(0)) return 0;
        return address(this).balance;      
    }
    
    modifier onlyBeneficiary() {
        require(msg.sender == beneficiary, "NOT BENEFICIARY ADDRESS");
        _;
    } // 모금자가 아니면 정산을 못 받게

    modifier onlyAfterFundCloses {
        require(block.timestamp > maturity, "FUND NOT CLOSES YET");
        _;
    } // 펀딩 기간이 끝나야 정산을 받을 수 있도록

    function withdraw() public payable
    onlyBeneficiary
    onlyAfterFundCloses {
    //   require(msg.sender == beneficiary);
    //   require(block.timestamp > maturity);
        msg.sender.transfer(address(this).balance); 
    }
    

}