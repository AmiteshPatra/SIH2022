import React, { useEffect, useState } from "react";
import  QRCode  from "qrcode";
const QRCodeGenerator = ({ text }) => {
  const [src, setSrc] = useState("");
  useEffect(() => {
    QRCode.toDataURL("yaman").then((data) => {
      setSrc(data);
    });
  }, []);
  return (
    <div>
      <img src={src} />
    </div>
  );
};

export default QRCodeGenerator;
