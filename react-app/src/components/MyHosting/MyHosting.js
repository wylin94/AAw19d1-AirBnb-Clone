import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import MapContainer from "../Maps";

import CreateSpotFormModal from "../CreateSpotFormModal";
import EditSpotFormModal from "../EditSpotFormModal";
import DeleteSpotFormModal from "../DeleteSpotFormModal";

import styles from "./MyHosting.module.css";

function MyHosting() {
	const spots = useSelector((state) => state.session.user.spots);

	const GMapSetting = {
		width: "400px",
		height: "400px",
		lat: 37.0902,
		lng: -95.7129,
		zoom: 3,
	}

	return (
		<>
			<div className={styles.myHostingWrapper}>
				<div className={styles.myHostingLeftContainer}>
					<h1 className={styles.title}>My Hosting Spot</h1>
					<CreateSpotFormModal />
					{spots?.map((spot) => {
						return (
							<div key={spot.id} className={styles.spotContainer}>
								<NavLink to={`/spots/${spot.id}`}>
									<div className={styles.spotInnerContainer}>
										<img
											className={styles.spotCover}
											src={spot?.images[0]?.url}
											alt={spot.name}
										></img>
										<div className={styles.spotInfo}>
											<div>{spot.name}</div>
											<div>
												{spot.city} {spot.state} {spot.country}
											</div>
											<div>${spot.price}/night</div>
										</div>
									</div>
								</NavLink>
								<div>
									<EditSpotFormModal spot={spot} />
								</div>
								<div>
									<DeleteSpotFormModal spot={spot} />
								</div>
							</div>
						);
					})}
				</div>
				<div className={styles.googleMapContainer}>
					<MapContainer spots={spots} GMapSetting={GMapSetting}/>
				</div>
			</div>
		</>
	);
}

export default MyHosting;
