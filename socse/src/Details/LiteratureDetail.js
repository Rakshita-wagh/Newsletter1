import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './LiteratureDetail.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function LiteratureDetail(){
    return(
       <>
       <div className="w-3/4 m-auto">
        <div className="mt-20">
            {data.map((d)=> (
                <div className="bg-white h-[450px] text-black rounded-xl">
                <div>
                    <p>{d.name}</p>
                    <p>{d.review}</p>
                    <button>Read more</button>
                </div>
                </div>
            ))}
        </div>
       </div>
       </>
    );
   
}

const data=[
{
    name: `Srajana`,
    review: `abdcsgthbsndskcsndcskdn`
},
{
    name: `Rakshitha`,
    review: `abdcsgthbsndskcsndcskdn`
},
{
    name: `Vaishnavi`,
    review: `abdcsgthbsndskcsndcskdn`
},
{
    name: `Sindhu`,
    review: `abdcsgthbsndskcsndcskdn`
}
]
export default LiteratureDetail;