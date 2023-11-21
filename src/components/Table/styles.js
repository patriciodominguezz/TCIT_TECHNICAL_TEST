import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  createForm: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  column: {
    flex: 1,
    marginRight: 16,
  },
  textField: {
    width: '100%',
  },
  filterTextField: {
    width: '500px',
  },
  createButton: {
    width: '100%',
    backgroundColor: 'green',
  },
  scrollContainer: {
    maxHeight: "400px",
  },
  createFormCard: {
    height: "100%",
  },
  tableCard: {
    height: "100%",
  },
}));

export default useStyles;