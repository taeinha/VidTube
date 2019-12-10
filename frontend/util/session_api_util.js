export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const login = user => {
  // debugger
  return $.ajax({
    method: "POST",
    url: '/api/session',
    data: { user }
  })
};

export const logout = () => (
  $.ajax({
    method: "DELETE",
    url: "/api/session"
  })
);

export const checkEmail = email => {
  return $.ajax({
    method: "GET",
    url: '/api/session',
    data: { email }
  });
};