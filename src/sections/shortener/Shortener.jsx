import React, { useState } from "react";
import Btn from "../../components/btn/Btn";

import "./shortener.css";
function Shortener() {
  const [text, setText] = useState("");
  const [links, setLinks] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!text) {
      alert("Input is empty");
    } else {
      await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
        .then(async response => {
          const data = await response.json();
          if (data.ok) {
            setLinks([
              ...links,
              { data: data.result, copied: false, id: links.length },
            ]);
            setText("");
          } else {
            alert(`There is an error creating the link ${data.error}`);
          }
        })
        .catch(err => {
          alert(`There is an error creating the link ${err}`);
        });
    }
  };

  const handleCopy = (link, id) => {
    navigator.clipboard.writeText(link.data.full_short_link);
    const mutate = { ...link, copied: true };
    const newLinks = links.filter(link => link.id !== id);
    newLinks.splice(id, 0, mutate);

    setLinks(newLinks);

    const timeoutId = setTimeout(() => {
      setLinks(prevLinks => {
        const reset = { ...mutate, copied: false };
        const updatedLinks = prevLinks.filter(link => link.id !== id);
        updatedLinks.splice(id, 0, reset);
        return updatedLinks;
      });
    }, 2000);

    setTimeouts(prevTimeouts => [
      ...prevTimeouts.slice(0, id),
      timeoutId,
      ...prevTimeouts.slice(id + 1),
    ]);
  };

  console.log("links", links);

  return (
    <section className="shortener__container section__padding container">
      <div className="shortener ">
        <form onSubmit={handleSubmit} className="shortener__form  ">
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
            <h6>{link.data.original_link}</h6>

            <div className="newlink">
              <p>{link?.data?.full_short_link}</p>
              <Btn
                label={link.copied ? "Copied" : "Copy"}
                buttonStyle={"squared"}
                onClick={() => handleCopy(link, id)}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Shortener;
