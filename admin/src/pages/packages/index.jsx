import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    getsubscriptions,
    loading as subscriptionsLoading,
    subscriptions as subscriptionsList,
    total as subscriptionsTotal,
    totalPages as subscriptionsTotalPages,
    deletesubscriptions
} from '../../store/slices/subscriptionsSlice'
import Link from "next/link";
import { useRouter } from "next/navigation";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { IconButton, Pagination, Stack, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { Pencil, Delete } from 'mdi-material-ui';

function Subscriptions(props) {
    const dispatch = useDispatch();
    const { push } = useRouter();
    const loading = useSelector(subscriptionsLoading);
    const subscriptions = useSelector(subscriptionsList);
    const total = useSelector(subscriptionsTotal);
    const totalPages = useSelector(subscriptionsTotalPages);

    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);
    const [selectedSubscription, setSelectedSubscription] = useState(null);

    function onPageChange(e, p) {
        setPage(p);
    }

    const handleOpen = (id) => {
        setSelectedSubscription(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedSubscription(null);
    };

    const handleConfirmDelete = async () => {
        await dispatch(deletesubscriptions({ id: selectedSubscription }));
        await dispatch(getsubscriptions({ page }));
        handleClose();
    };

    useEffect(() => {
        dispatch(getsubscriptions({ page }));
    }, [page]);

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Stack direction="row">
                    <Typography variant='h5'>
                        All Packages
                    </Typography>
                    <Button component={Link} href='/packages/create' sx={{ marginLeft: 'auto' }}>
                        Create Packages
                    </Button>
                </Stack>
            </Grid>

            <Grid item xs={12}>
                <Card>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        {loading ? (
                            <Typography variant='h5' sx={{ my: 3 }} textAlign='center'>
                                Loading...
                            </Typography>
                        ) : (
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label='sticky table'>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>ID</TableCell>
                                            <TableCell>Package Name</TableCell>
                                            <TableCell>Package Price</TableCell>
                                            <TableCell>Package Description</TableCell>
                                            <TableCell>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {subscriptions.map((subscription) => (
                                            <TableRow hover role='checkbox' tabIndex={-1} key={subscription.id}>
                                                <TableCell>
                                                    <span>{subscription.id}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span>{subscription.name}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span>{subscription.price}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span>{subscription.description}</span>
                                                </TableCell>
                                                <TableCell width="200">
                                                    <IconButton
                                                        size="small"
                                                        variant="outlined"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            push(`/packages/${subscription.id}`);
                                                        }}
                                                        sx={{ marginLeft: 'auto' }}
                                                    >
                                                        <Pencil />
                                                    </IconButton>
                                                    <IconButton
                                                        size="small"
                                                        variant="outlined"
                                                        onClick={() => handleOpen(subscription.id)}
                                                        sx={{ marginLeft: 'auto' }}
                                                    >
                                                        <Delete />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )}
                        <Stack direction='row' sx={{ my: 4, display: (loading ? 'none' : '') }} justifyContent='center'>
                            <Pagination count={totalPages} onChange={onPageChange} />
                        </Stack>
                    </Paper>
                </Card>
            </Grid>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete this record?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure? you wan't to delete the package
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={handleConfirmDelete} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}

export default Subscriptions;
