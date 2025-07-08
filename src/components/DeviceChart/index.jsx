import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import moment from "moment";
import { useGetDeviceDataQuery } from "../../redux/api/telemetry";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function DeviceChart({ deviceId }) {
  const { data: response, isLoading, error } = useGetDeviceDataQuery(deviceId);
  const telemetry = response?.data || []; 
  const chartData = {
    labels: telemetry.map((d) => moment(d.timestamp).format("MMM D, HH:mm")),
    datasets: [
      {
        label: "Energy Usage (Watts)",
        data: telemetry.map((d) => d.energyWatts),
        backgroundColor: "#002366",
        borderRadius: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  if (isLoading) return <p className="p-4">Loading chart...</p>;
  if (error) return <p className="text-red-500 p-4">Failed to load chart.</p>;
  if (!telemetry.length) return <p className="p-4 text-gray-500">No data available for this device.</p>;

  return (
    <div className="p-6 mt-4 bg-white rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-4 text-center">Recent Energy Usage</h3>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}
