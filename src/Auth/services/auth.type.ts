export const merchantCode = "ACVAA";

export interface DataReqType {
  merchantCode: string;
  data: string;
}

export interface SignatureReqType {
  merchantCode: string;
  data: string;
  signature: string;
}

export const onError = (api: string) => {
  console.log(`${api} loi`);
};

export const inputData = (data: string) => {
  return {
    merchantCode: merchantCode,
    data: data,
  };
};

export const inputSignatuteData = (data: string, signature: string) => {
  return {
    merchantCode: merchantCode,
    data: data,
    signature: signature,
  };
};

export const dataRaw = `{\r\n        \"messageType\":\"create_order\",\r\n        \"transId\":\"\",\r\n        \"timeRequest\":1680052260100,\r\n        \"merchantCode\":\"ACV\",\r\n        \"merchantPassword\":\"123456\",\r\n        \"orderCode\":\"16800522601111\",\r\n        \"billCode\":\"16800522600993\",\r\n        \"paymentType\":1,\r\n        \"totalAmount\":15000,\r\n        \"orderAmount\":15000,\r\n        \"feeAmount\":0,\r\n        \"orderDescription\":\"Thanh toán đơn hàng ACV số 1680052260099\",\r\n        \"currency\":\"JPY\",\r\n        \"returnUrl\":\"http://10.3.3.13:8888\",\r\n        \"cancelUrl\":\"http://localhost:5678\",\r\n        \"againUrl\":\"http://localhost:5678\",\r\n        \"timeLimit\":245,\r\n        \"customerFullName\":\"Nguyen van a\",\r\n        \"customerEmail\":\"\",\r\n        \"customerMobile\":\"\",\r\n        \"customerAddress\":\"Hà Nội\",\r\n        \"sessionId\":\"EPAY1680052260100\",\r\n        \"lockTime\":1680052260100,\r\n        \"lockInterval\":30,\r\n        \"businessType\":\"0000\",\r\n        \"totalGoods\":1,\r\n        \"detailInfo\":{\r\n        \"decisionNumber\":\"G33.01.23.010-983-20-168005226009\",\r\n        \"treasuryCode\":\"01701003\",\r\n        \"treasuryName\":\"KBNN Hoàn Kiếm - Hà Nội\",\r\n        \"decisionUnitId\":\"QQQQQY\",\r\n        \"organCode\":\"G33.01.23.000\",\r\n     
\"organName\":\"Phòng CSGT Công an TP Hà Nội\",\r\n        \"superiorOrganCode\":\"G33.01.00.000\",\r\n        \"superiorOrganName\":\"Công an thành phố Hà Nội\",\r\n        \"violationFullName\":\"DUYÊN TEST 2005 SỐ 2\",\r\n        \"driverLicenseNumber\":\"11221212121\",\r\n        \"violationPhoneNumber\":\"\",\r\n        \"idNumber\":\"0401030503\",\r\n        \"penaltyAmount\":10000,\r\n        \"violationBehavior\":\"Người điều khiển xe 
mô tô không có Giấy chứng nhận bảo hiểm trách nhiệm dân sự của chủ xe cơ giới còn hiệu lực\",\r\n        \"violationTime\":\"20200520\",\r\n        \"violationLocation\":\"Hà Nội\",\r\n        \"additionalForm\":\"Hình thức xử phạt bổ sung .\",\r\n        \"confiscationDLNStart\":\"20190505\",\r\n        \"confiscationDLNEnd\":\"20190505\",\r\n        \"decisionDate\":\"20210519\",\r\n        \"feeTypeCode\":\"981\",\r\n        \"feeName\":\"Phạt vi phạm giao thông\",\r\n        \"violator\":\"Đối tượng vi phạm\",\r\n        \"returnDLNUnit\":\"Đơn vị trả giấy tờ vi phạm\",\r\n        \"penalizeContent\":\"Xử phạt lỗi điều khiển xe theo TTXX\"\r\n        },\r\n      
\"payerInfo\":{\r\n        \"payerName\":\"Nguyễn Văn A\",\r\n        \"payerIdNumber\":\"083930231254\",\r\n        \"payerAddress\":\"HH4 Linh Đàm\",\r\n        \"payerDistrict\":\"Hoàng Mai\",\r\n        \"payerProvince\":\"Hà Nội\"\r\n        },\r\n        \"detailGoods\":[{\r\n        \"goodsCode\":\"EP00000\",\r\n        \"goodsName\":\"Sừng bò trứng muối \",\r\n        \"goodsQuantity\":1,\r\n        \"goodsPrice\":15000,\r\n        \"goodUrl\":\"https://tse1.mm.bing.net/th?id=OIP.M-rfIhzfq0WyJRPpTY3tIAHaHa&pid=Api&P=0&w=300&h=300\"\r\n        }]\r\n        }`;
