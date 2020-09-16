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
import { getProviders, deleteProvider } from '../../api';
import Swal from 'sweetalert2';

const useStyles = makeStyles({
	root: {
		width: '100%'
	},
	container: {
		maxHeight: 440
	}
});

const ProviderPagination = (props) => {
	const classes = useStyles();
	const [ page, setPage ] = React.useState(0);
	const [ rowsPerPage, setRowsPerPage ] = React.useState(10);

	const listProviders = useSelector((state) => state.providerreducer.listProviders);
	const [ data, setData ] = useState([]);

	const [ modal, setModal ] = useState(false);
	const [ detail, setDetail ] = useState([]);
	// const [ ID, setID ] = useState('');
	// const [ mydata, setMydata ] = useState('');
	const [ clicked, setClicked ] = useState(false);

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
	const handleClose = () => {
		setModal(false);
	};

	const handleDelete = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.value) {
				props.deleteProvider(id);
				setData(listProviders);

				Swal.fire('Deleted!', 'Provider has been deleted.', 'success').then((result) => {
					// if (result.value) {
					// 	console.log('tes');
					// }
					props.getProviders();
				});
			}
		});
	};

	useEffect(() => {
		props.getProviders();
	}, []);
	return (
		<div>
			<Paper className={classes.root}>
				<TableContainer className={classes.container}>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								<TableCell>No.</TableCell>
								<TableCell>Name</TableCell>
								<TableCell>Email</TableCell>
								<TableCell>Username</TableCell>
								{/* <TableCell>Phone Number</TableCell>
								<TableCell>Address</TableCell> */}
								<TableCell align="center">Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{(rowsPerPage > 0
								? listProviders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								: listProviders).map((row, id) => (
								<TableRow key={row.id}>
									<TableCell>{id + 1}</TableCell>
									<TableCell>{row.fullname}</TableCell>
									<TableCell>{row.email}</TableCell>
									<TableCell>{row.username}</TableCell>
									{/* <TableCell>{row.phone_number}</TableCell>
									<TableCell>{row.address}</TableCell> */}
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
					count={listProviders.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
			<ModalProvider modal={modal} data={detail} closeModal={handleClose} />
		</div>
	);
};

const mapDispatchToProps = { getProviders, deleteProvider };

export default connect(null, mapDispatchToProps)(ProviderPagination);
