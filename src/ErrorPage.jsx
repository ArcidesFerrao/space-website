import React from 'react';
import { useRouteError } from 'react-router-dom';
import './Components/Styles/ErrorPage.css';

export default function ErrorPage() {

    const error = useRouteError();
    console.log(error);

  return (
    <div id='error-page'>
        <h2>Upss!</h2>
        <h3>Nothing to see here...</h3>
    </div>
  )
}
