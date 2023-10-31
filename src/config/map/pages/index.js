import React, { useState, useEffect } from "react";
import {
  createNewLocation,
  getLocations,
  deleteLocationApi,
  updateLocationDataApi,
} from "../services/mapApis";
const HomePage = () => {
  const [locationData, setLocationData] = useState([]);
  useEffect(() => {
    // getLocationData();
  }, []);
  const getLocationData = async () => {
    try {
      const locationsResponse = await getLocations();
      console.log(locationsResponse, "locationsResponse from same page");
    } catch (error) {
      console.error(error);
    }
  };
  const handleCreateNewLocation = async () => {
    try {
      let payload = {
        name: "test from web",
        notes: "test note from web",
        long: "test long from web",
        lat: "test lat from web",
      };
      const locationsResponse = await createNewLocation(payload);
      console.log(locationsResponse, "locationsResponse from same page");
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteLocation = async () => {
    try {
      let payload = {
        recordId: "3",
      };
      const locationsResponse = await deleteLocationApi(payload);
      console.log(locationsResponse, "locationsResponse from same page");
    } catch (error) {
      console.error(error);
    }
  };
  const handleUpdateLocationData = async () => {
    try {
      let payload = {
        //you can choose here what you want to update
        name: "test from web",
        // notes: "test note from web",
        // long: "test long from web",
        // lat: "test lat from web",
        recordId: 4,
      };
      const locationsResponse = await updateLocationDataApi(payload);
      console.log(locationsResponse, "locationsResponse from same page");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
};

export default HomePage;
