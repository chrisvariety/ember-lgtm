export default function(validator, validatee) {
  return new Ember.RSVP.Promise(function(resolve, reject) {
    validator.build().validate(validatee).then(function(validationResult) {
      if (validationResult.valid) {
        resolve();
      } else {
        var key, errors = [];
        for (key in validationResult.errors) {
          if (validationResult.errors.hasOwnProperty(key) && !Ember.isEmpty(validationResult.errors[key])) {
            errors = errors.concat(validationResult.errors[key]);
          }
        }
        reject({status: 426, errors: errors});
      }
    });
  });
};
