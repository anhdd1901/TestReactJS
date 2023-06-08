import Api from "../../Providers/Api";
import { DataReqType, SignatureReqType } from "./auth.type";

export default class authAPI {
  static MaHoaAPI = async (data: DataReqType) => {
    return await Api.post(`/api/paymentgateway/merchant/encrypt`, data);
  };

  static TaoChuKyAPI = async (data: DataReqType) => {
    return await Api.post(`/api/paymentgateway/merchant/signature`, data);
  };

  static TaoDonHangAPI = async (data: SignatureReqType) => {
    return await Api.post(`/api/paymentgateway/merchant/create_order`, data);
  };

  static GiaiMaAPI = async (data: DataReqType) => {
    return await Api.post(`/api/paymentgateway/merchant/decrypt`, data);
  };
}
