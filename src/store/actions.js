const combination = {
  'good': 'cheap',
  'fast': 'good',
  'cheap': 'fast'
};

const updateSelected = selected => ({
  type: 'CHANGE_SELECTED',
  value: selected
});

export const updateSelectedOptions = value => (dispatch, getState) => {  
  const { selected } = getState();
  const newSelected = [...selected];

  if (newSelected.length === 0) {
    newSelected.push(value);
  } else {
    if (newSelected.length === 1 && newSelected[0] !== value) {
      newSelected.push(value);
    } else {
      if (newSelected.length === 2  && newSelected.includes(combination[value]) &&
          newSelected[0] !== value && newSelected[1] !== value) {
        newSelected.splice(newSelected.indexOf(combination[value]), 1);
        newSelected.push(value);
      }
    }
  }

  dispatch(updateSelected(newSelected));
};
