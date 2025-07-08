import { useState } from "react";
import DeviceList from "../../components/DeviceList";
import DeviceChart from "../../components/DeviceChart";
import EnergyChatbot from "../../components/EnergyChatbot";
import Header from "../../components/Header";

export default function Dashboard() {
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);

  return (
    <div className="p-4 space-y-6">
      <Header />
      <DeviceList onSelect={setSelectedDeviceId} />
      {selectedDeviceId && <DeviceChart deviceId={selectedDeviceId} />}
      <EnergyChatbot />
    </div>
  );
}
