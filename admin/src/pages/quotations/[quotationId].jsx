import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {
    getQuotation,
    quotation as quotationDetail,
    loading as quotationLoading,
    errors as quotationErrors,
    success as quotationSuccess, updateQuotation, setErrors, setSuccess, getQuotationNameArabicTranslation,
    // quotations as quotationsList,

} from "../../store/slices/quotationSlice";

import {
    getQuotations,
    quotations as quotationsList,
} from '../../store/slices/quotationsSlice'

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Alert, AlertTitle, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function Quotation(props) {
    const {push, query} = useRouter()
    const {quotationId} = query

    const dispatch = useDispatch()

    const quotation = useSelector(quotationDetail)
    const loading = useSelector(quotationLoading)
    const errors = useSelector(quotationErrors)
    const success = useSelector(quotationSuccess)

    const quotations = useSelector(quotationsList)

    const [successMsg, setSuccessMessage] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [audio, setAudio] = useState('')

    const [page, setPage] = useState(1)


    useEffect(() => {
        dispatch(getQuotations({page}))
    }, [page])


    useEffect(() => {
        if (quotationId) {
            dispatch(getQuotation({id: quotationId}))
        }
    }, [quotationId])

    useEffect(() => {
        if (quotation) {
            setTitle(quotation.title)
            setDescription(quotation.description)
            setAuthor(quotation.author)
            setAudio(quotation.audio)
        }
    }, [quotation])

    useEffect(() => {
        dispatch(setSuccess(false))
    }, [success])

    useEffect(() => {
        if (!loading && success) {
            setSuccessMessage('Quotation updated successfully!')
            setTimeout(() => {
                push('/quotations').then((r) => 'success');
            }, 500)
        }
    }, [success, loading])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (loading) return

        // if (!fileValidation()) return;
        let data = {
            title,
            description,
            author,
            audio
        }


        dispatch(updateQuotation({
            id: quotationId,
            ...data
        }))

    }

    // const fileValidation = () => {
    //     let _errors = []
    //     /*if (file === null) {
    //         _errors.push("File is required!")
    //     }
    //     if (image === null) {
    //         _errors.push("Image is required!")
    //     }*/
    //
    //     if (_errors.length > 0) {
    //         dispatch(setErrors(_errors))
    //     }
    //
    //     return _errors.length < 1
    // }

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Typography variant='h5'>
                    Edit Quotation
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        {successMsg ? (
                            <Alert severity="success" sx={{mb: 4}}>
                                <AlertTitle>Success</AlertTitle>
                                <Box component='strong' sx={{display: 'block'}}>{successMsg}</Box>
                            </Alert>
                        ) : ''}
                        {errors && errors.length > 0 ? (
                            <Alert severity="error" sx={{mb: 4}}>
                                <AlertTitle>Errors</AlertTitle>
                                {errors.map((item, ind) => (
                                    <Box component='strong' sx={{display: 'block'}} key={ind}>{item}</Box>
                                ))}
                            </Alert>
                        ) : ''}
                        <form onSubmit={handleSubmit}>
                            <Grid row>
                                <Grid item xs={12}>
                                    <Stack direction="row" gap={5}>
                                        <TextField
                                            fullWidth
                                            label="Title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                        <TextField
                                            fullWidth
                                            label="Description"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                        <TextField
                                            fullWidth
                                            label="Author"
                                            value={author}
                                            onChange={(e) => setAuthor(e.target.value)}
                                        />
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} sx={{mt: 5}}>
                                    <Stack direction="row" gap={2}>
                                        <Button
                                            variant="contained"
                                            component="label"
                                        >
                                            Upload Audio
                                            <input
                                                type="file"
                                                hidden
                                                onChange={e => {
                                                    setAudio(e.target?.files[0] ?? null)
                                                }}
                                            />
                                        </Button>
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} sx={{ mt: 5 }}>
                                    <Button type="submit" variant="contained" disabled={loading}>
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

export default Quotation;
