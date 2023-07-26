import { useState } from "react";
import { Modal } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { useServiceEventsContext } from "../../context/serviceEvents.provider";
import React from "react";
export default function EditServiceEventModal() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { _id } = useParams();
  const { events } = useServiceEventsContext();
  const chosenEvent = events.find((ev) => ev._id === _id);
  console.log(chosenEvent);
  function onDismiss() {
    setOpen(false);
    navigate(-1);
  }
  function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    onDismiss();
  }
  return (
    <Modal show={open} onClose={onDismiss}>
      <Modal.Header>Edit Service Event</Modal.Header>
      <Modal.Body>
        <form
          onSubmit={(ev: React.FormEvent<HTMLFormElement>) => handleSubmit(ev)}
        >
          <button
            type="submit"
            className="border rounded-lg text-black bg-blue-400 p-3"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onDismiss}
            className="border rounded-lg text-black bg-slate-400 p-3"
          >
            Cancel
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
