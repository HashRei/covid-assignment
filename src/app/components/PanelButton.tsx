import React from "react";
import { IconBaseProps } from "@ant-design/icons/lib/components/Icon";

interface PanelButtonProps {
  text: string;
  Icon: React.ComponentType<IconBaseProps>;
}

const PanelButton: React.FC<PanelButtonProps> = ({ text, Icon }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
      <Icon />
      {text}
    </button>
  );
};

export default PanelButton;
