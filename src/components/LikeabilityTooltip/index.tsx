import React from "react";
import "./LikeabilityTooltip.scss";
import { Profile } from "../../contextAPI/reducer";

const LikeabilityTooltip: React.FC = ({ children }) => {
  return (
    <div className="LikeabilityTooltip" data-text="">
      {children}
      <table className="Content">
        <thead>
          <th>gostam</th>
          <th>não gostam</th>
        </thead>
        <tr>
          <td>07%</td>
          <td>93%</td>
        </tr>
      </table>
    </div>
  );
};

export default LikeabilityTooltip;
