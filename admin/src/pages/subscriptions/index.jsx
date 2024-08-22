import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    getsubscriptions,
    loading as subscriptionsLoading,
    subscriptions as subscriptionsList,
    total as subscriptionsTotal,
    totalPages as subscriptionsTotalPages,
    deletesubscriptions
} from '../../store/slices/subscriptionsSlice'
import Link from "next/link";
import {useRouter} from "next/navigation";
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
import {IconButton, Pagination, Stack} from "@mui/material";
import {Pencil, Delete} from 'mdi-material-ui'

function subscriptions(props) {

    const dispatch = useDispatch()
    const {push} = useRouter()

    const loading = useSelector(subscriptionsLoading)
    const subscriptions = useSelector(subscriptionsList)
    const total = useSelector(subscriptionsTotal)
    const totalPages = useSelector(subscriptionsTotalPages)

    const [page, setPage] = useState(1)

    function onPageChange(e, p) {
        setPage(p)
    }

    const handleDelete = async (e, id) => {
        e.preventDefault()
        await dispatch(deletesubscriptions({id}))
        await dispatch(getsubscriptions({page}))
    }

    useEffect(() => {
        dispatch(getsubscriptions({page}))
    }, [page])

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Stack direction="row">
                    <Typography variant='h5'>
                        All Subscriptions
                    </Typography>
                    <Button component={Link} href='/subscriptions/create' sx={{marginLeft: 'auto'}}>
                        Create Subscription
                    </Button>
                </Stack>
            </Grid>


            <Grid item xs={12}>
                <Card>
                    <Paper sx={{width: '100%', overflow: 'hidden'}}>
                        {loading ? <Typography variant='h5' sx={{my: 3}} textAlign='center'>Loading...</Typography> : (
                            <TableContainer sx={{maxHeight: 440}}>
                                <Table stickyHeader aria-label='sticky table'>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>ID</TableCell>
                                            <TableCell>Subscription Name</TableCell>
                                            <TableCell>Subscription Price</TableCell>
                                            <TableCell>Subscription Description</TableCell>
                                            <TableCell>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {subscriptions.map(subscriptions => {
                                            return (
                                                <TableRow hover role='checkbox' tabIndex={-1} key={subscriptions.id}>
                                                    <TableCell>
                                                        <span>{subscriptions.id}</span>
                                                    </TableCell>
                                                    <TableCell>
                                                        <span>{subscriptions.name}</span>
                                                    </TableCell>
                                                    <TableCell>
                                                        <span>{subscriptions.price}</span>
                                                    </TableCell>
                                                    <TableCell>
                                                        <span>{subscriptions.description}</span>
                                                    </TableCell>
                                                    

                                                    <TableCell width="200">
                                                        <IconButton
                                                            size="small"
                                                            variant="outlined"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                                push(`/subscriptions/${subscriptions.id}`)
                                                            }} sx={{marginLeft: 'auto'}}>
                                                            <Pencil/>
                                                        </IconButton>
                                                        <IconButton
                                                            size="small"
                                                            variant="outlined"
                                                            onClick={e => handleDelete(e, subscriptions.id)}
                                                            sx={{marginLeft: 'auto'}}>
                                                            <Delete/>
                                                        </IconButton>
                                                    </TableCell>

                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )}

                        <Stack direction='row' sx={{my: 4, display: (loading ? 'none' : '')}} justifyContent='center'>
                            <Pagination count={totalPages} onChange={onPageChange}/>
                        </Stack>
                    </Paper>
                </Card>
            </Grid>
        </Grid>
    );
}

export default subscriptions;
