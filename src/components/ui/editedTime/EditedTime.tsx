import React, { useEffect, useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import MyTooltip from "@/components/myComponents/MyTooltip";

interface EditedTimeProps {
  editedAt: Date | string | number;
}

const EditedTime: React.FC<EditedTimeProps> = ({ editedAt }) => {
  const [display, setDisplay] = useState<string>("");

  useEffect(() => {
    const getDisplay = () => {
      try {
        const result = formatDistanceToNowStrict(new Date(editedAt), {
          addSuffix: true,
        });
        return result === "0 seconds ago" ? "just now" : result;
      } catch {
        return "just now";
      }
    };

    setDisplay(getDisplay());

    const interval = setInterval(() => {
      setDisplay(getDisplay());
    }, 20000);

    return () => clearInterval(interval);
  }, [editedAt]);

  return (
    <MyTooltip
      content={
        typeof editedAt === "string"
          ? editedAt
          : new Date(editedAt).toLocaleString()
      }
    >
      <span className="text-xs text-gray-400 px-2 py-1 rounded bg-neutral-800 cursor-pointer hover:text-white">
        Edited {display}
      </span>
    </MyTooltip>
  );
};

export default EditedTime;
