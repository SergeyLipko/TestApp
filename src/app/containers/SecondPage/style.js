import { StyleSheet } from 'aphrodite';
import { formCard, flexColumn, flexDefault } from '../../styles/utils/mixins';


export const styles = StyleSheet.create({

  formCard: {
    ...formCard(),
    ...flexColumn('space-between'),
    visibility: 'hidden',
    opacity: 0,
  },

  formCardAppears: {
    visibility: 'visible',
    opacity: 1,
    transition: '0.6s ease',
  },

  pageFormFlow: {
    marginTop: -40,
  },

  agePickerTitleWrapper: {
    ...flexDefault('center'),
    width: 400,
    marginBottom: 15,
  },

  agePickerWrapper: {
    width: 400,
    ...flexDefault('center'),
  },

  agePickerTitle: {
    color: '#7b7b7b',
    fontSize: 14,
    textAlign: 'center',
  },

  customTest1: {
    visibility: 'hidden',
  }

});
