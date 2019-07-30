export class CustomerDetails {

    constructor(firstname, surname, street, zipCode, city) {
        this.firstname = firstname;
        this.surname = surname;
        this.street = street;
        this.zipCode = zipCode;
        this.city = city;
    }

    get Firstname() {
        return this.firstname;
    }

    get Surname() {
        return this.surname;
    }

    get Street() {
        return this.street;
    }

    get ZipCode() {
        return this.zipCode;
    }

    get City() {
        return this.city;
    }

}

export default class Invoice{

    static invoice = {
        title,
        message,
        customer_details,
        logoPath,
    }

}
