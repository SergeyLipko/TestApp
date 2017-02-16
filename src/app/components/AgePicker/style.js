import { StyleSheet } from 'aphrodite';
import { variables as v } from '../../styles/utils/variables';


export const styles = StyleSheet.create({

  ageField: {
    width: 115,
    height: 40,
    fontSize: 13,
    color: '#7b7b7b',
    border: `1px solid ${v.colors.grey}`,
    backgroundColor: 'transparent',
    outline: 'none',
    borderRadius: 2,
  },

  ageFieldInvalid: {
    width: 115,
    height: 40,
    fontSize: 13,
    color: '#7b7b7b',
    border: '1px solid red',
    backgroundColor: 'transparent',
    outline: 'none',
    borderRadius: 2,
  }

});