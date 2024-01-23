export function formatAmount(input) {
  // Convert input to a number if it's string
  let number = parseFloat(input);
  // Check if the number has decimal places
  return number.toFixed(2);
}

// Function to calculate P&L for each holding
export function calculatePNL(holding) {
  return holding.ltp * holding.quantity - holding.avgPrice * holding.quantity;
}

export function transformUserData(data = []) {
  if (data?.length === 0) return;
  // Analyze each holding and calculate total values
  let totalCurrentValue = 0;
  let totalInvestmentValue = 0;
  let totalPNL = 0;
  let todayPNL = 0;

  data.forEach(holding => {
    const pnl = calculatePNL(holding);
    totalCurrentValue += holding.ltp * holding.quantity;
    totalInvestmentValue += holding.avgPrice * holding.quantity;
    totalPNL += pnl;
    todayPNL += pnl;
  });

  return {
    totalCurrentValue,
    totalInvestmentValue,
    totalPNL,
    todayPNL,
  };
}
