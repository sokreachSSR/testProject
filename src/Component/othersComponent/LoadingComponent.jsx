import React from "react";
import { BeatLoader } from "react-spinners";


export default function LoadingComponent() {
  return (
    <div role="status">
      <div className="mt-8">
        <BeatLoader color="#04AA9C" size={14} />
      </div>
    </div>
  );
}
