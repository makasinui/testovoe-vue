const getFlag = (currency: string) => {
    const flags: { [key: string]: string } = {
        USD: '🇺🇸',
        EUR: '🇪🇺',
        RUB: '🇷🇺',
    };
    return flags[currency];
};

export {
    getFlag
}