import { createAction, handleActions } from 'redux-actions';

const INITIAL_STATE = {
  formFields: null,
};


export const SET_FIELDS_TO_STORE = 'form/SET_FIELDS_TO_STORE';
export const setFieldsToStore = createAction(SET_FIELDS_TO_STORE);


