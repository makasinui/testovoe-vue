import axios from 'axios';
import type { TCurrency } from '../../types';

export const httpGetCurrency = async (): Promise<TCurrency[]> => {
    const { data } = await axios.get(`https://status.neuralgeneration.com/api/currency`);

    return data;
}