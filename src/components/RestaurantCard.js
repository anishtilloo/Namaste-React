import { RES_IMAGE_CDN } from "../utils/constants";

const RestaurnatCard = (props) => {
    const {info} = props.resData;
    return (
        <div className="card-container">
            <div className="res-img">
                <img src={RES_IMAGE_CDN + info.cloudinaryImageId} alt="RESTAURANT IMG" />
            </div>
            <div className="res-info">
                <h3 className="res-name">{info.name}</h3>
                <h3>{info.avgRating}</h3>
                <h3>{info.cuisines.join(', ')}</h3>
                <h3>{info.costForTwo}</h3>
                <h3>{info.sla.deliveryTime} min</h3>
                <h3>{info.areaName}</h3>
            </div>
        </div>
    )
} 

export default RestaurnatCard;