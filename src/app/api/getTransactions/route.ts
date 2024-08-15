
type Transaction = {
  id: number;
  from: string,
  to: string,
  amount: number,
  status: string
};

export const data: Transaction[] = [
  {
    id: 1,
    from: '***4333',
    to: '***3444',
    amount: 40000,
    status: 'Pending'
  },
  {
    id: 2,
    from: '***1234',
    to: '***3444',
    amount: 50000,
    status: 'Complete'
  },
  {
    id: 3,
    from: '***1234',
    to: '***3444',
    amount: 50000,
    status: 'Complete'
  },
]

export function GET() {
  return Response.json({ data })
}