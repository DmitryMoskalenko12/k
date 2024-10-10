const contactFormRequest = (
  url,
  method,
  value,
  setSuccess,
  setLoading,
  setError,
) => {
  setLoading(true);
  fetch(url, {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...value }),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.ok) {
        setLoading(false);
        setSuccess(true);
      } else if (!response.ok) {
        setLoading(false);
        setSuccess(null);
        setError(true);
      } else {
        setSuccess(null);
        setLoading(false);
        setError(true);
      }
    })
    .catch((error) => {
      setSuccess(null);
      setLoading(false);
      setError(true);
    });
};

export default contactFormRequest;
