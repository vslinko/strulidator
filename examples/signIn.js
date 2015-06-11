import {constraints} from '../src'

const {
  createObjectConstraint,
  createObjectKeysConstraint,
  createArrayConstraint,
  combineConstraints,
} = constraints

const {notNull, notEmpty, string, email} = constraints

const signInValidator = combineConstraints({
  keys: createObjectKeysConstraint({
    email: true,
    password: true,
    items: false,
  }),
  values: createObjectConstraint({
    email: combineConstraints({
      notNull,
      notEmpty,
      string,
      email,
    }),
    password: string,
    items: combineConstraints({
      notEmpty,
      array: createArrayConstraint(
        string
      )
    })
  })
})

const print = value => console.log(require('util').inspect(value, {depth: null}))

print(signInValidator({
  email: 'vslinko@yahoo.com',
  password: '',
  items: ['']
}))
