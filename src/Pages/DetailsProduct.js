import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";
import axios from "axios";
import Title from "../Components/Title";

function UserDetails() {
    // handle id 
    // history location match 

    const params = useParams();
    // console.log(params.id); // --> API

    const [details, setDetails] = useState({})

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/" + params.id)
            .then((res) => setDetails(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <Title head="User Details" />
            <div className="d-flex col-lg-6">
                <Card

                    img={details.image}
                    title={details.title}
                    about={details.description}
                    categ={details.category}
                    prices={`${details.price} $$`}
                    add={`/user/${details.id}`}
                />

            </div>

        </>
    )
}

export default UserDetails;
