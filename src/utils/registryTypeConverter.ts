export const registryTypeMap: Record<string, string> = {
  start: 'Entrada',
  end: 'Saída',
  interval_start: 'Início intervalo',
  interval_end: 'Fim intervalo',
};

export const convertRegistryType = (registryType: string | undefined) => {
  if (registryType) {
    const newStatusLabel = registryTypeMap[registryType];

    return newStatusLabel;
  }
};
