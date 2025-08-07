import React, { forwardRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    addsubscriptions,
    loading as subscriptionsLoading,
    errors as subscriptionsErrors,
    success as subscriptionsSuccess,
    setSuccess, setErrors
} from '../../store/slices/subscriptionsSlice'
import { useRouter } from "next/navigation";
import Grid from "@mui/material/Grid";
import { Alert, AlertTitle, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

function Create(props) {

    const dispatch = useDispatch()
    const { push } = useRouter()

    const loading = useSelector(subscriptionsLoading)
    const errors = useSelector(subscriptionsErrors)
    const success = useSelector(subscriptionsSuccess)

    const [successMsg, setSuccessMessage] = useState(null)
    const [name, setName] = useState('')

    const [price, setPrice] = useState()
    const [description, setDescription] = useState('')



    useEffect(() => {
        dispatch(setSuccess(false))
    }, [success])

    useEffect(() => {
        if (!loading && success) {
            setSuccessMessage('Package added successfully!')
            setTimeout(() => {
                push('/packages')
            }, 500)
        }
    }, [success, loading])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (loading) return

        dispatch(addsubscriptions({
            name: name,
            price: Number(price),
            description: description,
        }))
    }

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Typography variant='h5'>
                    Create Package
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
                        ) : null}
                        {errors && errors.length > 0 ? (
                            <Alert severity="error" sx={{ mb: 4 }}>
                                <AlertTitle>Errors</AlertTitle>
                                {errors.map((item, ind) => (
                                    <Box component='strong' sx={{ display: 'block' }} key={ind}>{item}</Box>
                                ))}
                            </Alert>
                        ) : null}
                        <form onSubmit={handleSubmit}>
                            <Grid row>
                                <Grid item xs={12}>
                                    <Stack direction='row' margin={10} gap={5}>
                                        <TextField fullWidth label='Package Name' value={name}
                                            onChange={e => setName(e.target.value)} />
                                              <TextField fullWidth label='Package Prcie' value={price}
                                            onChange={e => setPrice(e.target.value)} />
                                           

                                    </Stack>
                                    <Stack direction='row'  margin={10} gap={5}>

                                    <TextField  fullWidth label='Package Description' value={description}
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

export default Create;
