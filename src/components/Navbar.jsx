import React from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { useEffect } from "react";

export default function Navbar() {
  const { q } = useParams();
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${keyword}`);
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleClick = (e) => {
    setKeyword("");
  };
  useEffect(() => setKeyword(q || ""), [q]);

  return (
    <>
      <header className="w-full flex p-4 text-2xl border-b border-zinc-300 mb-4">
        <Link className="flex items-center" to="/" onClick={handleClick}>
          <BsYoutube className="text-3xl text-brand"/>
          <h1 className="font-bold ml-1 text-3xl">Youtube</h1>
        </Link>
        <form className="w-full flex justify-center" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            className="w-7/12 p-2 outline-none bg-black text-gray-500"
            value={keyword}
            onChange={handleChange}
          ></input>
          <button className="bg-zinc-600 px-6">
            <BsSearch />
          </button>
        </form>
      </header>
    </>
  );
}
