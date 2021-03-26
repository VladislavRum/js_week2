isValid(schema = {}, dataToValidate) {
    //console.log({schema: schema, dataToValidate: dataToValidate})

    if (schema.type === "number" &&  typeof dataToValidate === "number") {
        console.log({schema: schema, dataToValidate: dataToValidate})

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

        if (schema.maximum < dataToValidate) {
            this._errors.unshift('Value is greater than it can be')
        }

        if (schema.minimum > dataToValidate) {
            this._errors.unshift('Value is less than it can be')
        }

        if (schema.type === "number") {
            if (typeof dataToValidate === "number") {
                return true;
            }
        }

    }

    return false;
}
}