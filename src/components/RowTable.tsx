export default function RowTable({
  title,
  value,
  unit,
}: {
  title: string;
  value: number | string;
  unit: string;
}) {
  return (
    <tr>
      <td className="border px-4 py-2">
        <p className="font-semibold">{title}</p>
      </td>
      <td className="border px-4 py-2">
        <p className="font-bold">
          {typeof value === "string" && value + " " + unit}

          {typeof value === "number" && (
            <>
              {isNaN(value)
                ? "N/A"
                : new Intl.NumberFormat("en-US", {
                    maximumFractionDigits: 2,
                  }).format(value) +
                  " " +
                  unit}
            </>
          )}
        </p>
      </td>
    </tr>
  );
}
