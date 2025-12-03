
import React, { useState } from "react";
import RoomList from "./components/RoomList";
import AddEditRoomModal from "./components/AddEditRoomModal";
import DeletedRooms from "./components/DeletedRooms";

export default function App() {
  const [screen, setScreen] = useState("list");
  const [editingRoom, setEditingRoom] = useState(null);
  const [showAddEdit, setShowAddEdit] = useState(false);

  const openAdd = () => { setEditingRoom(null); setShowAddEdit(true); };
  const openEdit = (room) => { setEditingRoom(room); setShowAddEdit(true); };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {screen === "list" && (
          <RoomList
            onAddNew={openAdd}
            onViewDeleted={() => setScreen("deleted")}
            onEdit={openEdit}
          />
        )}
        {screen === "deleted" && <DeletedRooms onBack={() => setScreen("list")} />}
      </div>

      <AddEditRoomModal
        open={showAddEdit}
        onClose={() => setShowAddEdit(false)}
        room={editingRoom}
        onSaved={() => {
        }}
      />
    </div>
  );
}
