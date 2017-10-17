'use strict';

/**
  Slices everything into groups based on a predicate
  At the start of each group, `getPredicate` is called with the remaining list
  Then things are added to the group until the predicate no longer holds
  The group is added to the list of slices, and another cycle of `getPredicate` is started recursively
*/

const createPredicateSlicer = function (getPredicate) {
  return function sliceByPredicate (steps, sliced = []) {
    if (steps.length === 0) {
      return sliced;
    }

    const predicate = getPredicate(steps);
    const endMarker = steps.findIndex((step) => !predicate(step));

    if (endMarker === -1) {
      sliced.push(steps);

      return sliced;
    }

    const uninterrupted = steps.slice(0, endMarker);
    const rest = steps.slice(endMarker);

    sliced.push(uninterrupted);

    return sliceByPredicate(rest, sliced);
  };
};

module.exports = createPredicateSlicer;
