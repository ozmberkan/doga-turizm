import React from "react";

const PaymentCreditCart = ({ cartName, cartCvc, cartLast, cartNo }) => {
  return (
    <div>
      <svg
        className="absolute inset-0"
        viewBox="0 0 160 100"
        preserveAspectRatio="none"
      >
        <circle cx="140" cy="-30" r="50" fill="rgba(255,255,255,0.1)" />
        <circle cx="40" cy="80" r="80" fill="rgba(255,255,255,0.08)" />
      </svg>
      <div className="absolute top-4 left-4 right-4 bottom-4 flex flex-col justify-between text-white">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">Kredi Kartı</span>
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
        </div>
        <div className="text-xl tracking-widest">
          {cartNo ? cartNo : "**** **** **** ****"}
        </div>
        <div className="flex justify-between items-end">
          <div className="text-sm">
            <div>Kart Sahibi</div>
            <div className="font-semibold">
              {cartName ? cartName : "AD SOYAD"}
            </div>
          </div>
          <div className="text-sm">
            <div>Son Kullanma / CVC</div>
            <div className="font-semibold">
              {cartLast ? cartLast : "AY"} - {cartCvc ? cartCvc : "CVC"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCreditCart;
