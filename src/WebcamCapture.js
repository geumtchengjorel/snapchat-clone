import React, {useCallback, useRef } from 'react'
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from './features/cameraSlice';
import { useHistory } from 'react-router-dom';
import "./WebcamCapture.css";

const videoConstrains = {
    width: 250,
    height: 400,
    facingMode: "user"
};

function WebcamCapture() {
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();

    //  BEM naming

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
        history.push("/preview");
    }, [webcamRef, dispatch, history])

    return (
        <div className="webcamCapture">
            <Webcam 
                audio = {false}
                width = {videoConstrains.width}
                height = {videoConstrains.height}
                ref = {webcamRef}
                screenshotFormat = "image/jpeg"
                videoConstraints = {videoConstrains}
            />

            <RadioButtonUncheckedIcon
                className = "webcamCapture__button"
                onClick = {capture}
                fontSize = "large" 
            />            
        </div>
    )
}

export default WebcamCapture;


