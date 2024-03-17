export function formatCurrency(priceCents){
// round upto 2 decimal places
  return (priceCents / 100).toFixed(2);

}