import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {
    getCategory,
    category as categoryDetail,
    loading as categoryLoading,
    errors as categoryErrors,
    success as categorySuccess, updateCategory, setErrors, setSuccess,
    // categories as categoriesList,

} from "../../store/slices/categorySlice";

import {
    getCategories,
    categories as categoriesList,
} from '../../store/slices/categoriesSlice'

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

function Category(props) {
    const {push, query} = useRouter()
    const {categoryId} = query

    const dispatch = useDispatch()

    const category = useSelector(categoryDetail)
    const loading = useSelector(categoryLoading)
    const errors = useSelector(categoryErrors)
    const success = useSelector(categorySuccess)

    const categories = useSelector(categoriesList)

    const [successMsg, setSuccessMessage] = useState('')
    const [name, setName] = useState('')
    const [parent_id, setParentId] = useState('')

    const [page, setPage] = useState(1)


    useEffect(() => {
        dispatch(getCategories({page}))
    }, [page])


    useEffect(() => {
        if (categoryId) {
            dispatch(getCategory({id: categoryId}))
        }
    }, [categoryId])

    useEffect(() => {
        if (category) {
            setName(category.name)
            setParentId(category.parent_id ?? '')
        }
    }, [category])

    useEffect(() => {
        dispatch(setSuccess(false))
    }, [success])

    useEffect(() => {
        if (!loading && success) {
            setSuccessMessage('Category updated successfully!')
            setTimeout(() => {
                push('/categories').then((r) => 'success');
            }, 500)
        }
    }, [success, loading])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (loading) return

        // if (!fileValidation()) return;
        let data = {
            name,
            parent_id
        }


        dispatch(updateCategory({
            id: categoryId,
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
                    Edit Category
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
                                            label="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <FormControl fullWidth>
                                            <Select label="Select" value={parent_id} onChange={(e) => setParentId(e.target.value)}>
                                                { !categories ? (
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                ) : null}
                                                {categories.map((category) => (
                                                    <MenuItem key={category.id} value={category.id}>
                                                        {category.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
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

export default Category;