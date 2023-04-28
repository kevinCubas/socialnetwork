interface ICancelBtn {
  handleCancel: () => void
}

export function CancelBtn({handleCancel}: ICancelBtn) {
  return (
    <button
      title="Cancel"
      type="button"
      aria-label="Cancel"
      className="border border-gray-400 px-8 py-[6px] rounded-lg"
      onClick={handleCancel}
    >
        Cancel
    </button>
  )
}