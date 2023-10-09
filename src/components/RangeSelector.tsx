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
    <div className="flex flex-col p-4 gap-4  items-center ">
      <div className="flex flex-row items-center">
        <DatePicker
          label="From"
          value={fromDate}
          onChange={(e) => {
            setFromDate(e as Dayjs);
          }}
          format="DD/MM/YYYY"
        />

        <p className="mx-10">-</p>

        <DatePicker
          label="To"
          value={toDate}
          onChange={(e) => {
            setToDate(e as Dayjs);
          }}
          format="DD/MM/YYYY"
        />
      </div>
      <div className="flex flex-row items-center gap-4 overflow-x-auto p-2">
        <button
          className="btn btn-sm btn-primary rounded-2xl bg-blue-500 hover:bg-blue-700 text-white p-2 font-semibold shadow-md"
          onClick={() => {
            setFromDate(dayjs().subtract(1, "day"));
            setToDate(dayjs());
          }}
        >
          Today
        </button>

        <button
          className="btn btn-sm btn-primary rounded-2xl bg-blue-500 hover:bg-blue-700 text-white p-2 font-semibold shadow-md"
          onClick={() => {
            setFromDate(dayjs().subtract(1, "week"));
            setToDate(dayjs());
          }}
        >
          Last week
        </button>

        <button
          className="btn btn-sm btn-primary rounded-2xl bg-blue-500 hover:bg-blue-700 text-white p-2 font-semibold shadow-md"
          onClick={() => {
            setFromDate(dayjs().subtract(1, "month"));
            setToDate(dayjs());
          }}
        >
          Last month
        </button>

        <button
          className="btn btn-sm btn-primary rounded-2xl bg-blue-500 hover:bg-blue-700 text-white p-2 font-semibold shadow-md"
          onClick={() => {
            setFromDate(dayjs().subtract(1, "year"));
            setToDate(dayjs());
          }}
        >
          Last year
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
    </div>
  );
}
