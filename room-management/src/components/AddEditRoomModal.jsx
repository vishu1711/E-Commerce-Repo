
import React, { useEffect, useState } from "react";
import { saveRoom } from "../APIs/roomApi";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField, Grid
} from "@mui/material";

export default function AddEditRoomModal({ open, onClose, room = null, onSaved }) {
  const [form, setForm] = useState({
    RoomAlise: "", RoomName: "", RoomTypeId: "", RFloorId: "", DisplayIndex: "", Discription: ""
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (room) {
      setForm({
        RoomAlise: room.RoomAlise || "",
        RoomName: room.RoomName || "",
        RoomTypeId: room.RoomTypeId || "",
        RFloorId: room.RFloorId || "",
        DisplayIndex: room.DisplayIndex ?? "",
        Discription: room.Discription || ""
      });
    } else {
      setForm({ RoomAlise: "", RoomName: "", RoomTypeId: "", RFloorId: "", DisplayIndex: "", Discription: "" });
    }
  }, [room, open]);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSave = async () => {
    console.log("form--->",form)
   
    if (!form.RoomAlise || !form.RoomName || !form.RoomTypeId || !form.RFloorId) {
      alert("Please fill required fields: RoomAlise, RoomName, RoomTypeId, RFloorId");
      return;
    }

    setSaving(true);
    try {
      const payload = {
        ...form,
        RoomTypeId: Number(form.RoomTypeId),
        RFloorId: Number(form.RFloorId),
        DisplayIndex: form.DisplayIndex ? Number(form.DisplayIndex) : undefined,
        action_flag: 1,
        RoomStatus: 1,
        EntryDate: new Date().toISOString().split("T")[0],
        CreatedBy: 101
      };

     
      if (room?.RoomID) payload.RoomID = room.RoomID;

      await saveRoom(payload);
      if (typeof onSaved === "function") onSaved();
      onClose();
 
      alert("Room saved successfully.");
    } catch (err) {
      console.error(err);
      alert("Save failed.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{room ? "Edit Room" : "Add New Room"}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 0.5 }}>
          <Grid item xs={12} sm={6}>
            <TextField label="Room Alias" name="RoomAlise" value={form.RoomAlise} onChange={handleChange} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Room Name" name="RoomName" value={form.RoomName} onChange={handleChange} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Room Type Id" name="RoomTypeId" value={form.RoomTypeId} onChange={handleChange} fullWidth required type="number" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Floor Id" name="RFloorId" value={form.RFloorId} onChange={handleChange} fullWidth required type="number" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Display Index" name="DisplayIndex" value={form.DisplayIndex} onChange={handleChange} fullWidth type="number" />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Discription" name="Discription" value={form.Discription} onChange={handleChange} fullWidth multiline rows={3} />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} disabled={saving}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" disabled={saving}>
          {saving ? "Saving..." : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
