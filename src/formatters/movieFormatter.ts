export const formatBudget = (budget:number) => {
    const formattedBudget = budget.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return formattedBudget.replace(/,/g, '.');
  }

 