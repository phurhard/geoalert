import React from "react";
import TodayTasks from "./TodayTasks";
import TodoList from "./TodoList"
import NewTask from "./NewTask"
import MapLocation from './MapLocation'
import { BrowserRouter as Route, Router, Link, Routes } from "react-router-dom";
import no_task from "../assets/images/no-task.svg";
function Home() {
  // this is the function dat will render the map image
    // async function mapfunction() {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(success, error);
    //   } else {
    //     alert("Please enable location services on your device")
    //   }
    //   async function success(position) {
    //     const latitude = position.coords.latitude;
    //     const longitude = position.coords.longitude;

    //     const userPosition = { lat: latitude, lng: longitude}
    //     const { Map } = await google.maps.importLibrary("maps");
    //     const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    //     const map = new Map(document.getElementsByClassName("map"), {
    //       zoom: 5,
    //       center: userPosition,
    //       mapId: "currentLocation"
    //     });
    //     const marker = new AdvancedMarkerElement({
    //       map:map,
    //       position: userPosition,
    //       title: "MyLocation"
    //     });
    //   }

    //   function error(err) {
    //     alert("Error, unable to retrieve map at the moment")
    //   }
    // }

    // mapfunction()
  return (
    // <Router>
    <div class="main">
      <div class="main-item">
        <div className="what-are-we">
          <h5>What are we doing today</h5>
        </div>
        <div className="today-task-container">
          <div className="today-task">
            <h6>Today's Tasks</h6>
          </div>
          <div className="today-task-head row">
            <div className="title col-5 g-0">Title</div>
            <div className="time col-3 g-0">Time</div>
            <div className="location col-2 g-0">Location</div>
            <div className="status col-2 g-0">Status</div>
          </div>
          <TodayTasks />
          
          <div className="show-all-tasks text-end ">
            <Link
              to="/todolist"
              className="link-underline link-underline-opacity-0"
            >
              Show all
            </Link>
          </div>
          {/* this section holds the map showwing the current location of the use, will be updated with markers showing the location based tasks */}
          <div className="map markers-today">
            <MapLocation />
          </div>
          
        </div>
      </div>
      <div class="main-no-item d-none">
        <p class="first-p">You don't have any tasks yet</p>
        <img src={no_task} alt="" style={{ width: "100%" }} />
        <p class="second-p">Tasks will appear as soon as you add them here</p>
        <div class="button-center">
          <button> <Link to='/newtask'>Add Tasks</Link></button>
        </div>
      </div>
      
      
    </div>
    
  );
}

export default Home;
