const faker = require("faker");

const fakeData = function(){
    let phoneNumber = Math.floor(Math.random() * 89999999 + 10000000);
    return{
        fakeEmail: faker.internet.email(),
        fakePhoneNumber: `7${phoneNumber}`,
        fakeFullName: faker.name.findName(),
    };
};

module.exports = fakeData;