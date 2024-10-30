"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchClubs = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:8080/api/clubs");
      const clubs = await response.json();
      setLoading(false);
      setClubs(clubs);
      console.log(clubs);
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
            {clubs.map((club) => {
              return (
                <Link
                  href={`/clubs/${club.id}`}
                  key={club.id}
                  className="text-justify"
                >
                  <Image
                    src={club.image}
                    alt={club.name}
                    width={200}
                    height={200}
                  />
                  <h3 className="text-2xl">{club.name}</h3>
                  <p>{club.description}</p>
                  <p>{club.members.length} followers</p>
                </Link>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
