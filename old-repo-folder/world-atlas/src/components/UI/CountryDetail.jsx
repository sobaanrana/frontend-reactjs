import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCountyyIndData } from "../../api/postApi";

export default function CountryDetail() {
  const params = useParams();

  console.log(params);

  const [isPending, startTransition] = useTransition();
  const [countryData, setCountryData] = useState();

  // useEffect(() => {
  //   const res = getCountyyData();
  //   console.log(res);
  // }, []);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountyyIndData(params.id);
      console.log(res);
      setCountryData(res.data);
    });
  }, []);

  return <div>countryDetail</div>;
}
