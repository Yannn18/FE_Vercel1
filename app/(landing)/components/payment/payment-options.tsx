import { FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";
const paymentList = [
  {
    bank_name: "BCA",
    account_number: 123190391,
    account_holder: "PT SportOn Digital",
  },
  {
    bank_name: "BNI",
    account_number: 244444,
    account_holder: "PT SportOn Digital",
  },
  {
    bank_name: "MANDIRI",
    account_number: 1349999,
    account_holder: "PT SportOn Digital",
  },
];
const PaymentOptions = () => {
  return (
    <CardWithHeader title="Payment Options">
      {paymentList.map((paymentList, index) => (
        <div className="flex gap-5 p-5 border-b border-gray-200"key={index}>
            <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center">
                <FiCreditCard size={24} />
            </div>
            <div className="self-center">
                <div className="font-bold">{paymentList.bank_name}</div>
                <div className="text-sm">{paymentList.account_number}</div>
                <div className="text-sm opacity-70">{paymentList.account_holder}</div>
            </div>
            <div className="ml-auto bg-blue-50 text-gray-800 text-xs h-fit self-center px-2 py-1">Bank Transfer</div>
        </div>
      ))}
    </CardWithHeader>
  );
};
export default PaymentOptions;
