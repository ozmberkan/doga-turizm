const ConfirmModal = ({ setConfirmModal, onConfirm }) => {
  const handleConfirm = () => {
    onConfirm();
    setConfirmModal(false);
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
        <div className="bg-white dark:bg-gray-900 rounded-md shadow-lg max-w-2xl w-full flex flex-col relative z-10 overflow-hidden">
          <div className="py-4 rounded-t-md text-primary w-full dark:bg-gray-800 dark:text-gray-400 bg-primary/20 flex justify-between items-center px-4 gap-x-2">
            <span className="flex items-center gap-x-3">
              <h1 className="text-lg font-semibold">Emin Misin ?</h1>
            </span>
          </div>
          <div className="w-full h-full flex flex-col gap-y-3 p-5">
            <h1 className="text-xl text-zinc-700 dark:text-white">
              İptal etmek istediğine emin misin?
            </h1>
            <div className="w-full flex gap-x-2">
              <button
                onClick={handleConfirm}
                className="px-3 py-1 bg-primary/30 text-primary rounded-md dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors"
              >
                Evet
              </button>
              <button
                onClick={() => setConfirmModal(false)}
                className="px-3 py-1 bg-red-100 text-red-500 rounded-md dark:bg-gray-800 dark:text-white  dark:hover:bg-gray-700 transition-colors"
              >
                Vazgeç
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
