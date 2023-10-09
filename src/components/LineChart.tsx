import React from "react";
import Chart from "chart.js/auto";

import "chartjs-adapter-moment";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale);

const options = {
  tooltips: {
    mode: "index",
    intersect: false,
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    tooltip: {
      callbacks: {
        title: function (context: any) {
          var date = new Date(context[0].parsed.x);
          var title =
            date.toLocaleDateString("de-DE", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }) +
            " " +
            date.toLocaleTimeString("de-DE", {
              hour: "2-digit",
              minute: "2-digit",
            });
          return title;
        },

        label: function (context: any) {
          var label = context.dataset.label || "";

          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += context.parsed.y + context.dataset.unit;
          }
          return label;
        },
      },
    },
    legend: {
      position: "bottom",
    },
  },
  scales: {
    x: {
      type: "time",
      time: {
        unit: "hour",
        displayFormats: {
          hour: "hh:mm",
        },
      },
    },
  },
};

export default function LineChart({
  chartData,
  title,
}: {
  chartData: any;
  title: string;
}) {
  const curr_options = {
    ...options,
    plugins: {
      ...options.plugins,
      title: {
        display: true,
        text: title,
        font: {
          size: 20,
        },
      },
    },
  };

  return <Line data={chartData} options={curr_options as any} />;
}
