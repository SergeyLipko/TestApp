import { StyleSheet } from 'aphrodite';
import { flexColumn } from '../../styles/utils/mixins';
import { variables as v } from '../../styles/utils/variables';


export const styles = StyleSheet.create({

  formHeadWrapper: {
    ...flexColumn(),
    width: 400,
    marginBottom: 35,
  },

  formHeadTitle: {
    padding: '25px 0',
    fontSize: 20,
    color: v.colors.blue,
  },

  formHeadProgressWrapper: {
    width: '100%',
    height: 8,
    borderTop: `1px solid ${v.colors.grey}`,
    borderBottom: `1px solid ${v.colors.grey}`,
  },

  formHeadProgressLine: {
    height: 8,
    backgroundColor: v.colors.blue,
  },

  ProgressLineFirst: { width: '33.333%' },
  ProgressLineSecond: { width: '66.666%' },
  ProgressLineLast: { width: '100%' }

});