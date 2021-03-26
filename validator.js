class Validator {
  constructor() {
    this._errors = [];
  }

  get Errors() {
    return this._errors;
  }

  /**
   *
   * @param schema
   * @param dataToValidate
   * @returns {boolean}
   */
  isValid(schema = {}, dataToValidate) {

    if (schema.type === "number" &&  typeof dataToValidate === "number") {
      console.log({schema: schema, dataToValidate: dataToValidate})
    }

    if ("maximum" in schema){
      if (schema.maximum > dataToValidate) {
        return true;
      }
    }

    if ("minimum" in schema) {
      if (schema.minimum < dataToValidate) {
        return true;
      }
    }

    if (schema.type === "number") {
      if (typeof dataToValidate === "number") {
        return true;
      }
    }

    if (schema.enum > dataToValidate) {
      this._errors.unshift('The enum does not support value')
    }

    if (schema.type === "string") {
      if (typeof dataToValidate === "string") {
        return true;
      }
    }

    if (schema.type === "boolean") {
      if (typeof dataToValidate === "boolean") {
        return true;
      }
    }

    if (schema.type === "object") {
      if (typeof dataToValidate === "object") {
        return true;
      }
    }

    if (schema.type === "array") {
      if (typeof dataToValidate === "array") {
        return true;
      }
    }

//string

    if (schema.type === "string" &&  typeof dataToValidate === "string") {
      console.log({schema: schema, dataToValidate: dataToValidate})
    }

    if ("minLength" in schema){
      if (schema.minLength > dataToValidate) {
        return true;
      }
    }

    return false;
  }
}
