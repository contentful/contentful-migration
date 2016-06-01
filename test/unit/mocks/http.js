import sinon from 'sinon'

export default function setupHttpMock (promise = Promise.resolve({data: {}})) {
  return {
    get: sinon.stub().returns(promise),
    post: sinon.stub().returns(promise),
    put: sinon.stub().returns(promise),
    delete: sinon.stub().returns(promise)
  }
}
