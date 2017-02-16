import { StyleSheet } from 'aphrodite';
import { flexColumn, flexDefault } from '../../styles/utils/mixins';
import { variables as v } from '../../styles/utils/variables';


export const styles = StyleSheet.create({

  wherePickerWrapper: {
    ...flexColumn('center'),
    marginTop: 35,
  },

  wherePickerTitle: {
    marginBottom: 15,
    color: '#7b7b7b',
    fontSize: 14,
    textAlign: 'center',
  },

  selectWrapper: {
    ...flexDefault('center'),
    width: 400,
    position: 'relative',
  },

  pickerSelect: {
    width: 360,
    height: 35,
    fontSize: 12,
    color: '#7b7b7b',
    outline: 'none',
    border: `1px solid ${v.colors.grey}`,
    borderRadius: 2,
  },

  pickerArrow: {
    ...flexDefault('center', 'center'),
    position: 'absolute',
    top: 11,
    right: 25,
    width: 25,
    height: 15,
    backgroundColor: '#fff',
  },

});