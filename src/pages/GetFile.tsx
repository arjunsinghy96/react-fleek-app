import React from "react";
import { useParams } from "react-router-dom";

export default function GetFile() {
	const params = useParams();
	return (<p>File: {params.file} Address: {params.address}</p>)
}