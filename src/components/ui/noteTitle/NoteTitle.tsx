import React, { useState, useRef, useEffect } from "react";
import MyTooltip from "@/components/myComponents/MyTooltip";

interface NoteTitleProps {
  title: string;
  onChange: (newTitle: string) => void;
}

const NoteTitle: React.FC<NoteTitleProps> = ({ title, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localTitle, setLocalTitle] = useState(title);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) inputRef.current?.focus();
  }, [isEditing]);

  useEffect(() => {
    setLocalTitle(title);
  }, [title]);

  const handleSave = () => {
    setIsEditing(false);
    const trimmed = localTitle.trim();
    if (trimmed && trimmed !== title) {
      onChange(trimmed);
    } else {
      setLocalTitle(title);
    }
  };

  return (
    <div>
      {isEditing ? (
        <input
          ref={inputRef}
          className="border border-white rounded px-3 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-150 min-w-[100px] max-w-[200px] text-white"
          value={localTitle}
          onChange={(e) => setLocalTitle(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSave();
            } else if (e.key === "Escape") {
              setIsEditing(false);
              setLocalTitle(title);
            }
          }}
          maxLength={60}
        />
      ) : (
          <MyTooltip content={title}>
            <span
                className="text-lg font-medium cursor-pointer select-none px-1 max-w-[200px] truncate whitespace-nowrap overflow-hidden block text-white"
                onClick={() => setIsEditing(true)}
                tabIndex={0}
                role="button"
                aria-label="Edit title"
              >
                {title}
              </span>
          </MyTooltip>
      )}
    </div>
  );
};

export default NoteTitle;
