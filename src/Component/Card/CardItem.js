import React from 'react';

const CardItem = (props) => {
    const { flight_number,upcoming, links, launch_year, launch_success, launch_date_local, rocket } = props.card
    return (
        <div className="col-md-3">


            <div className="card" >
                <img  src={links.mission_patch} className="card-img-top" alt="..."/>
                <div className ="card-body">
                <h5 className ="card-title">{rocket.rocket_name}</h5>
                {upcoming   ? <p> True</p> : <p> No upcoming</p> }

                {launch_success ? <p> Launch Status : Success </p> : <p> Launch Status : Failure</p> }

                <p>{flight_number}</p>
            
                </div>
            </div>
        </div>
    );
};

export default CardItem;