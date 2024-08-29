import { LiaChevronCircleRightSolid } from "react-icons/lia";
import { GoChevronRight } from "react-icons/go";
import { BiSolidSquareRounded } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import user from "../Images/user.jpg";
import user02 from "../Images/user02.jpeg";
import user03 from "../Images/user03.jpeg";
import { TbCaretUpDownFilled } from "react-icons/tb";

const Table = ({ data, setSelectedRows, selectedRows }) => {
  const handleRowSelect = (id) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(id)
        ? prevSelectedRows.filter((rowId) => rowId !== id)
        : [...prevSelectedRows, id]
    );
  };

  const handleSelectAll = (isChecked) => {
    if (isChecked) {
      setSelectedRows(data.map((item) => item.id));
    } else {
      setSelectedRows([]);
    }
  };

  return (
    <div className="overflow-auto shadow">
      <table className="w-full ">
        <thead className="bg-slate-100 border-y border-slate-300">
          <tr className="text-left">
            <th className="pl-5 py-2 px-1 font-semibold text-[0.7rem] tracking-wide uppercase text-slate-500 ">
              <input
                type="checkbox"
                checked={selectedRows.length === data.length}
                onChange={(e) => handleSelectAll(e.target.checked)}
                className="accent-textPurple"
              />
            </th>
            <th className="py-2 px-1 font-semibold text-[0.7rem] tracking-wide uppercase text-slate-800 flex items-center">
              #
              <TbCaretUpDownFilled className="text-sm text-gray-400" />
            </th>
            <th className="py-2 px-1 font-semibold text-[0.7rem] tracking-wide uppercase text-slate-500">
              project plan
            </th>
            <th className="py-2 px-1 font-semibold text-[0.7rem] tracking-wide uppercase text-slate-500">
              pm
            </th>
            <th className="py-2 px-1 font-semibold text-[0.7rem] tracking-wide uppercase text-slate-500">
              status
            </th>
            <th className="py-2 px-1 font-semibold text-[0.7rem] tracking-wide uppercase text-slate-500 flex items-center">
              last update
              <TbCaretUpDownFilled className="text-sm text-gray-400" />
            </th>
            <th className="py-2 px-1 font-semibold text-[0.7rem] tracking-wide uppercase text-slate-500 text-center">
              resources
            </th>
            <th className="py-2 px-1 font-semibold text-[0.7rem] tracking-wide uppercase text-slate-500">
              project timeline
            </th>
            <th className="py-2 px-1 font-semibold text-[0.7rem] tracking-wide uppercase text-slate-500">
              estimation
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            ({
              id,
              companyName,
              OPM,
              projectStatus,
              lastUpdate,
              resources,
              startDate,
              endDate,
              estimatedPrice,
            }) => {
              return (
                <tr
                  className={`text-left ${
                    selectedRows.includes(id)
                      ? "bg-highLight"
                      : "border-b border-slate-300"
                  }`}
                  key={id}
                >
                  <td className="py-2 px-1 pl-5 whitespace-nowrap">
                    <div className="flex gap-2">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(id)}
                        onChange={() => handleRowSelect(id)}
                        className="border-gray-400 accent-textPurple"
                      />
                      <LiaChevronCircleRightSolid className="text-gray-500 font-normal" />
                    </div>
                  </td>
                  <td className="py-2 px-1 font-semibold text-xs whitespace-nowrap">
                    {id}
                  </td>
                  <td className="py-2 px-1 font-semibold text-sm tracking-wide text-textPurple whitespace-nowrap">
                    {companyName}
                  </td>
                  <td className="py-2 px-1 font-semibold text-xs tracking-wide uppercase whitespace-nowrap">
                    <img
                      src={
                        OPM === "Hains"
                          ? user
                          : OPM === "Undertaker"
                          ? user02
                          : OPM === "Robert Downey Jr."
                          ? user03
                          : null
                      }
                      alt="opm"
                      className="w-5 h-5 lg:w-7 lg:h-7 rounded-md object-cover"
                    />
                  </td>
                  <td className="py-2 px-1 font-semibold whitespace-nowrap">
                    <div
                      className={`flex items-center gap-1 rounded-sm w-fit px-2 py-[1px] ${
                        projectStatus === "On Track"
                          ? "bg-green-100"
                          : projectStatus === "On Hold"
                          ? "bg-gray-100"
                          : projectStatus === "At Risk"
                          ? "bg-red-100"
                          : projectStatus === "Potential Risk"
                          ? "bg-yellow-100"
                          : projectStatus === "Archived"
                          ? "bg-blue-100"
                          : null
                      }`}
                    >
                      <BiSolidSquareRounded
                        className={`text-[6px] ${
                          projectStatus === "On Track"
                            ? "text-green-600"
                            : projectStatus === "On Hold"
                            ? "text-gray-600"
                            : projectStatus === "At Risk"
                            ? "text-red-600"
                            : projectStatus === "Potential Risk"
                            ? "text-yellow-600"
                            : projectStatus === "Archived"
                            ? "text-blue-600"
                            : null
                        }`}
                      />
                      <span
                        className={`text-xs  ${
                          projectStatus === "On Track"
                            ? "text-green-600"
                            : projectStatus === "On Hold"
                            ? "text-gray-600"
                            : projectStatus === "At Risk"
                            ? "text-red-600"
                            : projectStatus === "Potential Risk"
                            ? "text-yellow-600"
                            : projectStatus === "Archived"
                            ? "text-blue-600"
                            : null
                        }`}
                      >
                        {projectStatus}
                      </span>
                    </div>
                  </td>
                  <td className="py-2 px-1 font-normal text-sm tracking-wide whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <CgNotes className="text-textPurple" />
                      {lastUpdate}
                    </div>
                  </td>
                  <td className="py-2 px-1 text-center font-semibold text-sm text-gray-600 whitespace-nowrap">
                    {resources.length}
                  </td>
                  <td className="py-2 px-1 font-semibold text-xs tracking-wide uppercase whitespace-nowrap">
                    <div className="flex gap-[0.2rem] items-center">
                      <span className="bg-gray-100 rounded-sm w-fit px-2 py-[1px] text-gray-500">
                        {startDate}
                      </span>
                      <GoChevronRight />
                      <span className="bg-gray-100 rounded-sm w-fit px-2 py-[1px] text-gray-500">
                        {endDate}
                      </span>
                    </div>
                  </td>
                  <td className="py-2 px-1 font-normal text-sm tracking-wide whitespace-nowrap">
                    {`US$ ${estimatedPrice}k`}
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
