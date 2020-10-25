import React, {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";

const Details = () => {
    const location = useLocation();
    const [owner, setOwner] = useState('');
    const [createdAt, setCraetedAt] = useState('');
    const [body, setBody] = useState('');
    const [itemTitle, setItemTitle] = useState('');
    const [itemId, setItemId] = useState('');
    const [status, setStatus] = useState('');
    const detailsValues = {
        color: 'blue',
      };
      const IssueContianer = {
padding: '10px',
border: '1px solid black',
      };
    useEffect(() => {
        const date = new Date(location.state.createdAt).toDateString();
        setOwner(location.state.detail);
        setCraetedAt(date);
        setBody(location.state.body);
        setItemTitle(location.state.title);
        setItemId(location.state.id);
        setStatus(location.state.status);
     }, [location, setOwner, setItemId,setItemTitle,setStatus, setCraetedAt]);

    return (
        <div  style={IssueContianer}>
        <h1>Issue details</h1>
        <h3>Issue Title: <span style={detailsValues}>{itemTitle}</span></h3>
        <h4>Issue Id: <span style={detailsValues}>{itemId}</span></h4>
        <h4>Status: <span style={detailsValues}>{status}</span></h4>
        <h4>Owner: <span style={detailsValues}>{owner}</span></h4>
        <h4>Created At: <span style={detailsValues}>{createdAt}</span></h4>
        <h4>Body: <span style={detailsValues}>{body}</span></h4>
        </div>
    );
}
export default Details;