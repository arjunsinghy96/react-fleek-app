import React from "react";
import { useParams } from "react-router-dom";

export default function CreateAddress() {
	let params = useParams();
	return (<p>Address : {params.address }</p>)
	
}