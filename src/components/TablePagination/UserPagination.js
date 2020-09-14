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
import { connect, useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser } from '../../api';
import { Button } from '@material-ui/core';
import ModalUser from 'components/DetailModal/ModalUser';
import DeleteIcon from '@material-ui/icons/Delete';
import { Pageview } from '@material-ui/icons';

const useStyles = makeStyles({
	root: {
		width: '100%'
	},
	container: {
		maxHeight: 440
	}
});

const UserPagination = (props) => {
	const classes = useStyles();
	const [ page, setPage ] = React.useState(0);
	const [ rowsPerPage, setRowsPerPage ] = React.useState(10);
	const [ ID, setID ] = useState('');

	const listUsers = useSelector((state) => state.userreducer.listUsers);

	const [ modal, setModal ] = useState(false);
	const [ detail, setDetail ] = useState([]);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const handleDetail = (data) => {
		setDetail(data);
		// console.log(detail);
		setModal(true);
	};

	const handleClose = () => {
		setModal(false);
	};

	const handleDelete = (id) => {
		props.deleteUser(id);
		setID(id);
	};

	useEffect(
		() => {
			props.getUsers();
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
								? listUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								: listUsers).map((row, id) => (
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
					count={listUsers.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
			<ModalUser modal={modal} data={detail} closeModal={handleClose} />
		</div>
	);
};

const mapDispatchToProps = { getUsers, deleteUser };

export default connect(null, mapDispatchToProps)(UserPagination);
