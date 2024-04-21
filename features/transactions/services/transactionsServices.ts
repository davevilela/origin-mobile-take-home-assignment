/* eslint-disable @typescript-eslint/no-redeclare */

import { z } from 'zod';

import { Transaction, TransactionPaginatedRequestBody } from '../types/transactions';

import { Config } from '~/lib/config';

// Utility functions
const apiUrl = (path: string) => `${Config.baseApiUrl}/${path}`;
const toJson = (response: Response) => response.json();
const handleResponse = (response: Response) => {
  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }
  return response;
};

// API Resources
const resources = {
  transactions: apiUrl('transactions'),
};

// Schema Definitions and Types
const FetchTransactionsParams = z.object({
  page: z.number().min(1),
  pageSize: z.number().min(1).max(500),
});
export type FetchTransactionsParams = z.infer<typeof FetchTransactionsParams>;

const UpdateTransactionCoordinatesParams = z.object({
  Lat: z.number(),
  Lon: z.number(),
  id: z.number().or(z.string()),
});
export type UpdateTransactionCoordinatesParams = z.infer<typeof UpdateTransactionCoordinatesParams>;

const UpdateTransactionReceiptParams = z.object({
  ReceiptImageUrl: z.string().url(),
  id: z.number().or(z.string()),
});
export type UpdateTransactionReceiptParams = z.infer<typeof UpdateTransactionReceiptParams>;

// API Functions
async function fetchTransactions(params: FetchTransactionsParams) {
  FetchTransactionsParams.parse(params);
  // @ts-ignore
  const searchParams = new URLSearchParams(Object.entries(params));
  const url = new URL(resources.transactions);
  url.search = searchParams.toString();

  return fetch(url.toString())
    .then(handleResponse)
    .then(toJson) as Promise<TransactionPaginatedRequestBody>;
}

async function fetchTransaction(id: string | number) {
  const url = new URL(`${resources.transactions}/${id}`);
  return fetch(url.toString()).then(handleResponse).then(toJson) as Promise<Transaction>;
}

async function updateTransactionCoordinates(params: UpdateTransactionCoordinatesParams) {
  const { id, ...bodyParams } = params;
  const url = new URL(`${resources.transactions}/${id}/coordinates`);

  return fetch(url.toString(), {
    method: 'POST',
    body: JSON.stringify(bodyParams),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(handleResponse)
    .then((res) => res.status >= 200 && res.status < 300);
}

async function updateTransactionReceipt(params: UpdateTransactionReceiptParams) {
  const { id, ...bodyParams } = params;
  const url = new URL(`${resources.transactions}/${id}/receipt`);

  return fetch(url.toString(), {
    method: 'POST',
    body: JSON.stringify(bodyParams),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(handleResponse)
    .then((res) => res.status >= 200 && res.status < 300);
}

// Exported API
export const transactionServices = {
  fetchTransactions,
  fetchTransaction,
  updateTransactionCoordinates,
  updateTransactionReceipt,
};
