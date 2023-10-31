import axios from "axios";

const createNewLocation = async (locationObj) => {
  try {
    let response = await axios.post(
      "http://localhost:4433/location/createNewLocation",
      locationObj
    );

    return response.data.row;
  } catch (error) {
    return error.response.status;
  }
};
const getLocations = async (locationObj) => {
  try {
    let response = await axios.post(
      "http://localhost:4433/location/getLocations",
      locationObj
    );
    console.log(response, "responseresponseresponseresponse from map apis ");
    return response.data;
  } catch (error) {
    throw new Error("Error occured while getting location");
  }
};

const deleteLocationApi = async (locationId) => {
  try {
    let response = await axios.post(
      "http://localhost:4433/location/deleteLocation",
      locationId
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error occured while deleting some location");
  }
};
const updateLocationDataApi = async (locationObj) => {
  try {
    let response = await axios.post(
      "http://localhost:4433/location/updateLocation",
      locationObj
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error occured while updating part data");
  }
};

export {
  createNewLocation,
  getLocations,
  deleteLocationApi,
  updateLocationDataApi,
};
