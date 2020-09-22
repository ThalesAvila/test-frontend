interface Input {
  positive: number | null;
  negative: number | null;
}

interface Output {}

export const calcLikePercentage = ({ negative, positive }: Input) => {
  let likePercentage = 0;
  let dislikePercentage = 0;
  // Precisa certificar de que o typeof de 'positive' e 'negative são number
  const total = Number(positive) + Number(negative);

  // Se o total for diferente de zero, significa que likes ou deslikes foram recebidos
  if (total !== 0) {
    if (typeof positive === "number") {
      likePercentage = Math.ceil((positive * 100) / total);
    }

    dislikePercentage = 100 - likePercentage;
    return { likePercentage, dislikePercentage };
  }

  /* Se o total for igual a zero, significa que likes ou deslikes NÃO foram recebidos,
     logo não há o que ser calculado.
  */
  return {};
};

export const percentageMask = (value: number | null): string => {
  if (Number(value) >= 10 || value === 0) {
    return `${Number(value)}%`;
  }
  return `0${value}%`;
};
