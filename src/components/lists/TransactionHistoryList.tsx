import { formatCurrency } from "@/lib/utils";

interface Transaction {
  id: number;
  from: string;
  to: string;
  amount: number;
  status: string;
}

interface TransactionHistoryListProps {
  transactions: Transaction[];
}

export default function TransactionHistoryList({ transactions }: TransactionHistoryListProps) {
  return (
    <ul role="list" className="w-full max-w-3xl divide-gray-100">
      {transactions.length > 0 ?
        <>
          {transactions.map((transaction) => (
            <li key={transaction.id} className="border-b flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 sm:flex sm:flex-col sm:items-start">
                  <p className="text-sm font-semibold leading-6 text-gray-900">From Account: {transaction.from}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-gray-600">To Account: {transaction.to}</p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm font-semibold leading-6 text-gray-900">Amount: {formatCurrency(transaction.amount)}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-gray-600">Status: {transaction.status}</p>
              </div>
            </li>
          ))}
        </> :
        <>
          <p className="mb-32 text-lg font-semibold leading-6 text-gray-900">Loading</p>
        </>}
    </ul>
  )
}