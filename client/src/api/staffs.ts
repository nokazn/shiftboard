import { fetcher } from './utils';
import type { Staff } from '../types';

export const getAll = () => fetcher<Record<'staffs', Staff[]>>('/api/staffs');

export const getDetail = (id: string) => fetcher<Staff>(`/api/staff/${id}`);
