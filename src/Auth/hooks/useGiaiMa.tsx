import { useEffect } from "react";
import { useAppDispatch } from "../../Redux/store";
import { TaoChuKy } from "../services/auth.slice";
import { inputData, onError } from "../services/auth.type";

const useGiaiMa = (donHang: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const onSuccess = (res: any) => {
      console.log(res);
    };

    if (donHang) dispatch(TaoChuKy(inputData(donHang), onSuccess, onError));
  }, [donHang]);

  return {};
};

export default useGiaiMa;
