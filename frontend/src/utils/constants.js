
export const configApi = {
  url: 'https://api.photosave.nomoredomains.work/',//"https://mesto.nomoreparties.co/v1/cohort-30/",
   headers: {
   authorization: `Bearer ${localStorage.getItem('token')}`,
    "content-type": "application/json",
   },
};