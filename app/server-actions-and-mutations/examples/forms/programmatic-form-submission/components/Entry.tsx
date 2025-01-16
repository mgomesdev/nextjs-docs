"use client";

import { useCallback } from "react";

const Entry = () => {
   const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      console.log(e.ctrlKey || e.metaKey);

      if (e.ctrlKey || e.metaKey || e.key === "Enter" || e.key === "NumpadEnter") {
         e.preventDefault();
         e.currentTarget.form?.requestSubmit();
      }
   }, []);

   return (
      <div>
         <textarea name="entry" rows={20} required onKeyDown={handleKeyDown} data-testid="entry" />
      </div>
   );
};

export default Entry;
