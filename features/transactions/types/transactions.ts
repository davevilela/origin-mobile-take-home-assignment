export type TransactionTypes = 'deposit' | 'invoice' | 'payment' | 'withdrawal';

export type Transaction = {
  Id: number;
  Amount: number;
  Date: Date;
  Vendor: string;
  Type: TransactionTypes;
  Category: string;
  Lat: number | null;
  Lon: number | null;
  ReceiptImage: string | null;
};

export type PaginatedRequestBody<T extends object = object> = {
  Page: number;
  PageSize: number;
  TotalRecords: number;
} & T;

export type TransactionPaginatedRequestBody = PaginatedRequestBody<{
  Transactions: Transaction[];
}>;
