"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
export type OrderItem = {
  id: string;
  name: string;
  style: string;
  width: number;
  height: number;
  colour: string;
  fullness: number;
  layers: number;
  price: number;
};
const Context = createContext<{
  items: OrderItem[];
  add: (item: OrderItem) => void;
  remove: (id: string) => void;
}>({ items: [], add: () => {}, remove: () => {} });
export function Store({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<OrderItem[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      setItems(JSON.parse(sessionStorage.getItem("ohc-order") || "[]"));
    } catch {}
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready) sessionStorage.setItem("ohc-order", JSON.stringify(items));
  }, [items, ready]);
  return (
    <Context.Provider
      value={{
        items,
        add: (item) =>
          setItems((old) => [...old, { ...item, id: crypto.randomUUID() }]),
        remove: (id) => setItems((old) => old.filter((item) => item.id !== id)),
      }}
    >
      {children}
    </Context.Provider>
  );
}
export const useOrder = () => useContext(Context);
