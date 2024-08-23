import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    getUserSubscriptions,
    loading as UserSubscriptionsLoading,
    userSubscriptions as UserSubscriptionsList,
    total as UserSubscriptionsTotal,
    totalPages as UserSubscriptionsTotalPages,
} from '../../store/slices/userSubscriptionsSlice'
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
import {  Pagination, Stack} from "@mui/material";

function UserSubscriptions(props) {
    const dispatch = useDispatch();
    const { push } = useRouter();
    const loading = useSelector(UserSubscriptionsLoading);
    const UserSubscriptions = useSelector(UserSubscriptionsList);
    const total = useSelector(UserSubscriptionsTotal);
    const totalPages = useSelector(UserSubscriptionsTotalPages);

    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);

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
        await dispatch(getUserSubscriptions({ page }));
        handleClose();
    };

    useEffect(() => {
        dispatch(getUserSubscriptions({ page }));
    }, [page]);
   
    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Stack direction="row">
                    <Typography variant='h5'>
                        All User Subscriptions
                    </Typography>

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
                                            <TableCell>User Name</TableCell>
                                            <TableCell>User Email</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {UserSubscriptions.map((subscription) => (
                                            <TableRow hover role='checkbox' tabIndex={-1} key={subscription.id}>
                                                <TableCell>
                                                    <span>{subscription.id}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span>{subscription.user_id}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span>{subscription.subscription_price}</span>
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


        </Grid>
    );
}

export default UserSubscriptions;
