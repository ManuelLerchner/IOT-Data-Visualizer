import React from "react";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-3xl font-bold my-8">
        IOT Data Visualisation
      </h1>

      <h2 className="text-center text-xl font-bold my-4">About this website</h2>

      <p className="text-center">
        This is a place to visualise all the data collected from my IOT devices
        in a nice way.
      </p>

      <h2 className="text-center text-xl font-bold my-4">Devices</h2>

      <p> Currently there are the following devices:</p>

      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Device Name</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Collected Datatypes</th>
            <th className="px-4 py-2">Dashboard</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              Amazon Smart Air Quality Monitor
            </td>
            <td className="border px-4 py-2">
              <img
                className="w-32 h-32"
                src="https://cdn0.vox-cdn.com/hermano/verge/product/image/9820/jtuohy_220303_5065_0008_squ.jpg"
              />
            </td>
            <td className="border px-4 py-2">
              <ul className="list-disc list-inside my-2">
                <li>Temperature</li>
                <li>Humidity</li>
                <li>CO</li>
                <li>VOC</li>
                <li>Particulate Matter</li>
              </ul>
            </td>
            <td className="border px-4 py-2">
              <a
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="/air-quality"
              >
                Air Quality Dashboard
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
