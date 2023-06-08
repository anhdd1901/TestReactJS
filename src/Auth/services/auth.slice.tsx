import { createSlice } from "@reduxjs/toolkit";
import { DataReqType, SignatureReqType } from "./auth.type";
import authAPI from "./auth.api";

const initialState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;

export const MaHoa =
  (
    data: DataReqType,
    onSuccess: (res: any) => void,
    onError: (api: string) => void
  ) =>
  async () => {
    try {
      const res = await authAPI.MaHoaAPI(data);

      if (res) {
        onSuccess(res);
      } else {
        onError("Ma hoa");
      }
    } catch {
      onError("Ma hoa");
    }
  };

export const TaoChuKy =
  (
    data: DataReqType,
    onSuccess: (res: any) => void,
    onError: (api: string) => void
  ) =>
  async () => {
    try {
      const res = await authAPI.TaoChuKyAPI(data);

      if (res) {
        onSuccess(res);
      } else {
        onError("Tao chu ky");
      }
    } catch {
      onError("Tao chu ky");
    }
  };

export const TaoDonHang =
  (
    data: SignatureReqType,
    onSuccess: (res: any) => void,
    onError: (api: string) => void
  ) =>
  async () => {
    try {
      const res = await authAPI.TaoDonHangAPI(data);

      if (res) {
        onSuccess(res);
      } else {
        onError("Tao don hang");
      }
    } catch {
      onError("Tao don hang");
    }
  };

export const GiaiMa =
  (
    data: DataReqType,
    onSuccess: (res: any) => void,
    onError: (api: string) => void
  ) =>
  async () => {
    try {
      const res = await authAPI.GiaiMaAPI(data);

      if (res) {
        onSuccess(res);
      } else {
        onError("Giai ma");
      }
    } catch {
      onError("Giai ma");
    }
  };
