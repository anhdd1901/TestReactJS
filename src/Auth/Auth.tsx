import React from "react";
import useMaHoa from "./hooks/useMaHoa";
import useTaoChuKy from "./hooks/useTaoChuKy";
import useTaoDonHang from "./hooks/useTaoDonHang";
import useGiaiMa from "./hooks/useGiaiMa";

const Auth = () => {
  const { maHoaRes } = useMaHoa();
  const { chuKy } = useTaoChuKy(maHoaRes);
  const { donHangRes } = useTaoDonHang(maHoaRes, chuKy);
  useGiaiMa(donHangRes);

  return <div>Test</div>;
};

export default React.memo(Auth);
