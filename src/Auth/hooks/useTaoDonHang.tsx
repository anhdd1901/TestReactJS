import { useEffect, useState } from "react";
import { useAppDispatch } from "../../Redux/store";
import { TaoDonHang } from "../services/auth.slice";
import { inputSignatuteData, onError } from "../services/auth.type";

const useTaoDonHang = (maHoa: string, chuKy: string) => {
  const dispatch = useAppDispatch();
  const [donHangRes, setDonHangRes] = useState<string>("");

  useEffect(() => {
    const onSuccess = (res: any) => {
      setDonHangRes(res);
    };

    if (maHoa && chuKy)
      dispatch(
        TaoDonHang(inputSignatuteData(maHoa, chuKy), onSuccess, onError)
      );
  }, [maHoa, chuKy]);

  return { donHangRes };
};

export default useTaoDonHang;
