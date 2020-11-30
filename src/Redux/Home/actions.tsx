import { action } from 'typesafe-actions';
import { FilmsTypes, Actions, Animations, War } from './types';

export const loadRequest = () => action(FilmsTypes.LOAD_REQUEST);

export const loadSuccess = (actions: Actions[], animations: Animations[], war: War[]) => action(FilmsTypes.LOAD_SUCCESS, { actions, animations, war });

export const loadFailure = () => action(FilmsTypes.LOAD_FAILURE);