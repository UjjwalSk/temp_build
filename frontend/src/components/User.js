import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import UserComp from "./UserComp";
import { useNavigate } from "react-router-dom";

const User = () => {

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user") == null) {
      navigate("/");
    }
  });

  const [drivers, setDrivers] = useState([]);
  useEffect(() => {
    getDrivers();
  }, []);

  const getDrivers = async () => {
    let result = await fetch("http://localhost:5001/mydrivers", {});
    result = await result.json();
    setDrivers(result);
  };
  console.log(drivers);

  const searchHandle = async () => {
    // let key = event.target.value;
    let key = val1;
    let key2 = val2;

    // console.log('key is: ',key);
    if (key && !key2) {
      let result = await fetch(`http://localhost:5001/search/${key}/x`);
      result = await result.json();
      if (result) {
        setDrivers(result);
      }
    } else if (key2 && !key) {
      let result = await fetch(`http://localhost:5001/search/x/${key2}`);
      result = await result.json();
      if (result) {
        setDrivers(result);
      }
    } else if (key && key2) {
      let result = await fetch(`http://localhost:5001/search/${key}/${key2}`);
      result = await result.json();
      if (result) {
        setDrivers(result);
      }
    } else {
      getDrivers();
    }
    // console.log("drivers are ", drivers);
  };

  const [val1, setVal1] = useState('');

  const [val2, setVal2] = useState('');

  useEffect(() => {
    searchHandle();
  }, [val1, val2]);

  return (
    <div>
      <Navbar />
      <form className="mt-5 mb-2 w-100" onSubmit={(e) => { }}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title text-lg mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-globe-central-south-asia" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.882 1.731a.482.482 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.721.721 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a.996.996 0 0 0-.462-.04 7.03 7.03 0 0 1 2.45-2.027Zm-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.78.78 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.454.454 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282a.61.61 0 0 0 .04-.001 7.003 7.003 0 0 1-12.658.905Z" />
            </svg> &nbsp; To Where
          </h3>
          <table cellPadding={10} className="mx-auto">
            <tr>
              <td>
                <label className='text-sm'>Where: </label>
                <input
                  type="text"
                  className="form-control mt-1 text-md"
                  value={val1} onChange={(e) => setVal1(e.target.value)}
                />
              </td>
              <td>
                <label className='text-sm'>To: </label>
                <input
                  type="text"
                  className="form-control mt-1 text-md"
                  value={val2} onChange={(e) => setVal2(e.target.value)}
                />
              </td>
            </tr>
          </table>
        </div>
      </form>
      <table class="table border w-75 mx-auto text-center">
        <thead class="thead thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">User</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
          </tr>
        </thead>
        <tbody className="text-md">
          {
            drivers.result !== 'n p f' && drivers.map((item, ind) => (
              <UserComp id={ind + 1} email={item.email} where={item.where} to={item.to} />
            ))}
        </tbody>
      </table>
    </div>
  )
};

export default User;
