export const FormaterService = {
    formatPrice(value: number) {
        return value.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL'
        });
    },

    limitText(text: string, maxSize: number): string {
        return text.length > maxSize ? `${text.substring(0, maxSize)}...` : text;
    }
}; //End formater service