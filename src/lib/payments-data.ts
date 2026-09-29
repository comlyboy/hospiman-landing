export interface PaymentEntry {
  date: string;
  amount: string;
  category: string;
  remark: string;
}

export const paymentEntries: PaymentEntry[] = [
  {
    date: "November 25, 2022",
    amount: "5,000",
    category: "SMS_RECHARGE",
    remark: "SMS_RECHARGE",
  },
];
