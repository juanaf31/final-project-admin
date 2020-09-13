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

const useStyles = makeStyles({
	root: {
		width: '100%'
	},
	container: {
		maxHeight: 440
	}
});

const ProviderPagination = () => {
	const classes = useStyles();
	const [ page, setPage ] = React.useState(0);
	const [ rowsPerPage, setRowsPerPage ] = React.useState(10);

	const listProviders = useSelector((state) => state.providerreducer.listProviders);
	const [ data, setData ] = useState(listProviders);
	useEffect(
		() => {
			setData(listProviders);
			console.log(listProviders);
		},
		[ listProviders ]
	);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper className={classes.root}>
			<TableContainer className={classes.container}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							<TableCell>Dates</TableCell>
							<TableCell>USD</TableCell>
							<TableCell>IDR</TableCell>
							<TableCell>GBP</TableCell>
							<TableCell>EUR</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{/* {(rowsPerPage > 0
							? periodeDate.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							: periodeDate).map((row) => (
							<TableRow key={row}>
								<TableCell>{row}</TableCell>
								<TableCell>USD</TableCell>
								<TableCell>IDR</TableCell>
								<TableCell>GBP</TableCell>
								<TableCell>EUR</TableCell>
								<TableCell align="right" />
							</TableRow>
						))} */}
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
	);
};

export default ProviderPagination;
