"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);

      const username = 'bhavya123'; // Replace with your actual username
      const password = '0'; // Replace with your actual password
      const credentials = btoa(`${username}:${password}`); // Encode credentials in Base64

      try {
        const response = await fetch("http://localhost:8080/api/events", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${credentials}` // Set the Authorization header
          },
          credentials: 'include' // Include credentials if necessary
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setEvents(data);
        console.log('Parsed data:', data);
      } catch (error) {
        console.error('Error fetching or parsing data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);
  return (
    <div className="w-full h-full space-y-10">
      <main className="w-full flex flex-col justify-center items-center space-y-10">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-10 mx-20">
            {events.map((event) => {
              return (
                <Link
                  href={`/events/${event.id}`}
                  key={event.id}
                  className="text-justify flex items-center flex-col justify-center px-32"
                >
                  <Image
                    src="https://images.pexels.com/photos/29002559/pexels-photo-29002559/free-photo-of-spooky-halloween-jack-o-lanterns-in-foggy-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt={event.name}
                    width={400}
                    height={400}
                    className="w-full"
                  />
                  <div className="space-y-3 p-5 bg-zinc-900">
                    <h3 className="text-xl">{event.name}</h3>
                    <p>{event.description}</p>
                    <p>{event.venue}</p>
                    <p>{event.date}</p>
                    <p>{event.fee}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
