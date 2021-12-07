import React, { useState, useRef, useEffect } from 'react';
import Tridi from 'react-tridi';
import 'react-tridi/dist/index.css';
import { getsingleuserdata } from '../api/imagesapi';

function TridiComponent() {
    const [isAutoPlayRunning /*,setIsAutoPlayRunning*/] = useState(false);
    const tridiRef = useRef(null);
    var [images, setimages] = useState("./topviewimage");
    const [count, setcount] = useState(21);
    const [data,setData]=useState();
    

    useEffect(() => {
       
            fetchdataa();
    }, [])

    const fetchdataa = async () => {
            
        let uid = { orderid: 2 }
        var dataa = await getsingleuserdata(uid);
        console.log(dataa);
        if (dataa) {
            setData(dataa.users[0].img);
            // setMessage(false)
        }
        console.log(data);
    }

    const sideview = () => {
        tridiRef.current.toggleAutoplay(!isAutoPlayRunning);
        console.log("sideview clicked", isAutoPlayRunning);
        setimages("./sideviewimages");
        setcount(100);
    }
    const topview = () => {
        tridiRef.current.toggleAutoplay(!isAutoPlayRunning);
        console.log("topview clicked", isAutoPlayRunning);
        setimages("./topviewimage");
        setcount(21);
    }
    const inverse = () => {
        document.getElementById('viewerImage').classList.toggle('inverse')
    }
    return (
        <>
            <div>
                <Tridi
                    ref={tridiRef}
                    location={images}
                    // location2="./images"
                    format="png"
                    count={count}
                    autoplaySpeed={200}
                    dragInterval="10"
                    mousewheel
                    showControlBar
                    hideRecord
                // inverse

                />
            </div>
            <div className="controlButton">

                <button onClick={topview}>topview</button>
                <button onClick={sideview}>sideview</button>
                <button onClick={inverse}>inverse</button>
                <img src={data} alt="asdf"></img>

                {/*
         {<button onClick={() => tridiRef.current.prev()}>prev</button>}
         {<button onClick={() => tridiRef.current.next()}>next</button>}
         {<button onClick={() => tridiRef.current.toggleAutoplay(!isAutoPlayRunning)}>{isAutoPlayRunning ? 'Pause' : 'Autoplay'}</button>}*/}

            </div>
        </>
    )
}

export default TridiComponent
