import { useEffect, useState } from "react";
import { useAppDispatch } from "../../Redux/store";
import { TaoChuKy } from "../services/auth.slice";
import { inputData, onError } from "../services/auth.type";

const useTaoChuKy = (maHoa: string) => {
  const dispatch = useAppDispatch();
  const [chuKy, setChuKyRes] = useState<string>("");

  useEffect(() => {
    const onSuccess = (res: any) => {
      setChuKyRes(res);
    };

    if (maHoa) dispatch(TaoChuKy(inputData(maHoa), onSuccess, onError));
  }, [maHoa]);

  return { chuKy };
};

export default useTaoChuKy;
