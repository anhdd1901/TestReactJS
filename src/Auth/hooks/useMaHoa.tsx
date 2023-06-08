import { useEffect, useState } from "react";
import { useAppDispatch } from "../../Redux/store";
import { MaHoa } from "../services/auth.slice";
import { dataRaw, inputData, onError } from "../services/auth.type";

const useMaHoa = () => {
  const dispatch = useAppDispatch();
  const [maHoaRes, setMaHoaRes] = useState<string>("");

  useEffect(() => {
    const onSuccess = (res: any) => {
      setMaHoaRes(res);
    };

    dispatch(MaHoa(inputData(dataRaw), onSuccess, onError));
  }, []);

  return { maHoaRes };
};

export default useMaHoa;
