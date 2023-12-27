export interface registerKey {
  primary?: string;
  secondary?: string;
}

interface FieldRegister {
  [key: string]: {
    open: (value: Boolean) => void;
  };
}

export function createregisterKeys<Register>({
  keys,
  registerOptions,
}: {
  keys: registerKey;
  registerOptions: Register;
}) {
  if (!keys.primary) return undefined;
  return {
    [keys.primary]: {
      [keys.secondary || 0]: registerOptions,
    },
  };
}
