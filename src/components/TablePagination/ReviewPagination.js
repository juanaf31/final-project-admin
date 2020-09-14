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
import { getReviews } from '../../api';

const useStyles = makeStyles({
	root: {
		width: '100%'
	},
	container: {
		maxHeight: 440
	}
});

const ReviewPagination = (props) => {
	const classes = useStyles();
	const [ page, setPage ] = React.useState(0);
	const [ rowsPerPage, setRowsPerPage ] = React.useState(10);

	const listReviews = useSelector((state) => state.reviewreducer.listReviews);
	const [ data, setData ] = useState(listReviews);

	const [ modal, setModal ] = useState(false);
	const [ detail, setDetail ] = useState([]);

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
	useEffect(() => {
		props.getReviews();
		setData(listReviews);
		// console.log(listReviews);
	}, []);

	return (
		<Paper className={classes.root}>
			<TableContainer className={classes.container}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							<TableCell>No.</TableCell>
							<TableCell>Comment</TableCell>
							<TableCell>Rating</TableCell>
							<TableCell align="center">Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{(rowsPerPage > 0
							? listReviews.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							: listReviews).map((row, id) => (
							<TableRow key={id}>
								<TableCell>{id + 1}</TableCell>
								<TableCell>{row.comment}</TableCell>
								<TableCell>{row.rating}</TableCell>
								<TableCell align="center">
									<Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
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
				count={listReviews.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</Paper>
	);
};

const mapDispatchToProps = { getReviews };

export default connect(null, mapDispatchToProps)(ReviewPagination);
