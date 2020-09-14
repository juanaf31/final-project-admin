import React, { useContext, useEffect, useState } from 'react';
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
import DeleteIcon from '@material-ui/icons/Delete';
import { Pageview } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import ModalProvider from 'components/DetailModal/ModalProvider';
import ModalAsset from 'components/DetailModal/ModalAsset';
import { getAssets, deleteAsset } from '../../api';

const useStyles = makeStyles({
	root: {
		width: '100%'
	},
	container: {
		maxHeight: 440
	}
});

const AssetPagination = (props) => {
	const classes = useStyles();
	const [ page, setPage ] = React.useState(0);
	const [ rowsPerPage, setRowsPerPage ] = React.useState(10);

	const listAssets = useSelector((state) => state.assetreducer.listAssets);
	const [ ID, setID ] = useState('');
	const [ modal, setModal ] = useState(false);
	const [ detail, setDetail ] = useState([]);

	const handleClose = () => {
		setModal(false);
	};

	const handleDetail = (data) => {
		setDetail(data);
		// console.log(detail);
		setModal(true);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const handleDelete = (id) => {
		props.deleteAsset(id);
		setID(id);
	};

	useEffect(
		() => {
			props.getAssets();
		},
		[ ID ]
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
								? listAssets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								: listAssets).map((row, id) => (
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
											color="secondary"
											startIcon={<DeleteIcon />}
											onClick={() => handleDelete(row.id)}
										>
											Delete
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
					count={listAssets.length}
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

const mapDispatchToProps = { getAssets, deleteAsset };

export default connect(null, mapDispatchToProps)(AssetPagination);