export const statusMap: Record<string, string> = {
  PENDING: 'PENDENTE',
  REJECTED: 'REJEITADO',
  ACCEPTED: 'ACEITO',
};

export const convertStatusLabel = (status: string | undefined) => {
  if (status) {
    const newStatusLabel = statusMap[status];

    return newStatusLabel;
  }
};
