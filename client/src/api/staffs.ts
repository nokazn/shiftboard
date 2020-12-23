import { fetcher, customFetcher } from './utils';
import type { Staff } from '../types';

export const getAll = () => fetcher<Record<'staffs', Staff[]>>('/api/staffs');
export const getDetail = (id: string) => fetcher<Staff>(`/api/staffs/${id}`);
export const add = (query: { nickname: string }) => customFetcher('POST')<void>('/api/staffs', query);
export const remove = ({ id }: { id: string }) => customFetcher('DELETE')<void>(`/api/staffs/${id}`);
