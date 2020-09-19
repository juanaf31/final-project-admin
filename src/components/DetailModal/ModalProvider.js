import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function ModalProvider(props) {
	const [ disable, setDisable ] = useState(true);

	const handleClose = () => {
		props.closeModal();
		setDisable(true);
	};

	const handleSave = () => {
		props.closeModal();
		setDisable(true);
	};

	useEffect(() => {}, [ props.modal ]);

	return (
		<div>
			<Dialog open={props.modal} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Details</DialogTitle>
				<DialogContent>
					<TextField
						InputProps={{
							readOnly: true
						}}
						autoFocus
						margin="dense"
						label="Username"
						variant="outlined"
						value={props.data.username}
						fullWidth
					/>
					<TextField
						InputProps={{
							readOnly: true
						}}
						autoFocus
						margin="dense"
						label="Fullname"
						fullWidth
						variant="outlined"
						value={props.data.fullname}
						// onChange={(e) => handleChange('goods_name', e.target.value)}
					/>
					<TextField
						multiline
						InputProps={{
							readOnly: true
						}}
						autoFocus
						margin="dense"
						label="Email"
						fullWidth
						variant="outlined"
						value={props.data.email}
						// onChange={(e) => handleChange('goods_quantity', e.target.value)}
					/>
					<TextField
						multiline
						InputProps={{
							readOnly: true
						}}
						autoFocus
						margin="dense"
						label="Phone Number"
						variant="outlined"
						fullWidth
						value={props.data.phone_number}
						// onChange={(e) => handleChange('goods_capacity', e.target.value)}
					/>
					<TextField
						multiline
						InputProps={{
							readOnly: true
						}}
						autoFocus
						margin="dense"
						label="Born Date"
						variant="outlined"
						fullWidth
						value={props.data.borndate}
						// onChange={(e) => handleChange('warehouse_id', e.target.value)}
					/>
					<TextField
						multiline
						InputProps={{
							readOnly: true
						}}
						autoFocus
						margin="dense"
						label="Address"
						variant="outlined"
						fullWidth
						value={props.data.address}
						// onChange={(e) => handleChange('warehouse_id', e.target.value)}
					/>
					<TextField
						multiline
						InputProps={{
							readOnly: true
						}}
						autoFocus
						margin="dense"
						label="Status"
						variant="outlined"
						fullWidth
						value="Active"
						// onChange={(e) => handleChange('warehouse_id', e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					{disable ? (
						<div>
							<Button onClick={handleClose} color="primary">
								OK
							</Button>
							{/* <Button color="primary" onClick={handleEdit}>
								Edit
							</Button> */}
						</div>
					) : (
						<div>
							<Button onClick={handleClose} color="primary">
								CANCEL
							</Button>
							<Button color="primary" onClick={handleSave}>
								Save
							</Button>
						</div>
					)}
				</DialogActions>
			</Dialog>
		</div>
	);
}
export default ModalProvider;
