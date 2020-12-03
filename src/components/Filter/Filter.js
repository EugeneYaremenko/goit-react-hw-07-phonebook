import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styes from './filter.module.css';
import fade from './fade.module.css';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <CSSTransition in={true} timeout={250} classNames={fade}>
      <div className={styes.filter}>
        <p>Find contacts by name</p>
        <input
          type="text"
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </div>
    </CSSTransition>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
