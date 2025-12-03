
import React, { useEffect, useState } from "react";
import { getDeletedRooms, saveRoom } from "../APIs/roomApi";
import { Box, Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Typography } from "@mui/material";

export default function DeletedRooms({ onBack }) {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDeletedRooms = async () => {
    try {
      setLoading(true);
      const list = await getDeletedRooms();
      setRooms(Array.isArray(list) ? list : []);
    } catch (err) {
      console.error(err);
      setRooms([]);
    } finally {
      setLoading(false);
    }
  };

  const handleActivate = async (roomId) => {
    if (!window.confirm("Reactivate this room?")) return;
    try {
      await saveRoom({ RoomID: roomId, action_flag: 4, CreatedBy: 101, EntryDate: new Date().toISOString().split("T")[0] });
      await fetchDeletedRooms();
      alert("Room reactivated.");
    } catch (err) {
      console.error(err);
      alert("Activation failed.");
    }
  };

  useEffect(() => { fetchDeletedRooms(); }, []);

  return (
    <Box className="p-6 bg-white rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h6">Deleted Rooms</Typography>
        <Button variant="outlined" onClick={onBack}>Back</Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>RoomID</TableCell>
              <TableCell>RoomName</TableCell>
              <TableCell>Discription</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.length === 0 ? (
              <TableRow><TableCell colSpan={4} align="center">No deleted rooms.</TableCell></TableRow>
            ) : rooms.map(r => (
              <TableRow key={r.RoomID}>
                <TableCell>{r.RoomID}</TableCell>
                <TableCell>{r.RoomName}</TableCell>
                <TableCell>{r.Discription}</TableCell>
                <TableCell align="center">
                  <Button size="small" variant="contained" onClick={() => handleActivate(r.RoomID)}>Activate</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
