import { formatCurrency } from "@/lib/utils";

enum AccountType {
  Internal = 'Internal',
  External = 'External',
}

type Account = {
  id: number;
  account_number: string,
  account_name: string,
  account_balance: number,
  type: AccountType
};

interface AccountListProps {
  accounts: Account[];
}

export default function AccountsList({ accounts }: AccountListProps) {
  return (
    <ul role="list" className="w-full max-w-3xl divide-gray-100">
      {accounts.length > 0 ?
        <>
          {accounts.map((account) => (
            <li key={account.id} className="border-b flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 sm:flex sm:flex-col sm:items-start">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{account.account_name}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-gray-600">{account.account_number}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-gray-600">{account.type}</p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm font-semibold leading-6 text-gray-900">Balance: {formatCurrency(account.account_balance)}</p>
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