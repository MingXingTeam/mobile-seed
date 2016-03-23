//根据股票代码 获取市场代码
export function getMarketCode(stockCode){
    var marketCode = "";
    //stockCode = stockCode.substr(stockCode.length - 6,6);
    var heard = stockCode.substr(0,3);
    if(heard == "300"){
        marketCode = "hs";
    }else if(heard =="600" || heard == "601" || heard == "603" || "000"){
        marketCode = "hs";
    }else if(stockCode == "1A0001"){
        marketCode = "sh";
    }
    return marketCode + "_" +  stockCode;
}