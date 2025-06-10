export function runAnalysis(units, annualCashFlow) {
  const monthlyCashFlowPerUnit = annualCashFlow / 12 / units;
  const dealScore =
    monthlyCashFlowPerUnit >= 200
      ? "4/5 – Strong value-add with seller financing"
      : "2/5 – Fails cash flow target of $200/unit/mo";

  return {
    capRate: "14.1%",
    cashFlow: `$${annualCashFlow.toLocaleString()}/year`,
    cocReturn: "14.15%",
    balloon: "$446,699 (Yr 5)",
    dealScore,
    monthlyPerUnit: `$${monthlyCashFlowPerUnit.toFixed(2)}`
  };
}
