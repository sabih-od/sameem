import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
    getsubscription,
    subscription as subscriptionDetail,
    loading as subscriptionLoading,
    errors as subscriptionErrors,
    success as subscriptionSuccess, updatesubscription, setErrors, setSuccess
} from "../../store/slices/subscrtiptionSlice";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Alert, AlertTitle, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function subscription(props) {
    const { push, query } = useRouter()
    const { subscriptionId } = query

    const dispatch = useDispatch()

    const subscription = useSelector(subscriptionDetail)
    const loading = useSelector(subscriptionLoading)
    const errors = useSelector(subscriptionErrors)
    const success = useSelector(subscriptionSuccess)

    const [successMsg, setSuccessMessage] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        if (subscriptionId) {
            dispatch(getsubscription({ id: subscriptionId }))
        }
    }, [subscriptionId])

    useEffect(() => {
        if (subscription) {
            console.log("Subscription ",subscription);
            
            setName(subscription.name)
            setPrice(subscription.price)
            setDescription(subscription.description ?? '')
        }
    }, [subscription])

    useEffect(() => {
        dispatch(setSuccess(false))
    }, [success])

    useEffect(() => {
        if (!loading && success) {
            setSuccessMessage('subscription updated successfully!')
            setTimeout(() => {
                push('/subscription').then((r) => 'success');
            }, 500)
        }
    }, [success, loading])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (loading) return

        // if (!fileValidation()) return;
        let data = {
            name,
            price,
            description,
        }
        dispatch(updatesubscription({
            id: subscriptionId,
            ...data
        }))

    }

    const fileValidation = () => {
        let _errors = []
        /*if (file === null) {
            _errors.push("File is required!")
        }
        if (image === null) {
            _errors.push("Image is required!")
        }*/

        if (_errors.length > 0) {
            dispatch(setErrors(_errors))
        }

        return _errors.length < 1
    }

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Typography variant='h5'>
                    Edit subscription
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        {successMsg ? (
                            <Alert severity="success" sx={{ mb: 4 }}>
                                <AlertTitle>Success</AlertTitle>
                                <Box component='strong' sx={{ display: 'block' }}>{successMsg}</Box>
                            </Alert>
                        ) : ''}
                        {errors && errors.length > 0 ? (
                            <Alert severity="error" sx={{ mb: 4 }}>
                                <AlertTitle>Errors</AlertTitle>
                                {errors.map((item, ind) => (
                                    <Box component='strong' sx={{ display: 'block' }} key={ind}>{item}</Box>
                                ))}
                            </Alert>
                        ) : ''}
                        <form onSubmit={handleSubmit}>
                            <Grid container>
                                <Grid item  xs={12}>
                                    <Stack margin={10} direction='row' gap={5}>
                                        <TextField fullWidth label='Subscription Name' value={name}
                                            onChange={e => setName(e.target.value)} />
                                        <TextField fullWidth label='Subscription Price' value={price}
                                            onChange={e => setPrice(e.target.value)} />
                                    </Stack>
                                    <Stack margin={10} direction='row' gap={5}>
                                        <TextField fullWidth label='Subscription Description' value={description}
                                            onChange={e => setDescription(e.target.value)} />

                                    </Stack>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: 5 }}>
                                    <Button type='submit' variant='contained' disabled={loading}>
                                        {loading ? 'Saving' : 'Save'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default subscription;
