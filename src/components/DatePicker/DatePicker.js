import React, { useState, useEffect, useContext } from 'react';
import ReactDatePicker from 'react-datepicker';
import { Button, Dropdown, DropdownButton, Table, Col } from 'react-bootstrap';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect, useSelector } from 'react-redux';
import { getAssets, getReport } from '../../api';
import Card from 'components/Card/Card.jsx';
import ReportPagination from 'components/TablePagination/ReportPagination';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(0),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(0)
	}
}));

const Datepicker = (props) => {
	const [ startDate, setStartDate ] = useState(new Date());
	const [ endDate, setEndDate ] = useState(new Date());

	const listAssets = useSelector((state) => state.assetreducer.listAssets);
	const listReports = useSelector((state) => state.reportreducer.listReports);

	const classes = useStyles();
	const [ id, setID ] = React.useState('');

	const handleChange = (event) => {
		setID(event.target.value);
	};

	useEffect(
		() => {
			props.getAssets();
			// getAssets();
			// getPeriod(startDate, endDate);
			console.log(listReports);
		},
		[ listReports ]
	);
	const handleData = () => {
		let thisStart = moment(startDate).format('YYYY-MM-DD');
		let thisEnd = moment(endDate).format('YYYY-MM-DD');
		console.log(thisStart, thisEnd, id);
		props.getReport(thisStart, thisEnd, id);
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
						<FormControl variant="outlined" className={classes.formControl}>
							<InputLabel id="demo-simple-select-outlined-label">ASSET NAME</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-label"
								id="demo-simple-select-outlined"
								value={id}
								onChange={handleChange}
								label="ASSET NAME"
							>
								{listAssets.map((item) => <MenuItem value={item.id}>{item.asset_name}</MenuItem>)}
							</Select>
						</FormControl>
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
			<Col md={12}>
				<Card
					plain
					title="Report List"
					category=""
					ctTableFullWidth
					ctTableResponsive
					content={
						<div>
							<ReportPagination data={listReports} />
						</div>
					}
				/>
			</Col>
		</div>
	);
};

const mapDispatchToProps = { getAssets, getReport };

export default connect(null, mapDispatchToProps)(Datepicker);
