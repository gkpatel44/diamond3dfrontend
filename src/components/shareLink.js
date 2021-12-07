import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ShareIcon from '@material-ui/icons/Share';
import CropFreeOutlinedIcon from '@material-ui/icons/CropFreeOutlined';

function ShareLink() {
    return (
        <div className="sharediv">
            <a href="asdf.com"><WhatsAppIcon style={{ color: "green" }} /></a>
            <a href="asdf.com"><FacebookIcon style={{ color: "blue" }} /></a>
            <a href="asdf.com">< MailOutlineIcon style={{ color: "red" }} /></a>
            <a href="asdf.com"><ShareIcon style={{ color: "black" }} /></a>
            <a href="asdf.com">< CropFreeOutlinedIcon style={{ color: "black" }} /></a>
        </div>
    )
}

export default ShareLink
