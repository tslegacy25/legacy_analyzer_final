import React, { useState } from "react";
import { runAnalysis } from "./runAnalysis.js";

export default function Home() {
  const [dealType, setDealType] = useState("Mobile Home Park");
  const [file, setFile] = useState(null);
  const [results, setResults] = useState(null);
  const [manualInput, setManualInput] = useState({ units: 8, annualCashFlow: 4950 });

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    const analysis = runAnalysis(manualInput.units, manualInput.annualCashFlow);
    setResults(analysis);
  };

  const handleManualSubmit = () => {
    const analysis = runAnalysis(manualInput.units, manualInput.annualCashFlow);
    setResults(analysis);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mt-4 text-center">Legacy Analyzer</h1>
      <p className="text-sm text-gray-600 text-center mb-6">
        Built to help you evaluate Mobile Home, RV Park & Self-Storage deals instantly
      </p>

      <div className="mb-6 p-4 border rounded shadow-sm">
        <label className="block mb-2 text-sm font-semibold">Select Deal Type</label>
        <select
          className="w-full p-2 border rounded mb-4"
          value={dealType}
          onChange={(e) => setDealType(e.target.value)}
        >
          <option>Mobile Home Park</option>
          <option>RV Park</option>
          <option>Self-Storage Facility</option>
        </select>

        <label className="block mb-2 text-sm font-semibold">Upload Deal File (Excel or CSV)</label>
        <input type="file" accept=".xlsx,.csv" onChange={handleFileUpload} className="mb-4" />

        <p className="mb-2 text-sm font-semibold">Or enter deal details manually:</p>
        <input
          type="number"
          placeholder="Number of Units"
          value={manualInput.units}
          className="mb-2 w-full p-2 border rounded"
          onChange={(e) => setManualInput({ ...manualInput, units: Number(e.target.value) })}
        />
        <input
          type="number"
          placeholder="Annual Cash Flow"
          value={manualInput.annualCashFlow}
          className="mb-4 w-full p-2 border rounded"
          onChange={(e) => setManualInput({ ...manualInput, annualCashFlow: Number(e.target.value) })}
        />
        <button onClick={handleManualSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
          Run Manual Analysis
        </button>
      </div>

      {results && (
        <div className="p-4 border rounded shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Deal Snapshot</h2>
          <p><strong>Cap Rate:</strong> {results.capRate}</p>
          <p><strong>Annual Cash Flow:</strong> {results.cashFlow}</p>
          <p><strong>Monthly Cash Flow per Unit:</strong> {results.monthlyPerUnit}</p>
          <p><strong>Cash-on-Cash Return:</strong> {results.cocReturn}</p>
          <p><strong>Balloon Payment:</strong> {results.balloon}</p>
          <p><strong>Deal Score:</strong> {results.dealScore}</p>
        </div>
      )}
    </div>
  );
}