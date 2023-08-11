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
import {Alert, AlertTitle, IconButton, Pagination, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import {
    getCategoryPosts,
    loading as categoryPostsLoading,
    categoryPosts as categoryPostsList,
    total as categoryPostsTotal,
    totalPages as categoryPostsTotalPages,
} from '../../store/slices/categoryPostsSlice'
import Link from "next/link";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {Delete, Pencil} from "mdi-material-ui";
import {getPosts} from "../../store/slices/postsSlice";

function Category(props) {
    const {push, query} = useRouter()
    const {categoryId} = query

    const dispatch = useDispatch()

    const category = useSelector(categoryDetail)
    const loading = useSelector(categoryLoading)
    const errors = useSelector(categoryErrors)
    const success = useSelector(categorySuccess)

    const categories = useSelector(categoriesList)
    const categoryPosts = useSelector(categoryPostsList)

    console.log("categoryPosts",categoryPosts.data);

    const [successMsg, setSuccessMessage] = useState('')
    // const [name, setName] = useState('')
    // const [parent_id, setParentId] = useState('')

    const [page, setPage] = useState(1)


    useEffect(() => {
        dispatch(getCategories({page}))
    }, [page])


    useEffect(() => {
        if (categoryId) {
            dispatch(getCategoryPosts({id: categoryId}))
        }
    }, [categoryId])


    useEffect(() => {
        if (categoryId) {
            dispatch(getCategory({id: categoryId}))
        }
    }, [categoryId])

    // useEffect(() => {
    //     if (category) {
    //         setName(category.name)
    //         setParentId(category.parent_id ?? '')
    //     }
    // }, [category])

    useEffect(() => {
        dispatch(setSuccess(false))
    }, [success])

    // useEffect(() => {
    //     if (!loading && success) {
    //         setSuccessMessage('Category updated successfully!')
    //         setTimeout(() => {
    //             push('/categories').then((r) => 'success');
    //         }, 500)
    //     }
    // }, [success, loading])

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     if (loading) return
    //
    //     // if (!fileValidation()) return;
    //     let data = {
    //         name,
    //         parent_id
    //     }
    //
    //
    //     // dispatch(updateCategory({
    //     //     id: categoryId,
    //     //     ...data
    //     // }))
    //
    // }

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
                <Stack direction="row">
                    <Typography variant='h5'>
                        Posts
                    </Typography>
                    <Button component={Link} href='/posts/create' sx={{marginLeft: 'auto'}}>
                        Create Post
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
                                            <TableCell>Title</TableCell>
                                            <TableCell>Description</TableCell>
                                            <TableCell>Time</TableCell>
                                            <TableCell>Video</TableCell>
                                            <TableCell>Audio</TableCell>
                                            <TableCell className="text-center" width="150">Image</TableCell>
                                            <TableCell>PDF</TableCell>
                                            <TableCell>Action</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {categoryPosts.data ? (
                                            categoryPosts.data.map((post) => {

                                                return (
                                                    <TableRow hover role='checkbox' tabIndex={-1} key={post.id}>
                                                        <TableCell>
                                                            <span>{post.id}</span>
                                                        </TableCell>
                                                        <TableCell>
                                                            <span>{post.title}</span>
                                                        </TableCell>
                                                        <TableCell>
                                                            <span>{post.description}</span>
                                                        </TableCell>
                                                        <TableCell>
                                                            <span>{post.time}</span>
                                                        </TableCell>
                                                        <TableCell>
                                                            {post.video && (
                                                                <video width="240" height="150" controls>
                                                                    <source src={post.video} type="video/mp4" />
                                                                    Your browser does not support the video tag.
                                                                </video>
                                                            )}
                                                        </TableCell>

                                                        <TableCell>
                                                            {post.audio && (
                                                                <audio controls>
                                                                    <source src={post.audio} type="audio/mpeg" />
                                                                    Your browser does not support the audio element.
                                                                </audio>
                                                            )}
                                                        </TableCell>

                                                        <TableCell className="text-center">
                                                            {(post.image !== null && post.image !== 'null') ? (
                                                                <Button tag='a' href={post.image} target="_blank"
                                                                        layout="link"
                                                                        size="small">
                                                                    View Image
                                                                </Button>
                                                            ) : null}
                                                        </TableCell>

                                                        <TableCell className="text-center">
                                                            {(post.pdf !== null && post.pdf !== 'null') ? (
                                                                <Button tag='a' href={post.pdf} target="_blank"
                                                                        layout="link"
                                                                        size="small">
                                                                    View File
                                                                </Button>
                                                            ) : null}
                                                        </TableCell>

                                                        <TableCell width="200">
                                                            <IconButton
                                                                size="small"
                                                                variant="outlined"
                                                                onClick={e => {
                                                                    e.preventDefault()
                                                                    push(`/posts/${post.id}`)
                                                                }} sx={{marginLeft: 'auto'}}>
                                                                <Pencil/>
                                                            </IconButton>
                                                            <IconButton
                                                                size="small"
                                                                variant="outlined"
                                                                onClick={e => handleDelete(e, post.id)}
                                                                sx={{marginLeft: 'auto'}}>
                                                                <Delete/>
                                                            </IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })
                                        ) : (
                                            <TableRow>
                                                <TableCell colSpan={9}>No posts available</TableCell>
                                            </TableRow>
                                        )}

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )}


                    </Paper>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Category;