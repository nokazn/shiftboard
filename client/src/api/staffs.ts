import { fetcher } from './utils';
import type { Staff } from '../types';

export const getAll = (): Promise<Record<'staffs', Staff[]>> => {
  return fetcher('/api/staffs');
};

export const getDetail = (id: string): Promise<Staff> => {
  return fetcher(`/api/staff/${id}`);
};
