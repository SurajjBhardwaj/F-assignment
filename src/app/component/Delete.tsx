interface Props {
  onCancel: () => void;
  onDelete: () => void;
}

function DeletePopUp({ onCancel, onDelete }: Props) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-dark-sidebar bg-opacity-50 z-50">
      <div className="bg-gradient-to-b from-theme-dark to-dark-bg p-8 rounded-lg items-center flex flex-col">
        <h2 className="text-3xl font-bold text-theme-white">Are you sure?</h2>
        <p className="text-sm my-12 px-16 text-body-font">
          Are you sure you want to delete this mail?
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onCancel}
            className="bg-black-new text-theme-white px-16 py-4 rounded-md focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="bg-gradient-to-r from-deleteButtn to-deleteButtn2 text-theme-white px-16 py-4 rounded-md focus:outline-none"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopUp;
