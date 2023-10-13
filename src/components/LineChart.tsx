import {
  CategoryScale,
  Chart as ChartJS,
  Decimation,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-moment";
import Annotation from "chartjs-plugin-annotation";
import React from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  Decimation,
  Annotation
);

function average(values: number[]) {
  return values.reduce((a: number, b: number) => a + b, 0) / values.length;
}

const options: any = {
  tooltips: {
    mode: "index",
    intersect: false,
  },
  responsive: true,
  maintainAspectRatio: false,
  normalized: true,
  parsing: false,
  interaction: {
    mode: "nearest",
    axis: "x",
    intersect: false,
  },
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
    decimation: {
      enabled: true,
      algorithm: "lttb",
    },
    annotation: {
      annotations: {
        line1: {
          display: (ctx: any) => ctx.chart.data.datasets.length == 1,
          type: "line",
          borderColor: "black",
          borderDash: [6, 6],
          borderDashOffset: 0,
          borderWidth: 2,

          scaleID: "y",
          value: (ctx: any) =>
            average(ctx.chart.data.datasets[0].data.map((v: any) => v.y)),

          label: {
            display: true,
            content: (ctx: any) =>
              average(
                ctx.chart.data.datasets[0].data.map((v: any) => v.y)
              ).toFixed(2) +
              " " +
              ctx.chart.data.datasets[0].unit,
            position: "end",
            font: {
              size: 10,
            },
          },
        },
      },
    },
  },
  scales: {
    x: {
      type: "time",
      time: {
        unit: "hour",
        displayFormats: {
          hour: "HH:mm",
        },
      },
    },
  },
};

export default function LineChart({
  dataset,
  title,
}: {
  dataset: any;
  title: string;
}) {
  const canvasRef = React.useRef<any>(undefined);
  const chartRef = React.useRef<any>(undefined);

  React.useEffect(() => {
    chartRef.current = new ChartJS(canvasRef.current, {
      type: "line",
      data: dataset,
      options: {
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
      },
    });

    return () => {
      chartRef.current.destroy();
    };
  }, [dataset]);

  return <canvas ref={canvasRef} style={{ width: "100%" }} />;
}
