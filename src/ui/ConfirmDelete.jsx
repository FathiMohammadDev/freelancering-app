const ConfirmDelete = ({ title, onClose, disabled }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg text-text_light">Do you want remove {title} ?</h3>
      <div className="flex items-center justify-between">
        <button
          disabled={disabled}
          className="bg-primary text-white font-bold p-2 rounded-md disabled:opacity-45"
        >
          Remove
        </button>
        <button
          disabled={disabled}
          onClick={onClose}
          className="text-primary border-2 border-primary p-1 rounded-md disabled:opacity-45"
        >
          Undo
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
