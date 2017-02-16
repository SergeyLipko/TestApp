import { StyleSheet } from 'aphrodite';
import { flexDefault } from '../../styles/utils/mixins';
import { variables as v } from '../../styles/utils/variables';


export const styles = StyleSheet.create({

  pickerTitleWrapper: {
    ...flexDefault('center'),
    width: 400,
    marginTop: 35,
    marginBottom: 15,
  },

  pickerError: {
    fontSize: 14,
    textAlign: 'center',
    color: 'red',
  },

  pickerTitle: {
    color: '#7b7b7b',
    fontSize: 14,
    textAlign: 'center',
  },

  pickerFieldsWrapper: {
    ...flexDefault('center'),
  },

  pickerButton: {
    width: 120,
    height: 45,
    fontSize: 13,
    color: '#7b7b7b',
    border: `1px solid ${v.colors.grey}`,
    backgroundColor: 'transparent',
    outline: 'none',
    borderRadius: 2,
    cursor: 'pointer',
    transition: '0.2s ease',
    ':hover': {
      backgroundColor: v.colors.blue,
      color: '#fff',
      border: 'none',
    },
    ':focus': {
      backgroundColor: v.colors.blue,
      color: '#fff',
      border: 'none',
    }
  },

});