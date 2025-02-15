import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../Redux/Store/store';
export const useAppDispatch = () => useDispatch<AppDispatch>();
