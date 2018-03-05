// If you're running on a device or in the Android simulator be sure to change
let BASE_URL = 'http://autosim.azurewebsites.net';
if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://autosim.azurewebsites.net'; // your production server url
} else if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://autosim.azurewebsites.net'; // your production server url
}

export const settings = {
  env: process.env.NODE_ENV,
  BASE_URL : BASE_URL
};

export default settings;