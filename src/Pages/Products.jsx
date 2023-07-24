import { useEffect, useState } from "react";
import { ProductCard } from "../Components/ProductCard";
export const Products = ({cat}) => {
  const [dbdata, setData] = useState([]);
  // const api = "";

  // const allData = async () => {
  //   let res= await fetch('http://localhost:8080/data');
  //   let datas = await res.json();

  //   setData(datas.data);
  // };
  // useEffect(() => {
  //   allData();
  // }, []);
  useEffect(() => {
    fetch("http://localhost:3030/data")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        // console.log(resp[0].women);
        // console.log(resp);
        setData(resp)
        if(cat === "men"){
          setData(resp[0].men)
        }
        else if(cat === "women"){
          setData(resp[0].women)
        }
        else{
          setData(resp[0].kid)
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [cat]);

 
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr",
          flexWrap: "wrap",
        }}
      >
        {dbdata.map((el) => {
          return <ProductCard {...el} />;
        })}
      </div>
    </div>
  );
};
