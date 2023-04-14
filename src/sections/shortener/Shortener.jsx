import React, { useState } from "react";
import Btn from "../../components/btn/Btn";

import "./shortener.css";
function Shortener() {
  const [text, setText] = useState("");
  const [links, setLinks] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!text) {
      alert("Input is empty");
    } else {
      const shortenedLink = async () => {
        try {
          const response = await fetch(
            `https://api.shrtco.de/v2/shorten?url=${text}`
          );
          const data = await response.json();
          setLinks([
            ...links,
            { data: data.result, copied: false, id: links.length },
          ]);
          setText("");
        } catch (err) {
          alert(`There is an error creating the link ${err}`);
        }
      };

      shortenedLink();
    }
  };

  const handleCopy = (link, id) => {
    navigator.clipboard.writeText(link.data.full_short_link);
    const mutate = { ...link, copied: true };
    const newLinks = links.filter(link => link.id !== id);
    newLinks.splice(id, 0, mutate);

    setLinks(newLinks);
  };

  console.log("links", links);

  return (
    <section className="shortener__container section__padding">
      <form onSubmit={handleSubmit} className="shortener__form  container">
        <input
          type="url"
          placeholder="Shorten a link here!"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <Btn
          label={"Shorten it!"}
          buttonStyle={"squared"}
          onClick={handleSubmit}
        />
      </form>
      {links.map((link, id) => (
        <article className="shortened__links " key={id}>
          <h6>{link?.data?.original_link}</h6>

          <div>
            <p>{link?.data?.full_short_link}</p>
            <Btn
              label={link?.copied ? "Copied" : "Copy"}
              buttonStyle={"squared"}
              onClick={() => handleCopy(link, id)}
            />
          </div>
        </article>
      ))}
    </section>
  );
}

export default Shortener;
