# strulidator

> Declarative validator for complex deep structures.

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
