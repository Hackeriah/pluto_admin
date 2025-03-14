import React, { useState } from "react";

export default function PaymentForm() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [cvv, setCvv] = useState("");

  // Generate dynamic months
  const months = Array.from({ length: 12 }, (v, i) => {
    const date = new Date(0, i); // 0 is the epoch year
    return date.toLocaleString("default", { month: "short" });
  });

  // Generate dynamic years starting from the current year
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (v, i) => currentYear + i); // Generate 10 future years

  return (
    <div className="bg-white p-4 w-full">
      <h2 className="text-lg font-semibold text-center mb-6">Pay with Card</h2>

      {/* Name on Card */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Name on Card</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          className="w-full bg-[#EAF5EB] text-[1vw] p-2 px-3 rounded-r-3xl rounded-bl-3xl border border-gray-200 focus:outline-none focus:border-black"
        />
      </div>

      {/* Card Number */}
      <div className=" ">
        <div className="mb-4 ">
          <label className="block text-[1vw]  font-medium mb-1">
            Card Number
          </label>
          <span className="flex gap-4 items-center">
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="5534 2934 8845 6547"
              className="w-full text-[1vw] bg-[#EAF5EB] p-2 px-3 rounded-r-3xl rounded-bl-3xl border border-gray-200 focus:outline-none focus:border-black"
            />

            <img
              src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
              alt="Mastercard Logo"
              className="w-8 h-8"
            />
          </span>
        </div>

        {/* Expiration Date & CVV */}
        <div className="grid grid-cols-3 gap-4">
          {/* Expiration Month */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Expiration Date
            </label>
            <select
              value={expirationMonth}
              onChange={(e) => setExpirationMonth(e.target.value)}
              className="w-full text-[1vw] bg-[#EAF5EB] p-2 px-3 rounded-r-3xl rounded-bl-3xl border border-gray-200 focus:outline-none focus:border-black"
            >
              <option value="" disabled>
                Month
              </option>
              {months.map((month, index) => (
                <option className="bg-white" key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          {/* Expiration Year */}
          <div>
            <label className="block text-sm font-medium mb-1">&nbsp;</label>
            <select
              value={expirationYear}
              onChange={(e) => setExpirationYear(e.target.value)}
              className="w-full text-[1vw] bg-[#EAF5EB] p-2 px-3 rounded-r-3xl rounded-bl-3xl border border-gray-200 focus:outline-none focus:border-black"
            >
              <option value="" disabled>
                Year
              </option>
              {years.map((year, index) => (
                <option className="bg-white" key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* CVV */}
          <div>
            <label className="block text-sm font-medium mb-1">CVV</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              className="w-full text-[1vw] bg-[#EAF5EB] p-2 px-3 rounded-r-3xl rounded-bl-3xl border border-gray-200 focus:outline-none focus:border-black"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}
