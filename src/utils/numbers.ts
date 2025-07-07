import { parseUnits } from 'ethers';

export function n18(amount: string) {
  return parseUnits(amount.replace(/_/g, ''), 'ether');
}
