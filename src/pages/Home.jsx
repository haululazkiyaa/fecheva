import { useEffect, useState } from "react";

import appService from "../services/appService";
import { useAuth } from "../hooks/useAuth";

function Home() {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const res = await appService.getEvents();
    setEvents(res.data);
    console.log(res.data);
  };

  return (
    <div className="space-y-5">
      <h1 className="text-[32px] font-bold">Selamat Datang, {user.username}</h1>
      <h3 className="text-[24px] font-bold">Kegiatan Mendatang</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {events.map((item, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <div className="avatar">
              <div className="h-[500px] md:h-[400px] lg:h-[300px] w-full rounded-t-xl">
                <img
                  src="https://i.ibb.co.com/PG0y5pj/Rectangle-10.png"
                  alt="Shoes"
                  height="800px"
                />
              </div>
            </div>
            <div className="p-5">
              <h2 className="card-title">Festival Summer Park</h2>
              <p>1000 Pendaftar</p>
              <p className="font-bold">8 Juli 2024</p>
              <p className="font-bold text-[#A8151C]">
                HIMI Informaticans{" "}
                <i className="me-3 fa-solid fa-circle-check"></i>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
