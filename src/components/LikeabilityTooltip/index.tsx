import React from "react";
import "./LikeabilityTooltip.scss";
import { percentageMask } from "../../services/utils";

interface Input {
  likePercentage: number | null;
  dislikePercentage: number | null;
}

const LikeabilityTooltip: React.FC<Input> = ({
  children,
  likePercentage,
  dislikePercentage,
}) => (
  <div className="LikeabilityTooltip">
    {children}
    {/* Exibir tooltip apenas se likePercentage ou dislikePercentage estiverem definidos */}

    <table className="Content">
      <thead>
        <tr>
          <th>gostam</th>
          <th>não gostam</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{percentageMask(likePercentage)}</td>
          <td>{percentageMask(dislikePercentage)}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default LikeabilityTooltip;
