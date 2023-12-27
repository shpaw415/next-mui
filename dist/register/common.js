export function createregisterKeys({ keys, registerOptions, }) {
    if (!keys.primary)
        return undefined;
    return {
        [keys.primary]: {
            [keys.secondary || 0]: registerOptions,
        },
    };
}
