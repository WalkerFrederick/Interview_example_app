export enum AccountType {
  internal = 'internal',
  external = 'external',
}

type Account = {
  id: number;
  account_number: string,
  account_name: string,
  account_balance: number,
  type: AccountType
};

export const data: Account[] = [
  {
    id: 1,
    account_number: '***2334',
    account_name: 'Really Cool Bank Checking Account',
    account_balance: 50000000,
    type: AccountType.internal
  },
  {
    id: 2,
    account_number: '***2335',
    account_name: 'Really Cool Bank Savings Account',
    account_balance: 150000000,
    type: AccountType.internal
  },
  {
    id: 3,
    account_number: '***2335',
    account_name: 'Some Other Checkings Account',
    account_balance: 10000000,
    type: AccountType.external
  },
]

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filter = searchParams.get('filter');

  //TODO FILTER DATA

  return Response.json({ data, filter })
}