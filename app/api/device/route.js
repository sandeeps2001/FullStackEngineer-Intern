import { error } from "node:console";
import { STATUS_CODES } from "node:http";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const devices = {
    "device-1": { id: "device-1", name: "Living Room Sensor", status: "online", temp: "22°C" },
    "device-2": { id: "device-2", name: "Kitchen Hub", status: "offline", temp: "19°C" },
    "device-3": { id: "device-3", name: "Bedroom Monitor", status: "online", temp: "21°C" },
  };
  if(!devices[id])return Response.json({error:"device not found"},{status:404})
  return Response.json(devices[id]);
}