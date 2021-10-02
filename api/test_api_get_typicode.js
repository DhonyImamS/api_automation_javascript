const {expect} = require('chai');
const chai = require('chai');
chai.use(require('chai-json-schema'));
const api = require('./../page-object/typicode');
const data = require('./../testdata/schema_typicode');
const scenario = require('./../testcases/testcase_get_typicode');

describe(`${scenario.testcase.description}`, async() => {
    it(`${scenario.testcase.positive.case1}`, async() => {
        // tempat kita nge test
        let response = await api.getTypicode();
        expect(response.status).to.equal(200, "Status Response Tidak Sesuai");
        expect(response.body).to.be.jsonSchema(data.getTypiCodeScheme);
    });

    it(`${scenario.testcase.positive.case2}`, async() => {
        // tempat kita nge test
        let response = await api.getTypicode();
        expect(response.status).to.equal(200, "Status Response Tidak Sesuai");
        response.body.forEach(element => {
            expect(element.id).to.not.equal(null);
        });
    });
});