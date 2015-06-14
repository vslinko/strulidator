// Utilities
import getMessage from './utilities/getMessage'
import createConstraint from './utilities/createConstraint'
import createValueConstraint from './utilities/createValueConstraint'

// Combinators
import createObjectConstraint from './utilities/createObjectConstraint'
import createArrayConstraint from './utilities/createArrayConstraint'
import combineConstraints from './utilities/combineConstraints'

// Validators
import * as validators from './validators'

// Constraints
import * as constraints from './constraints'

export default {
  getMessage,
  createConstraint,
  createValueConstraint,

  validators,

  constraints: {
    createArrayConstraint,
    createObjectConstraint,
    combineConstraints,
    ...constraints
  }
}
