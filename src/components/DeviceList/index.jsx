import { useGetDeviceSummaryQuery } from "../../redux/api/telemetry";
import {
  FaSnowflake,
  FaTv,
  FaFireAlt,
  FaTshirt,
  FaUtensils,
} from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";

const getDeviceIcon = (name) => {
  const lower = name.toLowerCase();
  if (lower.includes("ac")) return <FaSnowflake className="text-2xl text-primary" />;
  if (lower.includes("fridge")) return <FaUtensils className="text-2xl text-primary" />;
  if (lower.includes("heater")) return <FaFireAlt className="text-2xl text-primary" />;
  if (lower.includes("washing")) return <FaTshirt className="text-2xl text-primary" />;
  if (lower.includes("tv")) return <FaTv className="text-2xl text-primary" />;
  return <PiTelevisionSimpleBold className="text-2xl text-primary" />;
};

export default function DeviceList({ onSelect }) {
  const { data: response, isLoading, error } = useGetDeviceSummaryQuery();
  const devices = response?.data || [];

  if (isLoading) return <p>Loading devices...</p>;
  if (error) return <p className="text-red-500">Failed to fetch device list.</p>;

  return (
    <div className="p-4 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {devices.map((device, index) => (
          <div
            key={device.deviceId}
            onClick={() => onSelect(device.deviceId)}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-xl hover:scale-[1.02] transition-transform duration-200 cursor-pointer flex flex-col justify-between h-full"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="p-3 bg-blue-100 rounded-full">
                {getDeviceIcon(device.deviceName)}
              </div>
              <span className="text-xs text-gray-400">#{index + 1}</span>
            </div>

            <div className="mb-2">
              <div className="text-sm text-gray-500">Device Name</div>
              <div className="text-base font-bold text-gray-800 leading-snug break-words">
                {device.deviceName}
              </div>
            </div>

            <div className="mt-2 text-sm text-gray-600 space-y-1">
              <div>Total Usage: <span className="font-semibold">{device.total}W</span></div>
              <div>Average: <span className="font-semibold">{device.average}W</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
