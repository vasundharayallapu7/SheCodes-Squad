import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Features from "../../components/home/Features/Features.jsx";
import Hero from "../../components/home/Hero/Hero.jsx";

import "./Landing.css";

function Landing() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleGenerate = async (event) => {
    event.preventDefault();

    if (!url) {
      alert("Please enter a YouTube URL");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/generate",
        {
          youtubeUrl: url,
        }
      );

      console.log("Backend Response:", response.data);

      navigate("/dashboard", {
        state: response.data.data,
      });

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to generate study material."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="landing-page">
      <Hero
        url={url}
        setUrl={setUrl}
        onGenerate={handleGenerate}
        loading={loading}
      />

      <Features />
    </div>
  );
}

export default Landing;