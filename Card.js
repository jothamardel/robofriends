import React from 'react';


const Card = ({name, email, id}) => {
    // const { name, email, id } = props;
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src= {`https://robohash.org/${id}?200x200`}  />
            <div>
                <h2>Name: {name}</h2>
                <p>Email: {email}</p>
            </div>
        </div>
    );
}


export default Card;