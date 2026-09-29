export type InvoiceCategory = "HOSPIMAN_LICENSE" | "SMS_RECHARGE";
export type InvoiceStatus = "ON_TRANSACTION" | "PAID";

export interface InvoiceEntry {
  invoiceNo: string;
  date: string;
  category: InvoiceCategory;
  status: InvoiceStatus;
  remark: string;
  amount: string;
  quantity: number;
  description: string;
}

export const invoiceEntries: InvoiceEntry[] = [
  { invoiceNo: "1055", date: "August 13, 2026", category: "SMS_RECHARGE", status: "ON_TRANSACTION", remark: "SMS_RECHARGE", amount: "5,000", quantity: 1, description: "SMS_RECHARGE" },
  { invoiceNo: "1054", date: "August 12, 2026", category: "SMS_RECHARGE", status: "ON_TRANSACTION", remark: "SMS_RECHARGE", amount: "5,000", quantity: 1, description: "SMS_RECHARGE" },
  { invoiceNo: "1053", date: "August 12, 2026", category: "SMS_RECHARGE", status: "ON_TRANSACTION", remark: "SMS_RECHARGE", amount: "5,000", quantity: 1, description: "SMS_RECHARGE" },
  { invoiceNo: "1046", date: "November 23, 2023", category: "HOSPIMAN_LICENSE", status: "ON_TRANSACTION", remark: "HOSPIMAN_LICENSE", amount: "300,000", quantity: 1, description: "HOSPIMAN_LICENSE" },
  { invoiceNo: "1045", date: "November 23, 2023", category: "HOSPIMAN_LICENSE", status: "ON_TRANSACTION", remark: "HOSPIMAN_LICENSE", amount: "300,000", quantity: 1, description: "HOSPIMAN_LICENSE" },
  { invoiceNo: "1044", date: "November 23, 2023", category: "HOSPIMAN_LICENSE", status: "ON_TRANSACTION", remark: "HOSPIMAN_LICENSE", amount: "300,000", quantity: 1, description: "HOSPIMAN_LICENSE" },
  { invoiceNo: "1043", date: "November 23, 2023", category: "HOSPIMAN_LICENSE", status: "ON_TRANSACTION", remark: "HOSPIMAN_LICENSE", amount: "300,000", quantity: 1, description: "HOSPIMAN_LICENSE" },
  { invoiceNo: "1042", date: "November 23, 2023", category: "HOSPIMAN_LICENSE", status: "ON_TRANSACTION", remark: "HOSPIMAN_LICENSE", amount: "300,000", quantity: 1, description: "HOSPIMAN_LICENSE" },
  { invoiceNo: "1041", date: "November 23, 2023", category: "HOSPIMAN_LICENSE", status: "ON_TRANSACTION", remark: "HOSPIMAN_LICENSE", amount: "300,000", quantity: 1, description: "HOSPIMAN_LICENSE" },
  { invoiceNo: "1048", date: "November 23, 2023", category: "HOSPIMAN_LICENSE", status: "ON_TRANSACTION", remark: "HOSPIMAN_LICENSE", amount: "300,000", quantity: 1, description: "HOSPIMAN_LICENSE" },
  { invoiceNo: "1039", date: "November 25, 2022", category: "SMS_RECHARGE", status: "PAID", remark: "SMS_RECHARGE", amount: "5,000", quantity: 1, description: "SMS_RECHARGE" },
  { invoiceNo: "1038", date: "November 29, 2022", category: "SMS_RECHARGE", status: "ON_TRANSACTION", remark: "SMS_RECHARGE", amount: "5,000", quantity: 1, description: "SMS_RECHARGE" },
  { invoiceNo: "1035", date: "September 16, 2022", category: "SMS_RECHARGE", status: "ON_TRANSACTION", remark: "SMS_RECHARGE", amount: "5,000", quantity: 1, description: "SMS_RECHARGE" },
  { invoiceNo: "1036", date: "September 16, 2022", category: "HOSPIMAN_LICENSE", status: "ON_TRANSACTION", remark: "HOSPIMAN_LICENSE", amount: "240,000", quantity: 1, description: "HOSPIMAN_LICENSE" },
  { invoiceNo: "1034", date: "September 16, 2022", category: "HOSPIMAN_LICENSE", status: "ON_TRANSACTION", remark: "HOSPIMAN_LICENSE", amount: "240,000", quantity: 1, description: "HOSPIMAN_LICENSE" },
  { invoiceNo: "1031", date: "June 07, 2022", category: "HOSPIMAN_LICENSE", status: "ON_TRANSACTION", remark: "HOSPIMAN_LICENSE", amount: "130,000", quantity: 1, description: "HOSPIMAN_LICENSE" },
  { invoiceNo: "1028", date: "January 19, 2022", category: "HOSPIMAN_LICENSE", status: "ON_TRANSACTION", remark: "HOSPIMAN_LICENSE", amount: "240,000", quantity: 1, description: "HOSPIMAN_LICENSE" },
  { invoiceNo: "1025", date: "November 13, 2021", category: "HOSPIMAN_LICENSE", status: "ON_TRANSACTION", remark: "HOSPIMAN_LICENSE", amount: "130,000", quantity: 1, description: "HOSPIMAN_LICENSE" },
  { invoiceNo: "1016", date: "February 11, 2021", category: "SMS_RECHARGE", status: "ON_TRANSACTION", remark: "SMS_RECHARGE", amount: "5,000", quantity: 1, description: "SMS_RECHARGE" },
  { invoiceNo: "1013", date: "January 29, 2021", category: "SMS_RECHARGE", status: "ON_TRANSACTION", remark: "SMS_RECHARGE", amount: "5,000", quantity: 1, description: "SMS_RECHARGE" },
];
