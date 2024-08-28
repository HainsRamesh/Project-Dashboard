import Header from "./Header";
import SearchForm from "./SearchForm";
import Table from "./Table";
import Tabs from "./Tabs";
import { tableData } from "../Data";
import { useEffect, useState } from "react";
import Overlay from "./Overlay";
import Modal from "./Modal";

const Homepage = () => {
  const [data, setData] = useState(tableData);
  const [selectedTab, setSelectedTab] = useState("All");
  const [countData, setCountData] = useState(tableData);
  const [modal, setModal] = useState(false);
  const [overlay, setOverlay] = useState(false);

  useEffect(() => {
    if (selectedTab === "All") {
      setData(countData);
    } else {
      const newProjects = countData.filter(
        (data) => data.projectStatus === selectedTab
      );
      setData(newProjects);
    }
  }, [selectedTab]);

  const categories = [
    "All",
    "At Risk",
    "On Hold",
    "Potential Risk",
    "On Track",
    "Archived",
  ];

  const calculateCounts = () => {
    const counts = categories.map((category) => ({
      name: category,
      count:
        category === "All"
          ? tableData.filter((item) => item.projectStatus !== "Archived").length
          : tableData.filter((item) => item.projectStatus === category).length,
    }));
    return counts;
  };

  let categoryCounts = calculateCounts();

  return (
    <div className="xl:ml-[70px] grow overflow-y-auto overflow-x-hidden">
      <Header data={data} />
      <SearchForm
        tableData={tableData}
        setData={setData}
        setModal={setModal}
        setOverlay={setOverlay}
      />
      <Tabs categoryCounts={categoryCounts} setSelectedTab={setSelectedTab} />
      <Table data={data} />
      {overlay && <Overlay setModal={setModal} setOverlay={setOverlay} />}
      {modal && (
        <Modal
          setModal={setModal}
          setOverlay={setOverlay}
          data={data}
          setData={setData}
          setSelectedTab={setSelectedTab}
          setCountData={setCountData}
        />
      )}
    </div>
  );
};

export default Homepage;
