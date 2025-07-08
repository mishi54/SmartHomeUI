import { useState } from "react";
import DeviceList from "../../components/DeviceList";
import DeviceChart from "../../components/DeviceChart";
import EnergyChatbot from "../../components/EnergyChatbot";

export default function Dashboard() {
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);

  return (
    <div className="p-4 space-y-6">
      <DeviceList onSelect={setSelectedDeviceId} />
      {selectedDeviceId && <DeviceChart deviceId={selectedDeviceId} />}
      <EnergyChatbot />
    </div>
  );
}
