import React, { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "../services/dayjs";
import { Dayjs } from "dayjs";

export default function RangeSelector({
  fromDate,
  toDate,
  setFromDate,
  setToDate,
}: {
  fromDate: Dayjs;
  toDate: Dayjs;
  setFromDate: (date: Dayjs) => void;
  setToDate: (date: Dayjs) => void;
}) {
  return (
    <div className="flex flex-col my-4 gap-4 items-center px-2">
      <div className="flex flex-row items-center">
        <DatePicker
          label="From"
          value={fromDate}
          onChange={(e) => {
            setFromDate(e as Dayjs);
          }}
          format="DD/MM/YYYY"
        />

        <p className="mx-10 font-bold text-lg">-</p>

        <DatePicker
          label="To"
          value={toDate}
          onChange={(e) => {
            setToDate(e as Dayjs);
          }}
          format="DD/MM/YYYY"
        />
      </div>
      <div className="flex flex-row items-center gap-4 overflow-x-auto py-2">
        <button
          className="btn btn-sm btn-success rounded-2xl bg-green-500 hover:bg-green-700 text-white p-2 font-semibold shadow-md"
          onClick={() => {
            const currentFromDate = fromDate;
            setFromDate(currentFromDate.subtract(1, "day"));
            setToDate(currentFromDate.subtract(1, "day"));
          }}
        >
          -1 day
        </button>

        <button
          className="btn btn-sm btn-success rounded-2xl bg-green-500 hover:bg-green-700 text-white p-2 font-semibold shadow-md"
          onClick={() => {
            setFromDate(dayjs());
            setToDate(dayjs());
          }}
        >
          Today
        </button>

        <button
          className="btn btn-sm btn-success rounded-2xl bg-green-500 hover:bg-green-700 text-white p-2 font-semibold shadow-md"
          onClick={() => {
            const currentToDate = toDate;
            setFromDate(currentToDate.add(1, "day"));
            setToDate(currentToDate.add(1, "day"));
          }}
        >
          +1 day
        </button>

        <button
          className="btn btn-sm btn-primary rounded-2xl bg-blue-500 hover:bg-blue-700 text-white p-2 font-semibold shadow-md"
          onClick={() => {
            setFromDate(dayjs().subtract(1, "week"));
            setToDate(dayjs());
          }}
        >
          This week
        </button>

        <button
          className="btn btn-sm btn-primary rounded-2xl bg-blue-500 hover:bg-blue-700 text-white p-2 font-semibold shadow-md"
          onClick={() => {
            setFromDate(dayjs().subtract(10, "year"));
            setToDate(dayjs());
          }}
        >
          All time
        </button>
      </div>

      {/* warning if date is in future */}
      {dayjs().isBefore(fromDate) && (
        <div className="flex flex-row items-center gap-4">
          <p className="text-red-500">Warning: From date is in future</p>
        </div>
      )}

      {/* warning if from date is after to date */}
      {fromDate.isAfter(toDate) && (
        <div className="flex flex-row items-center gap-4">
          <p className="text-red-500">Warning: From date is after to date</p>
        </div>
      )}
    </div>
  );
}
