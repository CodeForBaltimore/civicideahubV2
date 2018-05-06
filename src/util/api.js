import Network from './network';

const Endpoints = {
  IDEAS: 'ideas',
  IDEA: id => (`idea/${id}/location`),
};

function submitIdea(token, idea) {
  return Network.POST(Endpoints.IDEAS, {
    idea,
  }, {
    Authorization: token,
  });
}

export default {
  submitIdea,
};
