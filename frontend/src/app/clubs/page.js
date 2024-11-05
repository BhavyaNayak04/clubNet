"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Clubs() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClubs = async () => {
      setLoading(true);

      const username = 'bhavya123'; // Replace with your actual username
      const password = '0'; // Replace with your actual password
      const credentials = btoa(`${username}:${password}`); // Encode credentials in Base64

      try {
        const response = await fetch("http://localhost:8080/api/clubs", {
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
        setClubs(data);
        console.log('Parsed data:', data);
      } catch (error) {
        console.error('Error fetching or parsing data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClubs();
  }, []);

  return (
      <div className="w-full h-full space-y-10">
        <h3>Hi! see all the clubs here!</h3>
        <main className="w-full flex flex-col justify-center items-center space-y-10">
          {loading ? (
              <p>Loading...</p>
          ) : (
              <div className="mx-auto grid grid-cols-3 gap-10 ">
                {clubs.map((club) => (
                    <Link
                        href={`/clubs/${club.id}`}
                        key={club.id}
                        className="text-justify flex items-center flex-col justify-center space-y-5"
                    >
                      <Image
                          src={club.image}
                          alt={club.name}
                          width={200}
                          height={200}
                      />
                      <div>
                        <h3 className="text-xl">{club.name}</h3>
                        <p>{club.description}</p>
                        <p>{club.members.length} followers</p>
                      </div>
                    </Link>
                ))}
              </div>
          )}
        </main>
      </div>
  );
}
