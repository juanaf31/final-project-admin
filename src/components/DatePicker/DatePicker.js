import React, { useState, useEffect, useContext } from 'react';
import ReactDatePicker from 'react-datepicker';
import { Button, Table } from 'react-bootstrap';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const Datepicker = () => {
	const [ startDate, setStartDate ] = useState(new Date());
	const [ endDate, setEndDate ] = useState(new Date());

	useEffect(
		() => {
			// getPeriod(startDate, endDate);
		},
		[ startDate, endDate ]
	);
	const handleData = () => {
		let thisStart = moment(startDate).format('YYYY-MM-DD');
		let thisEnd = moment(endDate).format('YYYY-MM-DD');
		console.log(thisStart, thisEnd);
		// getPeriod(thisStart, thisEnd);
	};

	return (
		<div style={{ marginBottom: '10px' }}>
			<div>
				<div
					style={{
						// width: '75%',
						borderRadius: '20px'
						// height: '507px',
						// background: 'rgb(0, 0, 128,0.6)'
					}}
				>
					<div
						style={{
							display: 'flex',
							marginLeft: '0%',
							justifyContent: 'center',
							marginTop: '0px',
							marginBottom: '0px'
						}}
					>
						<ReactDatePicker
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							selectsStart
							startDate={startDate}
							endDate={endDate}
						/>
						<ReactDatePicker
							selected={endDate}
							onChange={(date) => setEndDate(date)}
							selectsEnd
							startDate={startDate}
							endDate={endDate}
							minDate={startDate}
						/>
						<div style={{ marginTop: '-5px' }} className="group">
							<Button
								variant="primary"
								style={{
									borderRadius: '20px',
									fontSize: '10px',
									background: '#1161ee',
									color: 'white'
								}}
								onClick={handleData}
							>
								GET DATA
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Datepicker;
