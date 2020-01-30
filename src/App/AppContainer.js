import { connect } from 'react-redux';
import { updateSelectedOptions } from '../store/actions';
import { App } from './App';

const mapStateToProps = ({ selected }) => ({
  selected
});

export const AppContainer = connect(mapStateToProps, { updateSelectedOptions })(App)
