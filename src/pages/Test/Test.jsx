import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebaseConfig";

const listRef = ref(storage, "gs://dogaturizm-5858.appspot.com");

const Test = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await listAll(listRef);
        const urls = await Promise.all(
          res.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            return url;
          })
        );
        setItems(urls);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Görseller FireBase Üzerinden Çekildi!</h1>
      <ul>
        {items.map((url, index) => (
          <li key={index}>
            <img src={url} style={{ width: "100px", height: "auto" }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
