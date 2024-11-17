function createPatient() {
    let PII = {
        name: "John",
        ssn: "123-45-6789"
    }

    return {
        //public function
        getName: function () {
            return PII.name;
        }
    }
}

const patient2 = createPatient();

console.log(patient2.getName()); //John


