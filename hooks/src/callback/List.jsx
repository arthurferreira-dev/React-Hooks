import { useEffect, useState } from "react";

export function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((result) => setItems(result));
  }, [getItems]);

  return (
    <>
      {items &&
        items.map((item) => <p key={item.id} className="my-2">{item?.title || item?.name}</p>)}
    </>
  );
}