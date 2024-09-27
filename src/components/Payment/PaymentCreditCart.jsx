import smLogo from "~/assets/logos/smlogo.png";

const PaymentCreditCart = () => {
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
          <img src={smLogo} className="w-6" />
        </div>
        <div className="text-xl tracking-widest">**** **** **** ****</div>
        <div className="flex justify-between items-end">
          <div className="text-sm">
            <div>Kart Sahibi</div>
            <div className="font-semibold">AD SOYAD</div>
          </div>
          <div className="text-sm">
            <div>Son Kullanma / CVC</div>
            <div className="font-semibold">AY - CVC</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCreditCart;
