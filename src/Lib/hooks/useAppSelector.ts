import { useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '../../Redux/Store/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
