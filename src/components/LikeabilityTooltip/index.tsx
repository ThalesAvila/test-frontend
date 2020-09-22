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
}) => {
  return (
    <div className="LikeabilityTooltip" data-text="">
      {children}
      {/* Exibir tooltip apenas se likePercentage ou dislikePercentage estiverem definidos */}

      <table className="Content">
        <thead>
          <th>gostam</th>
          <th>não gostam</th>
        </thead>
        <tr>
          <td>{percentageMask(likePercentage)}</td>
          <td>{percentageMask(dislikePercentage)}</td>
        </tr>
      </table>
    </div>
  );
};

export default LikeabilityTooltip;
