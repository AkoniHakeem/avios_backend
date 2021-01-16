
const validator = {

}
validator.validate = function (value, validators=[]) {

    validators.forEach(element => {
        validator[element](value) 
    });
}

validator.string = function (v) {
    if(!v.substring) throw new Error("Error: string type expected");
}

validator.required = function (v) { 
    if(!v)throw new Error("Error: missing required field")
}

module.exports = validator;
