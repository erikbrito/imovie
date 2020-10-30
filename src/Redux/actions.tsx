import { action } from 'typesafe-actions';
import { FilmsTypes, Films } from './types';

export const loadRequest = () => action(FilmsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Films[]) => action(FilmsTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(FilmsTypes.LOAD_FAILURE);