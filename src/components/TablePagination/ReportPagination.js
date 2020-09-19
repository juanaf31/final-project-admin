import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
	root: {
		width: '100%'
	},
	container: {
		maxHeight: 440
	}
});

const ReportPagination = (props) => {
	const classes = useStyles();
	const [ page, setPage ] = React.useState(0);
	const [ rowsPerPage, setRowsPerPage ] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<div>
			<Paper className={classes.root}>
				<TableContainer className={classes.container}>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								<TableCell>No.</TableCell>
								<TableCell>Asset Name</TableCell>
								<TableCell>Date</TableCell>
								<TableCell>Total Parked</TableCell>
								<TableCell>Total Revenue</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{(rowsPerPage > 0
								? props.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								: props.data).map((row, id) => (
								<TableRow key={id}>
									<TableCell>{id + 1}</TableCell>
									<TableCell>{row.asset_name}</TableCell>
									<TableCell>{row.date}</TableCell>
									<TableCell>{row.total_parked}</TableCell>
									<TableCell>{row.total_revenue}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[ 10, 25, 100 ]}
					component="div"
					count={props.data.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
			{/* <ModalAsset modal={modal} data={detail} closeModal={handleClose} /> */}
		</div>
	);
};

// const mapDispatchToProps = { getReport };

export default ReportPagination;
