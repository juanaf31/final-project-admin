import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function ModalAsset(props) {
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
						label="Asset Name"
						variant="outlined"
						value={props.data.asset_name}
						fullWidth
					/>
					<TextField
						InputProps={{
							readOnly: true
						}}
						autoFocus
						margin="dense"
						label="Asset Area"
						fullWidth
						variant="outlined"
						value={props.data.asset_area}
						// onChange={(e) => handleChange('goods_name', e.target.value)}
					/>
					<TextField
						multiline
						InputProps={{
							readOnly: true
						}}
						autoFocus
						margin="dense"
						label="Car Capacity"
						fullWidth
						variant="outlined"
						value={props.data.car_capacity}
						// onChange={(e) => handleChange('goods_quantity', e.target.value)}
					/>
					<TextField
						multiline
						InputProps={{
							readOnly: true
						}}
						autoFocus
						margin="dense"
						label="Motorcycle Capacity"
						variant="outlined"
						fullWidth
						value={props.data.motorcycle_capacity}
						// onChange={(e) => handleChange('goods_capacity', e.target.value)}
					/>
					<TextField
						multiline
						InputProps={{
							readOnly: true
						}}
						autoFocus
						margin="dense"
						label="Bicycle Capacity"
						variant="outlined"
						fullWidth
						value={props.data.bicycle_capacity}
						// onChange={(e) => handleChange('warehouse_id', e.target.value)}
					/>
					<TextField
						multiline
						InputProps={{
							readOnly: true
						}}
						autoFocus
						margin="dense"
						label="Latitude"
						variant="outlined"
						fullWidth
						value={props.data.latitude}
						// onChange={(e) => handleChange('warehouse_id', e.target.value)}
					/>
					<TextField
						multiline
						InputProps={{
							readOnly: true
						}}
						autoFocus
						margin="dense"
						label="Longitude"
						variant="outlined"
						fullWidth
						value={props.data.longitude}
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
export default ModalAsset;
