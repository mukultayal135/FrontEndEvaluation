export const BACKEND_URL = 'http://localhost:8000/api';

export const GET_EVENT_DATA = {
  url: 'events',
  method: 'get',
};

export const UPDATE_EVENT_DATA = (id) => ({
  url: `/events/${id}`,
  method: 'patch',
});
