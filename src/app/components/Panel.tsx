import React from "react";
import {
  DownloadOutlined,
  BarsOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import PanelButton from "./PanelButton";

const Panel: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <span className="text-2xl font-bold">Page title</span>
      <div className="flex gap-4">
        <PanelButton text="Export to PDF" Icon={DownloadOutlined} />
        <PanelButton text="Notes" Icon={BarsOutlined} />
        <PanelButton text="Filter" Icon={FilterOutlined} />
      </div>
    </div>
  );
};

export default Panel;
