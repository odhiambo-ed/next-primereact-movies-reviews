'use client'
import React, {useState} from 'react'
import { Menubar } from 'primereact/menubar'
import { InputText } from 'primereact/inputtext'
import { useRouter } from 'next/navigation'

function Header() {
  const [search, setSearch] = useState('');

  // Use Router to navigate to search page
  const router = useRouter();

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      router.push(`/search/movie?query=${search}`);
      setSearch("");
    }
  }

    const start = (
      <div className="flex gap-4 align-items-center justify-content-center">
        <img
          alt="logo"
          src="/images/logo.png"
          height="40"
          className="mr-2 h-[40px] md:pl-10 md:pr-2"
        />
        <span className="text-2xl font-bold hidden md:inline-block">
          Movies
        </span>
      </div>
    );
    const end = (
      <form onSubmit={handleSubmit}>
        <InputText
          placeholder="Search"
          type="text"
          className="w-full px-4 py-1 bg-gray-600 text-yellow-50"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
    );

  return (
    <div className="card bg-gray-900">
      <Menubar start={start} end={end} className="bg-gray-900" />
    </div>
  );
}

export default Header