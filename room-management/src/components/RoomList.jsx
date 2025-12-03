import React, { useEffect, useState } from "react";
import { getActiveRooms, saveRoom } from "../APIs/roomApi";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Button, CircularProgress, Box, Typography
} from "@mui/material";

export default function RoomList({ onAddNew, onViewDeleted, onEdit }) {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRooms = async () => {
    try {
      setLoading(true);
      setError(null);
      const list = await getActiveRooms();
      setRooms(Array.isArray(list) ? list : []);
    } catch (err) {
      setError("Failed to load rooms.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (roomId) => {
    if (!window.confirm("Confirm delete this room (soft delete)?")) return;
    try {
      await saveRoom({ RoomID: roomId, action_flag: 3, CreatedBy: 101, EntryDate: new Date().toISOString().split("T")[0] });
      await fetchRooms();
    } catch (err) {
      console.error(err);
      alert("Delete failed.");
    }
  };

  useEffect(() => { fetchRooms(); }, []);

  if (loading) return (
    <Box className="p-6 bg-white rounded shadow text-center">
      <CircularProgress />
      <Typography sx={{ mt: 2 }}>Loading rooms...</Typography>
    </Box>
  );

  return (
    <Box className="p-6 bg-white rounded shadow">
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2 }}>Active Rooms</Typography>
    <Box>
      <Button variant="contained" onClick={onAddNew} sx={{ mr: 1 }}>
        Add New Room
      </Button>
      <Button variant="outlined" onClick={onViewDeleted}>
        View Deleted
      </Button>
    </Box>
  </Box>

      {error && <Typography color="error">{error}</Typography>}

      <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
        <Table>
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>RoomID</TableCell>
              <TableCell sx={{ color: "white" }}>RoomAlise</TableCell>
              <TableCell sx={{ color: "white" }}>RoomName</TableCell>
              <TableCell sx={{ color: "white" }}>RoomTypeId</TableCell>
              <TableCell sx={{ color: "white" }}>RFloorId</TableCell>
              <TableCell sx={{ color: "white", textAlign: "center" }}>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rooms.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">No active rooms found.</TableCell>
              </TableRow>
            ) : rooms.map(room => (
              <TableRow key={room.RoomID}>
                <TableCell>{room.RoomID}1</TableCell>
                <TableCell>{room.RoomAlise}1</TableCell>
                <TableCell>{room.RoomName}1</TableCell>
                <TableCell>{room.RoomTypeId}1</TableCell>
                <TableCell>{room.RFloorId}1</TableCell>
                <TableCell align="center">
                  <Button size="small" variant="outlined" onClick={() => onEdit(room)} sx={{ mr: 1 }}>
                    Edit
                  </Button>
                  <Button size="small" color="error" variant="outlined" onClick={() => handleDelete(room.RoomID)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
           
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
