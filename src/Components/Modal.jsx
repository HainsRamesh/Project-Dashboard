import { useState } from "react";

const Modal = ({ setModal, setOverlay }) => {
  const [selectedOPM, setSelectedOPM] = useState("Hains");
  const [estimatedValue, setEstimatedValue] = useState("");
  const handleChange = (e) => {
    const inputValue = e.target.value;
    // Allow only numbers
    if (/^\d*$/.test(inputValue)) {
      setEstimatedValue(inputValue);
    }
  };
  const handleCancel = () => {
    setModal(false);
    setOverlay(false);
  };

  return (
    <div className="w-[95%] md:w-fit max-w-lg md:max-w-md p-4 md:mx-auto sm:p-6 bg-white rounded-lg shadow-2xl absolute z-30 top-3 left-2 md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%]">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 ">
        Add new project
      </h2>
      <form>
        <div className="mb-8">
          <label
            className="block text-sm font-medium text-slate-600 mb-1"
            htmlFor="project-name"
          >
            Project name <span className="text-textPurple">*</span>
          </label>
          <input
            type="text"
            id="project-name"
            className="w-full px-3 py-1 border shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-textPurple"
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Project manager (PM)
          </label>
          <div className="flex flex-wrap text-sm font-semibold text-gray-600 p-[2px] bg-slate-100 w-fit rounded">
            <button
              type="button"
              onClick={() => setSelectedOPM("Hains")}
              className={`px-3 py-1 border-r ${
                selectedOPM === "Hains"
                  ? "text-textPurple bg-white rounded shadow"
                  : ""
              }`}
            >
              Hains
            </button>
            <button
              type="button"
              onClick={() => setSelectedOPM("Robert Downey Jr.")}
              className={`px-3 py-1 border-r ${
                selectedOPM === "Robert Downey Jr."
                  ? "text-textPurple bg-white rounded shadow"
                  : ""
              }`}
            >
              Robert Downey Jr.
            </button>
            <button
              type="button"
              onClick={() => setSelectedOPM("Undertaker")}
              className={`px-3 py-1 border-r ${
                selectedOPM === "Undertaker"
                  ? "text-textPurple bg-white rounded shadow"
                  : ""
              }`}
            >
              Undertaker
            </button>
          </div>
        </div>

        <div className="mb-8">
          <label className="text-slate-600 block text-sm font-medium mb-1">
            Resources
          </label>
          <div className="flex flex-wrap gap-2 text-sm font-medium text-slate-600">
            <span className="px-[10px] py-[2px] border border-slate-400 rounded-md cursor-pointer">
              UX/UI Design
            </span>
            <span className="px-[10px] py-[2px] border border-slate-400 rounded-md cursor-pointer">
              Frontend
            </span>
            <span className="px-[10px] py-[2px] border border-slate-400 rounded-md cursor-pointer">
              Backend
            </span>
            <span className="px-[10px] py-[2px] border border-slate-400 rounded-md cursor-pointer">
              Full Stack
            </span>
            <span className="px-[10px] py-[2px] border border-slate-400 rounded-md cursor-pointer">
              Graphic Designer
            </span>
            <span className="px-[10px] py-[2px] border border-slate-400 rounded-md cursor-pointer">
              Web Designer
            </span>
            <span className="px-[10px] py-[2px] border border-slate-400 rounded-md cursor-pointer">
              QA
            </span>
          </div>
        </div>

        <div className="mb-8">
          <label className="text-slate-600 block text-sm font-medium mb-1">
            Project timeline
          </label>
          <div>
            <input
              type="number"
              className="w-full px-3 py-1 border shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-textPurple mb-3"
              placeholder="Custom"
            />
            <div className="flex flex-col sm:flex-row gap-2 items-center justify-end">
              <input
                type="date"
                className="w-full sm:w-auto px-3 py-1 border shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <div className="text-gray-400 font-bold text-xs hidden md:block">
                &gt;
              </div>
              <input
                type="date"
                className="w-full sm:w-auto px-3 py-1 border shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label
            className="text-slate-600 block text-sm font-medium mb-1"
            htmlFor="estimation"
          >
            Estimation
          </label>
          <div className="relative flex  items-center focus-within:text-gray-600">
            <span className="absolute ml-3 pointer-events-none text-slate-500">
              US$
            </span>
            <input
              type="text"
              id="estimation"
              placeholder="00.00"
              value={estimatedValue}
              onChange={handleChange}
              className="w-full px-12 py-1 border shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-textPurple placeholder-slate-400"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-2">
          <button
            type="button"
            className="w-full sm:w-auto px-4 py-1 border rounded-lg text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-sm border-slate-300"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto px-4 py-1 bg-textPurple text-white text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:bg-textPurple shadow-sm"
          >
            Add project
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
