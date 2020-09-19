import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { connect, useSelector } from 'react-redux';
import { Check, Pageview } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { getAssetsNotApproved, approve } from '../../api';
import ModalAsset from 'components/DetailModal/ModalAsset';

const useStyles = makeStyles({
	root: {
		width: '100%'
	},
	container: {
		maxHeight: 440
	}
});

const NotApprovedAssetPagination = (props) => {
	const classes = useStyles();
	const [ page, setPage ] = React.useState(0);
	const [ rowsPerPage, setRowsPerPage ] = React.useState(10);

	const notApproved = useSelector((state) => state.assetreducer.notApproved);

	const [ modal, setModal ] = useState(false);
	const [ detail, setDetail ] = useState([]);
	const [ data, setData ] = useState([]);

	const handleDetail = (data) => {
		setDetail(data);
		setModal(true);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};
	const handleClose = () => {
		setModal(false);
	};

	const handleApprove = (id) => {
		props.approve(id);
		setData(notApproved);
	};

	useEffect(
		() => {
			props.getAssetsNotApproved();
			return () => {
				props.getAssetsNotApproved();
			};
		},
		[ data ]
	);
	return (
		<div>
			<Paper className={classes.root}>
				<TableContainer className={classes.container}>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								<TableCell>No.</TableCell>
								<TableCell>Asset Name</TableCell>
								<TableCell>Car Capacity</TableCell>
								<TableCell>Motorcycle Capacity</TableCell>
								<TableCell>Bicycle Capacity</TableCell>
								<TableCell align="center">Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{(rowsPerPage > 0
								? notApproved.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								: notApproved).map((row, id) => (
								<TableRow key={id}>
									<TableCell>{id + 1}</TableCell>
									<TableCell>{row.asset_name}</TableCell>
									<TableCell>{row.car_capacity}</TableCell>
									<TableCell>{row.motorcycle_capacity}</TableCell>
									<TableCell>{row.bicycle_capacity}</TableCell>
									<TableCell align="center">
										<Button
											variant="contained"
											color="primary"
											startIcon={<Pageview />}
											onClick={() => handleDetail(row)}
										>
											Detail
										</Button>
										<Button
											variant="contained"
											color="green"
											startIcon={<Check />}
											onClick={() => handleApprove(row.id)}
										>
											Approve
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[ 10, 25, 100 ]}
					component="div"
					count={notApproved.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
			<ModalAsset modal={modal} data={detail} closeModal={handleClose} />
		</div>
	);
};

const mapDispatchToProps = { getAssetsNotApproved, approve };

export default connect(null, mapDispatchToProps)(NotApprovedAssetPagination);
