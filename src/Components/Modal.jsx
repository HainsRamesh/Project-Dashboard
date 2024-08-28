const Modal = ({ setModal, setOverlay }) => {
  const handleCancel = () => {
    setModal(false);
    setOverlay(false);
  };

  return (
    <div className="w-[95%] md:w-fit max-w-lg md:max-w-md p-4 md:mx-auto sm:p-6 bg-white rounded-lg shadow-xl absolute z-30 top-3 left-2 md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%]">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 ">
        Add new project
      </h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="project-name"
          >
            Project name *
          </label>
          <input
            type="text"
            id="project-name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Project manager (PM)
          </label>
          <div className="flex flex-wrap">
            <button
              type="button"
              className="px-3 py-1 border rounded-tl-lg rounded-bl-lg focus:text-textPurple"
            >
              Hains
            </button>
            <button
              type="button"
              className="px-3 py-1 border focus:text-textPurple"
            >
              Robert Downey Jr.
            </button>
            <button
              type="button"
              className="px-3 py-1 border rounded-tr-lg rounded-br-lg focus:text-textPurple"
            >
              Undertaker
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Resources</label>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 border rounded-lg">UX/UI Design</span>
            <span className="px-3 py-1 border rounded-lg">Frontend</span>
            <span className="px-3 py-1 border rounded-lg">Backend</span>
            <span className="px-3 py-1 border rounded-lg">Full Stack</span>
            <span className="px-3 py-1 border rounded-lg">
              Graphic Designer
            </span>
            <span className="px-3 py-1 border rounded-lg">Web Designer</span>
            <span className="px-3 py-1 border rounded-lg">QA</span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Project timeline
          </label>
          <div>
            <select className="w-full sm:w-auto px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-3">
              <option>Custom</option>
            </select>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="date"
                className="w-full sm:w-auto px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="date"
                className="w-full sm:w-auto px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="estimation"
          >
            Estimation
          </label>
          <input
            type="text"
            id="estimation"
            placeholder="US$ 00.00"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <button
            type="button"
            className="w-full sm:w-auto px-4 py-2 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Add project
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
