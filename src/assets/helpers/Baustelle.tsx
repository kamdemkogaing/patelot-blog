import { useState } from "react";

export default function Baustelle() {
  // state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // comportement
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex items-center justify-center h-48 bg-gray-100">
      <button
        className="btn bg-[olive] hover:bg-black hover:text-white"
        onClick={openModal}
      >
        Meine Baustelle
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="modal-box">
            <h2 className="text-xl font-bold">INFO !</h2>
            <p className="py-4">
              Vielen Dank für Deine Interesse an meine Website. Ich arbeite
              derzeit intensiv daran, sie fertigzustellen. Ich freue mich
              darauf, Dir bald die vollständige Webseite präsentieren zu können!
            </p>
            <div className="modal-action">
              <button className="btn bg-[olive]" onClick={closeModal}>
                Schliessen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
