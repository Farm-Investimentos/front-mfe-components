const format = (valor, maximumFractionDigits = 2) => {
    if (valor !== 0 && !valor) {
        return null;
    }
    return parseFloat(valor)
        .toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: maximumFractionDigits,
            maximumFractionDigits,
        })
        .replace(/\s/g, '');
};

const formatWithoutPrefix = (valor, maximumFractionDigits = 2) => {
    if (valor !== 0 && !valor) {
        return null;
    }
    return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: maximumFractionDigits,
        maximumFractionDigits,
    }).format(parseFloat(valor));
};

export default {
    format,
    formatWithoutPrefix,
};
