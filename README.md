# strulidator

> Declarative validator for complex deep structures.

[![](https://img.shields.io/circleci/project/vslinko/strulidator.svg)](https://circleci.com/gh/vslinko/strulidator)
[![](https://img.shields.io/codecov/c/github/vslinko/strulidator.svg)](https://codecov.io/github/vslinko/strulidator)
[![](https://img.shields.io/github/issues/vslinko/strulidator.svg)](https://github.com/vslinko/strulidator/issues)

[![](https://img.shields.io/david/vslinko/strulidator.svg)](https://david-dm.org/vslinko/strulidator)
[![](https://img.shields.io/david/dev/vslinko/strulidator.svg)](https://david-dm.org/vslinko/strulidator#info=devDependencies)
[![](https://img.shields.io/david/peer/vslinko/strulidator.svg)](https://david-dm.org/vslinko/strulidator#info=peerDependencies)
[![](https://img.shields.io/david/optional/vslinko/strulidator.svg)](https://david-dm.org/vslinko/strulidator#info=optionalDependencies)

[![](https://img.shields.io/npm/dm/strulidator.svg)](https://www.npmjs.com/package/strulidator)
[![](https://img.shields.io/github/stars/vslinko/strulidator.svg)](https://github.com/vslinko/strulidator)
[![](https://img.shields.io/github/forks/vslinko/strulidator.svg)](https://github.com/vslinko/strulidator)

[![](https://img.shields.io/npm/v/strulidator.svg)](https://www.npmjs.com/package/strulidator)
[![](https://img.shields.io/npm/l/strulidator.svg)](https://github.com/vslinko/strulidator/blob/master/LICENSE)

[![](https://img.shields.io/gratipay/vslinko.svg)](https://gratipay.com/~vslinko/)
[![](https://img.shields.io/bountysource/team/vslinko/activity.svg)](https://www.bountysource.com/people/29603-vslinko)

[![](https://img.shields.io/badge/gitter_chat-strulidator-brightgreen.svg)](https://gitter.im/vslinko/strulidator)

## TODO

At current moment strulidator isn't ready for production.
If you want to help me with release please read [the first issue](https://github.com/vslinko/strulidator/issues/1).

## Reference

```js
type Validator = (value: any) => boolean

type Constraint = (value: any) => ConstraintResult

type ConstraintResult = {
  valid: boolean,
  message: string | void,
  children: ConstraintResultMap | ConstraintResultArray | void
}

type ConstraintResultMap = {
  [key: string]: ConstraintResult
}

type ConstraintResultArray = Array<ConstraintResult>
```

## Usage

```js
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

print(signInValidator({
  email: 'vslinko@yahoo.com',
  password: '',
  items: ['']
}))
```

```
{ valid: true,
  message: null,
  children:
   { keys: { valid: true, message: null, children: null },
     values:
      { valid: true,
        message: null,
        children:
         { email:
            { valid: true,
              message: null,
              children:
               { notNull: { valid: true, message: null, children: null },
                 notEmpty: { valid: true, message: null, children: null },
                 string: { valid: true, message: null, children: null },
                 email: { valid: true, message: null, children: null } } },
           password: { valid: true, message: null, children: null },
           items:
            { valid: true,
              message: null,
              children:
               { notEmpty: { valid: true, message: null, children: null },
                 array:
                  { valid: true,
                    message: null,
                    children: [ { valid: true, message: null, children: null } ] } } } } } } }
```
