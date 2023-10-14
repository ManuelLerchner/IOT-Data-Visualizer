import DeviceCard from "../components/DeviceCard";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-2xl font-bold my-4">About</h1>

      <p className="text-center">
        This is a place to visualise all the collected data from my IOT devices
        in a nice way. <br />
        Each device has its own dashboard where all the information is
        displayed.
      </p>

      <h2 className="text-center text-3xl font-bold my-4">Devices</h2>

      <div className="flex flex-row gap-4 items-center overflow-x-auto p-2">
        <DeviceCard
          title="Amazon Smart Air Quality Monitor"
          description={
            <p className="text-sm">
              A raspberry periodically fetches the data from amazon and stores
              it in a database.
              <br />
              The{" "}
              <a
                href="https://github.com/ManuelLerchner/Amazon-Smart-Air-Quality-Monitor-Logger"
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              >
                script
              </a>{" "}
              which does all the heavy lifting is written in python.
            </p>
          }
          image="https://cdn0.vox-cdn.com/hermano/verge/product/image/9820/jtuohy_220303_5065_0008_squ.jpg"
          datatypes={[
            "Temperature",
            "Humidity",
            "CO",
            "VOC",
            "Particulate Matter",
          ]}
          url="/air-quality"
        />
      </div>
    </div>
  );
}
