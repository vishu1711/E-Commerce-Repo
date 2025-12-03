
import axios from "axios";
import { BASE_URL, AUTH_BODY } from "../Configration/constants";

const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 15000,
});

export const getActiveRooms = async () => {
  const payload = { ...AUTH_BODY, FromDevice: AUTH_BODY.FromDevice || "Web" };
  const res = await api.post("get_room_list_demo.php", payload);
 
  const body = res.data;
  console.log("body--->",body)
  if (body?.result?.rooms) return body.result.rooms;

  return body?.rooms || body?.data || [];
};

export const getDeletedRooms = async () => {
  const payload = { ...AUTH_BODY };
  const res = await api.post("get_room_list_deleted_demo.php", payload);
  const body = res.data;
  if (body?.result?.deleted_rooms) return body.result.deleted_rooms;
  return body?.deleted_rooms || body?.data || [];
};

export const saveRoom = async (roomData) => {

  console.log("roomData---->",roomData)
  const payload = { ...AUTH_BODY, ...roomData };
  const res = await api.post("save_room_demo.php", payload);
  // spec returns { result: [ { Success: true, Message: "..." } ] }
  return res.data;
};
