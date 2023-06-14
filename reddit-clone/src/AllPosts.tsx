import React from "react";
import { useParams } from "react-router-dom";

function AllPosts(){
    const { pageNumber } = useParams();
    return <h2>AllPosts; page: {pageNumber}</h2>;
}

export default AllPosts;
