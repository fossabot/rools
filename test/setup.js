const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const chaiShallowDeepEqual = require('chai-shallow-deep-equal');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(chaiAsPromised);
chai.use(chaiShallowDeepEqual);
chai.use(sinonChai);

global.chai = chai;
global.sinon = sinon;
global.expect = chai.expect;
global.should = chai.should();
