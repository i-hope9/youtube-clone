import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Search() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${keyword}`);
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={keyword}
        onChange={handleChange}
      ></input>
      <button>Search</button>
    </form>
  );
}
