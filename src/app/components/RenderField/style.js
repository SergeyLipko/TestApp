import { StyleSheet } from 'aphrodite';
import { variables as v } from '../../styles/utils/variables';


export const styles = StyleSheet.create({

  fieldWrapper: {
    width: 350,
    marginBottom: 25,
  },

  fieldInput: {
    width: 340,
    height: 35,
    fontSize: 13,
    outline: 'none',
    border: 'none',
    borderBottom: `1px solid ${v.colors.grey}`,
  },

  fieldLabelText: {
    fontSize: 14,
    color: '#7b7b7b',
  },

  fieldErrorText: {
    fontSize: 14,
    color: 'red',
  },

});